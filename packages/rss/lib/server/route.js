Meteor.startup(function () {
  Router.map(function () {
    this.route('feed', {
      where: 'server',
      path: '/feed.xml',
      action: function () {
        this.response.write(serveRSS());
        this.response.end();
      }
    });
  });
});
