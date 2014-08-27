Router.map(function () {
  this.route('home', {
    path: '/',
    layoutTemplate: 'layout',
    template: 'card',
    data: function () {
      return {card: Cards.findOne()};
    }
  });

  this.route('card', {
    path: '/article/:slug',
    layoutTemplate: 'layout',
    data: function () {
      return {card: Cards.findOne(
        {slug: this.params.slug},
        {fields: {content: 1}}
      )};
    }
  });
  
  this.route('tag-filter', {
    path: '/tag/:tag',
    layoutTemplate: 'layout',
    template: 'card',
    data: function () {
      return {
        card: Cards.findOne({tag: this.params.tag}),
        tagQuery: this.params.tag
      };
    }
  });

  this.route('feed', {
    where: 'server',
    path: '/feed.xml',
    action: function () {
      var feed = new RSS({
        title: "Bralador RSS",
        description: "The latest posts.",
        feed_url: Meteor.absoluteUrl() + 'feed.xml',
        site_url: Meteor.absoluteUrl()
      });
      Cards.find({}, {limit: 20}).forEach(function (card) {
        feed.item({
          title: card.slug,
          description: card.title,
          url: Meteor.absoluteUrl() + "article/" + card.slug,
          guid: card._id
        });
      });
      this.response.write(feed.xml());
      this.response.end();
    }
  });
});