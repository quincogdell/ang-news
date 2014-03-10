'use strict';

app.factory('Post', function($resource) {
  // return $resource('https://fiery-fire-7125.firebaseio.com/posts.json');
  return $resource('https://fiery-fire-7125.firebaseio.com/posts/:id.json');
});
