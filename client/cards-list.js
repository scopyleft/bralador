Template.cardsList.helpers({
  cards: function () {
    var query = (this.tagQuery) ? {tag: this.tagQuery} : {};
    return Cards.find(query, {fields: {content: 0}});
  },
  all: function () {
    return (this.tagQuery);
  }
});

Template.cardsList.events({
  'click a': function () {
    $('div#card').hide().fadeIn(1000);
  },
  'mouseover': function () {
    $('nav#cards-list').css({opacity: 1});
  },
  'mouseout': function () {
    $('nav#cards-list').css({opacity: 0.7});
  }
});