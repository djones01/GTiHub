var ClientApp = angular.module('ClientApp', ['ngResource']);
ClientApp.controller('ClientController', function ($scope, ClientService) {
    $scope.refreshClients = function () {
        ClientService.query(function (clients) {
            $scope.clients = clients;
        });
    };

    $scope.addClient = function () {
        var newClient = { name: $scope.client.name, creation_date: GetCurrentDatetime(), industry: $scope.client.industry }
        ClientService.save({}, newClient)
        .$promise.then(
            function(value) {
                $scope.clients.push(value);
            },
            function (error) {

            }
        );
    };

    $scope.refreshClients();

   
    /*getClients();
    function getClients() {
        ClientService.getClients()
            .success(function (clients) {
                $scope.clients = clients;
                $scope.name = 'me';
                $scope.junk = 'bleh';
                console.log($scope.clients);
            })
            .error(function (error) {
                $scope.status = 'Unable to load clients data: ' + error.message;
                console.log($scope.status);
            });
    }*/
});

/*ClientApp.factory('ClientService', ['$http', function ($http) {

    var ClientService = {};
    ClientService.getClients = function () {
        return $http.get('/api/Clients');
    };
    return ClientService;

}]);*/

ClientApp.factory('ClientService', function ($resource) {
    return $resource('/api/Clients/:id');
});