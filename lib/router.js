Router.map(function () {
  Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
  });
  Router.map(function () {
    this.route('home', {
      path: '/',
      template: 'postsList',
      onAfterAction: function () {
        document.title = "Bralador : markdown static blog";
      }
    });
    this.route('tag-filter', {
      path: '/tag/:tag',
      template: 'postsList',
      data: function () { return {tagQuery: this.params.tag}; },
      onAfterAction: function () {
        document.title = "Bralador : " + this.params.tag + " related posts";
      }
    });
  });
});
