Router.map(function () {
  Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
  });
  Router.map(function () {
    this.route('home', {
      path: '/',
      template: 'postsList'
    });
    this.route('tag-filter', {
      path: '/tag/:tag',
      template: 'postsList',
      data: function () { return {tagQuery: this.params.tag}; }
    });
  });
});
