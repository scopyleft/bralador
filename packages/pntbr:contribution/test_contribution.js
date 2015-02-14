Tinytest.add("convert base64 to text", function (test) {
  test.equal(base64toString('IyBBbGwgVGhhdA'), "# All That");
});

Tinytest.add("more than two contributions in list", function (test) {
  var repo = new Repo('pointbar', 'multibao-test');

  test.isTrue(buildContributionList(repo.getFilesList('contributions'), repo.identity).length > 2);
});

Tinytest.add("contributions list have title", function (test) {
  var repo = new Repo('pointbar', 'multibao-test');

  test.notEqual(buildContributionList(repo.getFilesList('contributions'), repo.identity)[1].title, undefined);
});

Tinytest.add("build contribution", function (test) {
  var repo = new Repo('pointbar', 'multibao-test');

  test.equal(buildContribution(repo.getFile('contributions', 'baba.md')).substr(0, 10), "# All That");
});
