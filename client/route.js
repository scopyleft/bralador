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
        return {
          repo: github_repo.byLabel('gymkhana'),
          folder: 'pages',
          file: 'presentation.md'
        };
      }
    });
  });
});
