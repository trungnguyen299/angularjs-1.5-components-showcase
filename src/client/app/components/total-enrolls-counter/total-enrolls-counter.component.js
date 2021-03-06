(function() {
  'use strict';

  angular
    .module('app.components')
    .component('totalEnrollsCounter', {
      templateUrl: 'app/components/total-enrolls-counter/total-enrolls-counter.html',
      bindings: {
        //inputs
        courses: '<',
        display: '<'

        //outputs
      },
      controller: TotalEnrollsCounterController
    });

    TotalEnrollsCounterController.$inject = [];

    function TotalEnrollsCounterController() {
      var $ctrl = this;

      $ctrl.calculateEnrollsCounter = calculateEnrollsCounter;

      function calculateEnrollsCounter(courses) {
        return ( courses || [] ).filter(function(course) {
          return course.enrolled;
        }).length;
      }
    }
})();
