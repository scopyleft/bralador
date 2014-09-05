Template.postsList.helpers({
  posts: function () {
    var query = (this.tagQuery) ? {tag: this.tagQuery} : {};
    return Posts.find(query, {fields: {content: 0}});
  },
  all: function () {
    return (this.tagQuery);
  }
});
