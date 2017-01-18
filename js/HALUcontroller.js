angular.module("StorybookApp").controller("slideCTRL", function($scope){
  $scope.test = "controller ready"
  $scope.revealer1 = function(){
    $scope.hide1 = !$scope.hide1
  }
  $scope.revealer2 = function(){
    $scope.hide2 = !$scope.hide2
  }
  $scope.revealer3 = function(){
    $scope.hide3 = !$scope.hide3
  }
  $scope.revealer4 = function(){
    $scope.hide4 = !$scope.hide4
  }
  $scope.revealer5 = function(){
    $scope.hide5 = !$scope.hide5
  }
  $scope.revealer6 = function(){
    $scope.hide6 = !$scope.hide6
  }
  // var slideIndex = 1;
  // showSlides(slideIndex);

$scope.plusSlides = function(n, page) {
  showSlides(slideIndex += n, page);
}
var slideIndex = 1;
$scope.pageAssignment = function(num){
  console.log(num);
  $scope.page = num
  showSlides(slideIndex);
}

function showSlides(n) {
  console.log($scope.page);
  var i;
  var slides = document.getElementsByClassName($scope.page);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
})
