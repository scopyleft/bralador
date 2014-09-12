Meteor.startup(function () {
  Router.map(function () {
    this.route('post', {
      path: '/article/:slug',
      data: function () {
        return {
          post: Posts.findOne(
            {slug: this.params.slug},
            {fields: {content: 1}}
          )
        };
      }
    });
  });
});
