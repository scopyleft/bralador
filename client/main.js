Meteor.startup(function () {
  Meteor.subscribe("all-posts");
  Meteor.call('infos', '', function (err, infos) {
    Session.set("blogName", infos.blog.name);
    document.title = infos.blog.title;
  });
});