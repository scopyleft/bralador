serveRSS = function () {
  var feed = new RSS({
    title: "Bralador RSS",
    description: "The latest posts.",
    feed_url: Meteor.absoluteUrl() + 'feed.xml',
    site_url: Meteor.absoluteUrl()
  });
  
  Posts.find({}, {limit: 20}).forEach(function (post) {
    feed.item({
      title: post.slug,
      description: post.title,
      url: Meteor.absoluteUrl() + "article/" + post.slug,
      guid: post._id
    });
  });
  
  return feed.xml();
};