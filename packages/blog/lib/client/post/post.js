Template.post.postFields = function () {
  return this.post;
};

Template.post.rendered = function () {
  $('.post').hide();
  $('.post').fadeIn(500);
};
