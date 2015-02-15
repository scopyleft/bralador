Meteor.startup(function () {
  var repo = github_repo.byLabel('gymkhana');

  // rewrite title in french
  canvas['2'].title = "Problèmes";
  canvas['4'].title = "Solutions";
  canvas['3'].title = "La promesse";
  canvas['9'].title = "Génotype";
  canvas['1'].title = "Utilisateurs";
  canvas['2A'].title = "Alternatives";
  canvas['8'].title = "Métriques";
  canvas['3A'].title = "Métaphore";
  canvas['5'].title = "Canaux";
  canvas['1A'].title = "Avant-coureurs";
  canvas['7'].title = "Coûts";
  canvas['6'].title = "Valeurs";


  setContributionList(repo, 'contributions');

  Tracker.autorun(function () {
    var oldest = Session.get(repo.owner + '/' + repo.repo);
    var url = '/contributions/' + repo.owner + '/' + repo.repo + '/';

    if (oldest) {
      Session.get(repo.owner + '/' + repo.repo).map(function (contrib) {
        var id = contrib.slug.split('_')[0];
        var title = contrib.slug.split('_')[1];

        canvas[id].list.push({
          title: title.replace(/-/g, ' '),
          slug: url + contrib.slug
        });
      });
      // To force reload canvas
      Session.set('canvas-list', Math.random());
    }
  });
});
