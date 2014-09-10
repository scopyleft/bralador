Meteor.startup(function () {

  Router.map(function () {
    
    this.route('home', {
      path: '/',
      template: 'postsList',
      data: function () {
        return {post: Posts.findOne()};
      }
    });

    this.route('post', {
      path: '/article/:slug',
      data: function () {
        return {post: Posts.findOne(
          {slug: this.params.slug},
          {fields: {content: 1}}
        )};
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
