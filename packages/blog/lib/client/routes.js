Meteor.startup(function () {
  Router.configure({
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('all-posts'); },
  });
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
  Router.onBeforeAction('loading');
});
