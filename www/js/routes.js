angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('tabsController', {
    url: '/tab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
  
  .state('tabsController.recentPostsListPage', {
    url: '/recentpostlist',
    views: {
      'tab-recentposts': {
        templateUrl: 'templates/recentPostsList.html',
        controller: 'recentPostsListCtrl'
      }
    }
  })

  .state('tabsController.authorListPage', {
    url: '/authors',
    views: {
      'tab-authors': {
        templateUrl: 'templates/authorsList.html',
        controller: 'authorsListCtrl'
      }
    }
  })

  .state('tabsController.categoriesListPage', {
    url: '/categories',
    views: {
      'tab-categories': {
        templateUrl: 'templates/categoriesList.html',
        controller: 'categoriesListCtrl'
      }
    }
  })

  .state('tabsController.aboutUsPage', {
    url: '/aboutus',
    views: {
      'tab-aboutus': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('tabsController.categoryPostList', {
    url: '/categorypostlist',
    views: {
      'tab-categories': {
        templateUrl: 'templates/categoryPostList.html',
        controller: 'categoryPostListCtrl'
      }
    }
  })
  
  .state('tabsController.authorsPostList', {
    url: '/authorspostlist',
    views: {
      'tab-authors': {
        templateUrl: 'templates/authorsPostList.html',
        controller: 'authorsPostListCtrl'
      }
    }
  })

  .state('tabsController.postDetailPage', {
    url: '/postdetail',
    views: {
      'tab-recentposts': {
        templateUrl: 'templates/postDetail.html',
        controller: 'postDetailCtrl'
      },
      'tab-categories': {
        templateUrl: 'templates/postDetail.html',
        controller: 'postDetailCtrl'
      },
      'tab-authors': {
        templateUrl: 'templates/postDetail.html',
        controller: 'postDetailCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/recentpostlist')

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.postDetailPage'
      2) Using $state.go programatically:
        $state.go('tabsController.postDetailPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
      /page1/tab3/page5
  */

});