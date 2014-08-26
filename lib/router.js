Router.map(function () {
  this.route('cards-list', {
    path: '/'
  });

  this.route('card', {
    path: '/:slug',
    layoutTemplate: 'layout',
    data: function () { return {"slug": this.params.slug}; }
  });

  this.route('rss', {
    where: 'server',
    path: '/feed/rss.xml',
    action: function () {
      var feed = new RSS({
        title: "Bralador RSS",
        description: "The latest posts."
      });
      Cards.find({}, {limit: 20}).forEach(function (card) {
        feed.item({
          title: card.slug,
          description: card.title,
          url: '/' + card.slug
        });
      });
      this.response.write(feed.xml());
      this.response.end();
    }
  });
});