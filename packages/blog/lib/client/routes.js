Meteor.startup(function () {
  Router.configure({
    loadingTemplate: 'loading',
    waitOn: function () { return Meteor.subscribe('all-posts'); }
  });
  Router.map(function () {
    this.route('post', {
      path: '/article/:slug',
      action: function () {
        if (this.data()) {
          this.render();
          document.title = this.data().title;
        } else {
          this.render('notFound');
        }
      },
      data: function () {
        return Posts.findOne(
          {slug: this.params.slug},
          {fields: {content: 1, title: 1}}
        );
      }
    });
  });
  Router.onBeforeAction('loading');
});
