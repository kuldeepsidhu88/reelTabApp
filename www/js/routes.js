angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.postsListPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/postsListPage.html',
        controller: 'postsListPageCtrl'
      }
    }
  })

  .state('tabsController.categoriesListPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/categoriesListPage.html',
        controller: 'categoriesListPageCtrl'
      }
    }
  })

  .state('tabsController.authorListPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/authorListPage.html',
        controller: 'authorListPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

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
  .state('tabsController.postDetailPage', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/postDetailPage.html',
        controller: 'postDetailPageCtrl'
      },
      'tab2': {
        templateUrl: 'templates/postDetailPage.html',
        controller: 'postDetailPageCtrl'
      },
      'tab3': {
        templateUrl: 'templates/postDetailPage.html',
        controller: 'postDetailPageCtrl'
      }
    }
  })

  .state('tabsController.categoryPostList', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/categoryPostList.html',
        controller: 'categoryPostListCtrl'
      }
    }
  })

  .state('tabsController.authorsPostList', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/authorsPostList.html',
        controller: 'authorsPostListCtrl'
      }
    }
  })

  .state('tabsController.aboutUsPage', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/aboutUsPage.html',
        controller: 'aboutUsPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});