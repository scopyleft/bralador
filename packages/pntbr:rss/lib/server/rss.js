serveRSS = function () {
  var feed = new RSS({
    title: "Multi BàO RSS",
    description: "The latest posts.",
    feed_url: Meteor.absoluteUrl() + 'feed.xml',
    site_url: Meteor.absoluteUrl()
  });

  Meteor.apply("getContributionList", ['scopyleft', 'multibao-contribution', 'contributions'], function (err, result) {
    result.forEach(function (post) {
      feed.item({
        title: post.slug,
        description: post.title,
        url: Meteor.absoluteUrl() + "fiche/" + post.slug,
        guid: post._id
      });
    });

  });

  feed.item({
    title: "title",
    description: "description",
    url: "url",
    guid: "id"
  });

  return feed.xml();
};
