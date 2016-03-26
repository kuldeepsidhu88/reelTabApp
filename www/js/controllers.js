angular.module('app.controllers', [])

// recentpostlist controller  
.controller('recentPostsListCtrl', function($scope,$http) {
	var recentpostslist = [];
	// TODO: get posts
	var getPostsURL = "http://www.punjabireel.com/wp-json/wp/v2/posts";
	$http.get(getPostsURL)
        .success(function(response) {
            console.log(response);
            for(var i in response){
            	var post ={};
	        	var type = response[i].type;
	        	var id = response[i].id;
	        	var titleRendered = response[i].title.rendered;
				if(type=='post'){
					post['id']=id;
					post['title']=titleRendered;
					recentpostslist.push(post);
				}
            }
        })
        .error(function(error){
        	console.log("Error Occured. "+error);
        });
    $scope.recentpostslist = recentpostslist;
})

// authorslist controller
.controller('authorsListCtrl', function($scope) {
 // http://punjabireel.com/wp-json/wp/v2/posts?filter[poet]=
})

// authorpostlist contoller
.controller('authorsPostListCtrl', function($scope) {

})

// categories list controller
.controller('categoriesListCtrl', function($scope,$http) {
	var categories = [];
	
	// TODO: get categories
	var getCategoriesURL = "http://www.punjabireel.com/wp-json/wp/v2/categories";
	$http.get(getCategoriesURL)
        .success(function(response) {
            console.log(response);
            for(var i in response){
            	var category ={};
            	var id = response[i].id;
            	var name = response[i].name;
				var count = response[i].count;
				if(count>0){
					category['id']=id;
					category['name']=name;
					category['count']=count;
					categories.push(category);
				}
            }
        })
        .error(function(error){
        	console.log("Error Occured. "+error);
        });

	$scope.categories = categories;
})

// categorypostlist controller   
.controller('categoryPostListCtrl', function($scope,$stateParams,$http,$sce) {
	var categoryId = $stateParams.categoryId;

	// TODO: get post list per category
	var categorypostlist = [];
	//http://punjabireel.com/wp-json/wp/v2/posts?filter[posts_per_page]=-1
	//http://punjabireel.com/wp-json/wp/v2/posts?filter[posts_per_page]=-1&[cat]=6
	var getCategoryPostsURL = "http://punjabireel.com/wp-json/wp/v2/posts?filter[cat]="+categoryId;
	$http.get(getCategoryPostsURL)
        .success(function(response) {
            console.log(response);
            for(var i in response){
            	var post ={};
            	var type = response[i].type;
            	var id = response[i].id;
            	var titleRendered = response[i].title.rendered;
            	var title = titleRendered.replace("&#8211;","-");
            	if(type=='post'){
					post['id']=id;
					post['title']=title;
					
					categorypostlist.push(post);
				}
            }
        })
        .error(function(error){
        	console.log("Error Occured. "+error);
        });
	$scope.categoryName = $stateParams.categoryName;
	$scope.categorypostlist = categorypostlist;
})

// aboutus controller   
.controller('aboutUsCtrl', function($scope) {

})

// post detail controller   
.controller('postDetailCtrl', function($scope,$stateParams,$http) {
	var postId = $stateParams.postId;

	// TODO: get post detail 
	var getPostDetailURL = "http://punjabireel.com/wp-json/wp/v2/posts/"+postId;
	$http.get(getPostDetailURL)
        .success(function(response) {
            console.log(response);            
        	var post ={};
        	var type = response.type;
        	var id = response.id;
        	var titleRendered = response.title.rendered;
        	var link = response.link;
        	var contentRendered = response.content.rendered;
        	
        	if(type=='post'){
				post['id']=id;
				post['title']=titleRendered;
				post['link']=link;
				post['content']=contentRendered;
				$scope.post = post;
			}
        })
        .error(function(error){
        	console.log("Error Occured. "+error);
        });
})






 