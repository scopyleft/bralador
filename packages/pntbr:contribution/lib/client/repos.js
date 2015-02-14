var repos = [
  {owner: 'pointbar', repo: 'gymkhana-contenu'}
];

reposContributionList(repos);

Template.repos.helpers({
  repos: function () {
    return repos;
  }
});

Template.repos.events({
  'click a.glyphicon': function (e) {
    e.preventDefault();

    $('ul.' + e.target.id).toggle();
  }
})
