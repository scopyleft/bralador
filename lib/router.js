Router.map(function () {
  Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
  });
  
  this.route('home', {
    path: '/',
    layoutTemplate: 'layout',
    template: 'post',
    data: function () {
      return {post: Posts.findOne()};
    }
  });

  this.route('post', {
    path: '/article/:slug',
    layoutTemplate: 'layout',
    data: function () {
      return {post: Posts.findOne(
        {slug: this.params.slug},
        {fields: {content: 1}}
      )};
    }
  });
  
  this.route('tag-filter', {
    path: '/tag/:tag',
    layoutTemplate: 'layout',
    template: 'post',
    data: function () {
      return {
        post: Posts.findOne({tag: this.params.tag}),
        tagQuery: this.params.tag
      };
    }
  });
});