Meteor.startup(function () {

  Assets.getText("_infos.json", function (err, infos) {
    Meteor.methods({
      infos: function () {
        return JSON.parse(infos);
      }
    });
  });

  Assets.getText("contribution/_metadata.json", function (err, metadata) {
    Posts.remove({});
    _.each(JSON.parse(metadata), function (post) {
      Assets.getText("contribution/" + post.slug + ".md", function (err, content) {
        post.content = content;
        Posts.insert(post);
      });
    });
  });

  Meteor.publish("all-posts", function () {
    return Posts.find();
  });

});
