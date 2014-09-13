Meteor.startup(function () {
  Meteor.call('infos', '', function (err, infos) {
    document.title = infos.blog.title;
    Session.set("blogName", infos.blog.name);
    Session.set("menuTitle", infos.blog.menuTitle);
  });
});
