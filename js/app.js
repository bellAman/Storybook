angular.module('StorybookApp',['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home",{
    url: "/",
    templateUrl:"./templates/home.html"
    // controller:"teacherLoginCTRL"
  })
  .state("foxAndCrow",{
    url: "/foxAndCrow",
    templateUrl:"./templates/foxAndCrow.html",
    // controller:"teacherHomeCTRL"
  })
  .state("highAndLiftedUp",{
    url: "/highAndLiftedUp",
    templateUrl:"./templates/highAndLiftedUp.html",
    controller:"slideCTRL"
  })
  .state("jaberwocky",{
    url: "/jaberwocky",
    templateUrl:"templates/jaberwocky.html"
  })
})
