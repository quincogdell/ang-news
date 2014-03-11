'use strict';

app.factory('Post', function($firebase, FIREBASE_URL, User) {
  // return $resource('https://fiery-fire-7125.firebaseio.com/posts.json');
  // return $resource('https://fiery-fire-7125.firebaseio.com/posts/:id.json');

  // adding 3 way data binding
  var ref = new Firebase (FIREBASE_URL + 'posts');

  var posts = $firebase (ref);

  var Post = {
    all: posts,
    create: function (post){
      if (User.signedIn()) {
        var user = User.getCurrent();

        post.owner = user.username

        return posts.$add(post).then(function (ref) {
          var postId = ref.name();

          user.$child('posts').$child(postId).$set(postId);

          return postId;
        })
      }
      // coming from angularfire library $add, $chile, $remove
      return posts.$add(post);
    },
    find: function(postId) {
      return posts.$child(postId);
    },
    delete: function(postId) {
      if (User.signedIn()) {
        var post = Post.find(postId);

        post.$on('loaded', function () {
          var user = User.findByUsername(post.owner);

          posts.$remove(postId).then(function() {
            user.$child('posts').$remove(postId);
          })
        })
      }
      return posts.$remove(postId);
    }
  };

  return Post;
});
