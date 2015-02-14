Meteor.startup(function () {
  Router.map(function () {
    Router.configure({
      layoutTemplate: 'layout',
      notFoundTemplate: 'notFound'
    });

    this.route('home', {
      path: '/',
      template: 'contributionContent',
      data: function () {
        var repo = {owner: 'poinbar', repo: 'gymkhana-contenu'};

        setContribution(repo, 'pages', 'presentation.md');
      }
    });

    this.route('contribution', {
      path: '/:folder/:owner/:repo/:slug',
      template: 'contributionContent',
      data: function () {
        var repo = {owner:  this.params.owner, repo:  this.params.repo};

        setContribution(repo, this.params.folder, this.params.slug + '.md');
      }
    });
  });
});
