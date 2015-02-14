base64toString = function (base64) {
  return new Buffer(base64, 'base64').toString();
}

unslug = function (slug) {
  return slug.replace(/_/g, ' ');
}

buildContributionList = function (jsonGithub, repo) {
  if (! jsonGithub) {
    throw new Meteor.Error("contrib-list", "no jsonGithub ressource");
  }

  return jsonGithub.data.filter(function (contributionMeta) {
    return /\.md$/.test(contributionMeta.name);
  }).map(function (contributionMeta) {
    var name = contributionMeta.name.split('.md')[0];

    return {
      slug: name,
      title: unslug(name),
      repo: repo
    };
  });
}

buildContribution = function (jsonGithub) {
  if (! jsonGithub) {
    throw new Meteor.Error("contrib", "no jsonGithub ressource");
  }
  return base64toString(jsonGithub.data.content);
}
