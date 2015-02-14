Package.describe({
  summary: "RSS feed generator",
  version: "0.1.0",
});
Npm.depends({rss: '0.0.4'});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('pntbr:contribution', 'client');
  api.add_files([
    'lib/server/rss-npm.js',
    'lib/server/rss.js',
    'lib/server/route.js'
  ], ['server']);
});
