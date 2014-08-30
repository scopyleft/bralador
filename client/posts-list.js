Template.postsList.helpers({
  posts: function () {
    var query = (this.tagQuery) ? {tag: this.tagQuery} : {};
    return Posts.find(query, {fields: {content: 0}});
  },
  all: function () {
    return (this.tagQuery);
  }
});

Template.postsList.events({
  'click a': function () {
    $('div#post').hide().fadeIn(300);
  },
  'mouseover': function () {
    $('nav#posts-list').css({opacity: 1});
  },
  'mouseout': function () {
    $('nav#posts-list').css({opacity: 0.7});
  }
});