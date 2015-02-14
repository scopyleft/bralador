Template.contributionContent.helpers({
  content: function () {
    return Session.get('contribution');
  }
});

Template.contributionList.helpers({
  contributions: function () {
    return Session.get(this.repos.owner + '/' + this.repos.repo);
  },
  repo: function () {
    return this.repos;
  }
});
