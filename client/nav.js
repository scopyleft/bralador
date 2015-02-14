Template.nav.helpers({
  blogTitle: function () {
    return blog.title;
  },
  repo: function () {
    return github_repo.byLabel('gymkhana');
  },
  pages: function () {
    return [
      {title: "Présentation", slug: "presentation"},
      {title: "Nous contacter", slug: "nous_contacter"},
      {title: "Mentions légales", slug: "mentions_legales"}
    ];
  }
});
