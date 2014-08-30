Router.map(function () {
  Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
  });
  
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
});