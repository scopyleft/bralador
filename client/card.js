Template.card.cardFields = function () {
  return (this.slug) && Cards.findOne({slug: this.slug}, {fields: {content: 1}});
}