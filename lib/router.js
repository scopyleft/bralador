Router.map(function () {
  Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
  });

  Router.map(function () {
    this.route('home', {
      path: '/',
      template: 'postsList',
      data: function () {
        return {post: Posts.findOne()};
      }
    });

    this.route('tag-filter', {
      path: '/tag/:tag',
      template: 'postsList',
      data: function () {
        return {
          post: Posts.findOne({tag: this.params.tag}),
          tagQuery: this.params.tag
        };
      }
    });  
  });
});
