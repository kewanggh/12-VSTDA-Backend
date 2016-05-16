var app = angular.module('myApp', ['as.sortable', 'xeditable', 'ui.sortable']);

app.controller('MainController', ['$scope', '$http', '$filter', '$log', function($scope, $http, $filter, $log) { //([{
    $http.get('http://localhost:52933/api/ToDoes').success(function(data) { // ({
        $scope.items = data;
        console.log($scope.items);
    });
    
    $scope.items = [];
    $scope.addItem = function(item) {

        $http({
            method: 'POST',
            url: 'http://localhost:52933/api/ToDoes',
            data: item
        }).then(function(response) {
                $scope.items.push(response.data);

                $scope.ToDo = {};

            },
            //failure
            function(error) {
                // defer.reject(error);
                $log.error(error);
                //toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
            });

        console.log(item);
    };

    $scope.deleteItem = function(item) {
        console.log(item.toDoId);

        $http({
            method: 'DELETE',
            url: 'http://localhost:52933/api/ToDoes/' + item.toDoId
        }).then(function(response) {
            var index = $scope.items.indexOf(item);
            $scope.items.splice(index, 1);
        },
        //failure
        function(error) {
            // defer.reject(error);
            $log.error(error);
            //toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
        });
    };

    $scope.updateItem = function(item) {
        console.log(item.toDoId);
        console.log(item);
        $scope.disabled = !$scope.disabled;

        $http({
            method: 'PUT',
            url: 'http://localhost:52933/api/ToDoes/' + item.toDoId,
            data: item
        }).then(function(response) {
            console.log(response);
   /*         var index = $scope.items.indexOf(response.data);
            $scope.items.splice(index, 1); */
           
        },
        //failure
        function(error) {
            // defer.reject(error);
            $log.error(error);
            //toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
        });
        /*console.log(item);*/
    };

    $scope.sortItems = function(order) {
        $scope.items = $filter('orderBy')($scope.items, order);
    };


}]);
app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

