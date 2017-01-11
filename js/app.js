angular.module('StorybookApp',['ui.router'])
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
})
