Template.postsList.helpers({
  menuTitle: function () { return Session.get("menuTitle"); },
  posts: function () {
    var query = (this.tagQuery) ? {tag: this.tagQuery} : {};
    return Posts.find(query, {fields: {content: 0}});
  },
  all: function () {
    return (this.tagQuery);
  }
});

Template.postsList.rendered = function () {
  $('.posts-list').hide();
  $('.posts-list').fadeIn(500);
};
