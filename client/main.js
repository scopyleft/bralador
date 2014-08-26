Meteor.startup(function () {
  Meteor.subscribe("all-cards");
  Meteor.call('infos', '', function (err, infos) {
    Session.set("blogTitle", infos.blog.title);
  });
});