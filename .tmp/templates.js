angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/app/app.html","<div layout=column><nav-bar></nav-bar><main layout=row><md-content ng-outlet></md-content></main></div>");
$templateCache.put("app/components/buttonEnrollCounter/buttonEnrollCounter.html","<md-button class=md-icon-button aria-label=Favorite ng-class=\"{\'md-accent\': $ctrl.enrolled}\" ng-click=$ctrl.onEnroll();><small>{{$ctrl.enrolls}}</small> <i class=\"material-icons md-24\">turned_in</i><md-tooltip>{{$ctrl.enrolls}} students enrolled</md-tooltip></md-button>");
$templateCache.put("app/components/buttonLikeCounter/buttonLikeCounter.html","<md-button class=md-icon-button aria-label=Favorite ng-class=\"{\'md-accent\': $ctrl.liked}\" ng-click=$ctrl.onLike();><small>{{$ctrl.likes}}</small> <i class=\"material-icons md-24\">thumb_up</i><md-tooltip>{{$ctrl.likes}} likes</md-tooltip></md-button>");
$templateCache.put("app/components/navBar/navBar.html","<div layout=row layout-align=\"center center\" layout-padding style=\"background-color: red;\"><a style=\"background-color: white;\" layout-margin ng-link=\"[\'/Courses\']\">All Courses</a> <a style=\"background-color: white;\" layout-margin ng-link=\"[\'/Courses\', \'TopFavourites\']\">Top Favourites</a> <a style=\"background-color: white;\" layout-margin ng-link=\"[\'/Courses\', \'TopEnrollments\']\">Top Enrollments</a> <a style=\"background-color: white;\" layout-margin ng-link=\"[\'/Courses\', \'MyFavourites\']\">My Favourites</a> <a style=\"background-color: white;\" layout-margin ng-link=\"[\'/Courses\', \'MyEnrollments\']\">My Enrollments</a> <a style=\"background-color: white;\" layout-margin ng-link=\"[\'/About\']\">About</a></div>");
$templateCache.put("app/components/totalEnrollsCounter/totalEnrollsCounter.html","<h5>You are enrolled in {{$ctrl.calculateEnrollsCounter($ctrl.courses)}} courses.</h5>");
$templateCache.put("app/components/totalLikeCounter/totalLikeCounter.html","<h5>You like {{$ctrl.calculateLikeCounter($ctrl.courses)}} courses.</h5>");
$templateCache.put("app/routes/about/about.html","<h1 style=\"text-align: center;\">ABOUT</h1>");
$templateCache.put("app/routes/courses/components/courseActions/courseActions.html","<button-enroll-counter enrolls=$ctrl.course.enrolls enrolled=$ctrl.course.enrolled on-enroll=$ctrl.toggleEnrollCourse($ctrl.course);></button-enroll-counter><button-like-counter likes=$ctrl.course.likes liked=$ctrl.course.liked on-like=$ctrl.toggleLikeCourse($ctrl.course);></button-like-counter>");
$templateCache.put("app/routes/courses/components/courseCard/courseCard.html","<md-card><img ng-src={{::$ctrl.course.image}} class=md-card-image alt={{::$ctrl.course.title}}><md-card-title><md-card-title-text><span class=md-headline>{{::$ctrl.course.title}}</span></md-card-title-text></md-card-title><md-card-content><p>{{::$ctrl.course.content}}</p></md-card-content><md-card-actions layout=row layout-align=\"end center\"><course-actions course=$ctrl.course on-enroll=$ctrl.onEnroll($ctrl.course); on-like=$ctrl.onLike($ctrl.course);></course-actions></md-card-actions></md-card>");
$templateCache.put("app/routes/courses/components/courseGallery/courseGallery.html","<course-card flex=100 flex-gt-sm=25 data-ng-repeat=\"course in $ctrl.courses\" course=course></course-card><div layout=column flex=100 layout-margin layout-padding><h5>Showing {{$ctrl.courses.length}} courses</h5><total-like-counter courses=$ctrl.courses></total-like-counter><total-enrolls-counter courses=$ctrl.courses></total-enrolls-counter></div>");}]);