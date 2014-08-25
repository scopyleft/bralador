Router.map(function () {
  this.route('cards-list', {
    path: '/'
  });
  
  this.route('card', {
    path: '/:slug',
    layoutTemplate: 'layout',
    data: function () { return {"slug": this.params.slug}; }
  });
});