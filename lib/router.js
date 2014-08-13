Router.map(function () {
  this.route('cards-list', {
    path: '/'
  });
  
  this.route('card', {
    path: '/fiche/:slug',
    layoutTemplate: 'layout',
    waitOn: function () {
      this.data = {slug: this.params.slug};
    }
  });
});