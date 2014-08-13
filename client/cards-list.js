Template.cardsList.cards = function () {
  return Cards.find();
};

Template.cardsList.events({
  'click a': function () {
    $('div#card').hide();
    $('div#card').fadeIn(1000);
  }
});