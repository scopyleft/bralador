setContributionList = function (repo, folder) {
  Meteor.apply('getContributionList', [repo.owner, repo.repo, folder], function (err, result) {
    Session.set(repo.owner + '/' + repo.repo, result);
  });
}

setContribution = function (repo, folder, filename) {
  Meteor.apply('getContribution', [repo.owner, repo.repo, folder, filename], function (err, result) {
    Session.set('contribution', result);
  });
}

reposContributionList = function (repos) {
  repos.map(function (repo) {
    setContributionList(repo, 'contributions');
  });
}
