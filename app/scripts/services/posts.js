'use strict';

app.factory('Post', function($firebase, FIREBASE_URL) {
  // return $resource('https://fiery-fire-7125.firebaseio.com/posts.json');
  // return $resource('https://fiery-fire-7125.firebaseio.com/posts/:id.json');

  // adding 3 way data binding
  var ref = new Firebase(FIREBASE_URL + 'posts');

  var posts = $firebase(ref);

  var Post = {
    all: posts,
    create: function(post){
      // coming from angularfire library $add, $chile, $remove
      return posts.$add(post);
    },
    find: function(postId) {
      return posts.$child(postId);
    },
    delete: function(postId) {
      return posts.$remove(postId);
    }
  };

  return Post;
});
