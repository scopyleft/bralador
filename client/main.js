Meteor.startup(function () {
  Meteor.subscribe("all-cards");
  Meteor.call('infos', '', function (err, infos) {
    Session.set("blogName", infos.blog.name);
    document.title = infos.blog.title;
  });
});