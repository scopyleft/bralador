Meteor.startup(function () {
  Router.map(function () {
    Router.configure({
      layoutTemplate: 'layout',
      notFoundTemplate: 'notFound'
    });

    this.route('home', {
      path: '/',
      template: 'canvas',
    });
  });
});
