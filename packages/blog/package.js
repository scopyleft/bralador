Package.describe({
  summary: "A module to display contents, articles, datas, posts",
  version: "0.1.1"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.1.1');

  api.use(['templating'], 'client');

  api.add_files(['private/_infos.json'], ['server'], {isAsset: true});
  api.add_files(['public/cog07.svg'], ['client'], {isAsset: true});
  api.add_files(['lib/collections.js'], ['server', 'client']);
  api.add_files([
    'lib/server/posts.js',
    'lib/server/infos.js'
  ], ['server']);
  api.add_files([
    'lib/client/routes.js',
    'lib/client/loading.css',
    'lib/client/loading.html',
    'lib/client/post/post.html',
    'lib/client/post/post.css',
    'lib/client/post/post.js',
    'lib/client/main.js'
  ], ['client']);

  api.export(['Posts']);
});

Package.on_test(function (api) {
  api.use('app-posts', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.add_files('blog_test.js', 'client');
});
