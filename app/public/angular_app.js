
    .component('posts', {

      controller: function($scope) {

        // $scope.updateVotes = function(currentPost, amount){
        //   currentPost.votes = currentPost.votes + amount;
        //   if (currentPost.votes < 0) {
        //     currentPost.votes = 0;
        //   }
        // }

        // $scope.currentPostIndex = undefined;

        $scope.toggleComments = function(itemPos) {
           if ($scope.currentPostIndex === itemPos) {
               $scope.currentPostIndex = undefined;
           }
           else {
               $scope.currentPostIndex = itemPos;
           }
        }

        $scope.isValid = function(inputName) {
          let className
          if (vm.newPostForm[inputName].$touched && vm.newPostForm[inputName].$invalid)
              className = 'has-error';
          return className;
        };

        vm.isOpen = function(post) {
          let index = vm.posts.indexOf(post);
        }

        $scope.isDisabled = function(){
          let className
          if (vm.newPostForm.$invalid) {
            className = 'disabled'
          }
          return className;
        }

        const vm = this

        vm.isNewPostFormOpen;

        vm.post = {};

        vm.$onInit = function() {

        }

        vm.updatePosts = function() {
          vm.post.comments = [];
          vm.post.votes = 0;
          vm.post.time = new Date();
          vm.posts.push(vm.post);
          delete vm.post;
          vm.newPostForm.$setUntouched()
          vm.isNewPostFormOpen = !vm.isNewPostFormOpen
        }

        vm.updateComments = function(post, comment) {
          let index = vm.posts.indexOf(post);
          vm.posts[index].comments.push(comment);
          delete vm.comment;
        }


      },

      template: `
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">Reddit Clone</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          </div>
        </div>
      </nav>

      <main class="container">

        <div class="pull-right">
          <p><a ng-click="$ctrl.isNewPostFormOpen = !$ctrl.isNewPostFormOpen" class="btn btn-info">New Post</a></p>
        </div>

        <ul class="nav nav-pills">
          <li role="presentation" class="active">
            <input ng-model="search.title" type="search" class="form-control input-sm search-form" placeholder="Filter">
          </li>
          <li class="dropdown" ng-init="sort='-vote_count'; sortName='Votes'">
            <a href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false">Sort By {{sortName}}<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a ng-click="sort='-vote_count'; sortName='Votes';">Votes</a></li>
              <li><a ng-click="sort='time'; sortName='Date';">Date</a></li>
              <li><a ng-click="sort='title'; sortName='Title'">Title</a></li>
            </ul>
          </li>
        </ul>

        <div ng-if="$ctrl.isNewPostFormOpen" class="row">
          <div class="col-md-8">

          <form name="$ctrl.newPostForm" novalidate ng-submit="$ctrl.updatePosts()">
            <div ng-class="isValid('title')">
              <label for="title">Title</label>
              <input ng-model='$ctrl.post.title' name="title" id="title" class="form-control" required>
              <span ng-if="isValid('title')" class="help-block">Required Field</span>
            </div>
            <div ng-class="isValid('body')">
              <label for="body">Body</label>
              <textarea ng-model='$ctrl.post.body' name="body" id="body" class="form-control" required></textarea>
              <span ng-if="isValid('body')" class="help-block">Required Field</span>
            </div>
            <div ng-class="isValid('author')">
              <label for="author">Author</label>
              <input ng-model='$ctrl.post.author' name="author" id="author" class="form-control" required>
              <span ng-if="isValid('author')" class="help-block">Required Field</span>
            </div>
            <div ng-class="isValid('image')">
              <label for="image-url">Image URL</label>
              <input ng-model='$ctrl.post.image' name="image" id="image-url" class="form-control" required>
              <span ng-if="isValid('image')" class="help-block">Required Field</span>
            </div>
            <div class="form-group">
              <button  ng-class="isDisabled()" ng-disabled="isDisabled()" type="submit" class="btn btn-primary">
                Create Post
              </button>
            </div>
          </form>

          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div ng-repeat="post in $ctrl.posts | filter:search | orderBy:sort" class="well">
              <div class="media-left">
                <img ng-src="{{post.image}}" class="media-object">
              </div>
              <div class="media-body">
                <h4 class="media-heading">
                  {{post.title}}
                  <a ng-click="updateVotes(post, 1)"><i class="glyphicon glyphicon-arrow-up"></i></a>
                  <a ng-click="updateVotes(post, -1)"><i class="glyphicon glyphicon-arrow-down"></i></a>
                  <span>{{post.votes}}</span>
                </h4>
                <div class="text-right">
                  {{post.author}}
                </div>
                <p>
                  {{post.body}}
                </p>
                <div>
                  <span am-time-ago="post.time">{{post.time}}</span |
                  <i class="glyphicon glyphicon-comment"></i>
                  <a ng-click="toggleComments($index)">
                    {{post.comments.length}} {{(post.comments.length === 1) ? 'Comment' : 'Comments' }}
                  </a>
                </div>
                <div  ng-if="currentPostIndex === $index" class="row">
                  <div class="col-md-offset-1">
                    <hr>
                    <div>
                      <p ng-repeat="comment in post.comments">{{comment}}</p>
                    </div>
                    <form  name="$ctrl.newCommentForm" novalidate ng-submit="$ctrl.updateComments(post, $ctrl.comment)" class="form-inline">
                      <div class="form-group">
                        <input ng-model='$ctrl.comment' name="comment" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="submit" class="btn btn-primary">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      `
    })
