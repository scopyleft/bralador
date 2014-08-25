Template.cardsList.helpers({
  cards: function () {
    return Cards.find({}, {fields: {content: 0}});
  }
});

Template.cardsList.events({
  'click a': function () {
    $('div#card').hide().fadeIn(1000);
  }
});