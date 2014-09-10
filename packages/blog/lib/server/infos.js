Meteor.startup(function () {
  Assets.getText("private/_infos.json", function (err, infos) {
    Meteor.methods({
      infos: function () {
        return JSON.parse(infos);
      }
    });
  });
});
