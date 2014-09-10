Meteor.startup(function () {
  Meteor.publish("all-posts", function () {
    return Posts.find();
  });
});
