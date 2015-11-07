//定时更新时间
//function MyController($scope, $timeout) {
//    var updateClock = function () {
//        $scope.clock = new Date();
//        $timeout(function () {
//            updateClock();
//        }, 1000);
//    };
//    updateClock();
//}
function MyController($scope, $timeout) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date()
    };
    setInterval(function () {
        $scope.$apply(updateClock());
    }, 1000);
    updateClock();
};