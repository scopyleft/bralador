Meteor.startup(function () {
  Meteor.subscribe("all-posts");
  Meteor.call('infos', '', function (err, infos) {
    Session.set("blogName", infos.blog.name);
    Session.set("menuTitle", infos.blog.menu_title);
    document.title = infos.blog.title;
  });
});
