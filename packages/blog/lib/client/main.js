Meteor.startup(function () {
  Meteor.subscribe("all-posts");
  Meteor.call('infos', '', function (err, infos) {
    document.title = infos.blog.title;
    Session.set("blogName", infos.blog.name);
  });
});
