angular.module('AesopConcierge', [])
    .directive('nameDisplay', function () {
        return {
            scope: true,
            restrict: 'EA',
            template: "<b>This can be anything {{name}}</b>"
        }
    })

    .controller('partnerCtrls', function ($scope, $http) {

        //CREATE (POST)
        $scope.createPartner = function () {
            if ($scope.name) {
                $scope.updatePartner($scope.name);
            }
            else {
                let request = {
                    method: 'post',
                    url: 'http://localhost:3000/partners/db',
                    data: {
                        name: $scope.name,
                        Address: $scope.Address,
                        Neighborhood: $scope.Neighborhood,
                        Phone: $scope.Phone
                    }
                };
                $http(request)
                    .then(function (response) {
                        $scope.inputForm.$setPristine();
                        $scope.name = $scope.Address = $scope.Neighborhood = $scope.Phone = '';
                        $scope.getPartners();
                    })
            }
        };
        //READ (GET)
        $scope.getPartners = function () {
            $http.get('http://localhost:3000/partners/db')
                .then(function (response) {
                    $scope.partners = response.data;
                })
        };
        //UPDATE (PUT)
        $scope.setPartnerUpdate = function (partner) {
            $scope.name = partner.name;
            $scope.Address = partner.Address;
            $scope.Neighborhood = partner.Neighborhood;
            $scope.Phone = partner.Phone;

        };
        $scope.updatePartner = function (name) {
            let request = {
                method: 'put',
                url: 'http://localhost:3000/partners/db/' + name,
                data: {
                    name: name,
                    Address: $scope.Address,
                    Neighborhood: $scope.Neighborhood,
                    Phone: $scope.Phone
                }
            };
            $http(request)
                .then(function (response) {
                    $scope.inputForm.$setPristine();
                    $scope.name = $scope.Address = $scope.Neighborhood = $scope.Phone = '';
                    $scope.getPartners();
                })

        };

        //DELETE (DELETE)
        $scope.deletePartner = function (name) {

            let request = {
                method: 'delete',
                url: 'http://localhost:3000/partners/db/' + name,
            };
            $http(request)
                .then(function (response) {
                    $scope.inputForm.$setPristine();
                    $scope.name = $scope.Address = $scope.Neighborhood = $scope.Phone = '';
                    $scope.getPartners();
                })

        };

        $scope.initPartners = function () {
            $scope.getPartners();
        }
    })

    .controller('consultantCtrls', function ($scope, $http) {

        //CREATE (POST)
        $scope.createConsultant = function () {
            if ($scope.name) {
                $scope.updateConsultant($scope.name);
            }
            else {
                let request = {
                    method: 'post',
                    url: 'http://localhost:3000/consultants/db',
                    data: {
                        name: $scope.name
                    }
                };
                $http(request)
                    .then(function (response) {
                        $scope.inputForm.$setPristine();
                        $scope.name = '';
                        $scope.getConsultants();
                    })
            }
        };
        //READ (GET)
        $scope.getConsultants = function () {
            $http.get('http://localhost:3000/consultants/db')
                .then(function (response) {
                    $scope.consultants = response.data;
                })
        };

        //UPDATE (PUT)
        $scope.setConsultantUpdate = function (consultant) {
            $scope.name = consultant.name;

        };
        $scope.updateConsultant = function (name) {
            let request = {
                method: 'put',
                url: 'http://localhost:3000/consultants/db/' + name,
                data: {
                    name: name
                }
            };
            $http(request)
                .then(function (response) {
                    $scope.inputForm.$setPristine();
                    $scope.name = '';
                    $scope.getConsultants();
                })

        };

        //DELETE (DELETE)
        $scope.deleteConsultant = function (name) {

            let request = {
                method: 'delete',
                url: 'http://localhost:3000/consultants/db/' + name,
            };
            $http(request)
                .then(function (response) {
                    $scope.inputForm.$setPristine();
                    $scope.name = '';
                    $scope.getConsultants();
                })

        };

        $scope.initConsultants = function () {
            $scope.getConsultants();
        }
    })

    .controller('storeCtrls', function ($scope, $http) {

        //CREATE (POST)
        $scope.createStore = function () {
            if ($scope.name) {
                $scope.updateStore($scope.name);
            }
            else {
                let request = {
                    method: 'post',
                    url: 'http://localhost:3000/stores/db',
                    data: {
                        name: $scope.name
                    }
                };
                $http(request)
                    .then(function (response) {
                        $scope.inputForm.$setPristine();
                        $scope.name = '';
                        $scope.getStores();
                    })
            }
        };
        //READ (GET)
        $scope.getStores = function () {
            $http.get('http://localhost:3000/stores/db')
                .then(function (response) {
                    $scope.stores = response.data;
                })
        };

        //UPDATE (PUT)
        $scope.setStoreUpdate = function (store) {
            $scope.name = store.name;

        };
        $scope.updateStore = function (name) {
            let request = {
                method: 'put',
                url: 'http://localhost:3000/stores/db/' + name,
                data: {
                    name: name
                }
            };
            $http(request)
                .then(function (response) {
                    $scope.inputForm.$setPristine();
                    $scope.name = '';
                    $scope.getStores();
                })

        };

        //DELETE (DELETE)
        $scope.deleteStore = function (name) {

            let request = {
                method: 'delete',
                url: 'http://localhost:3000/stores/db/' + name,
            };
            $http(request)
                .then(function (response) {
                    $scope.inputForm.$setPristine();
                    $scope.name = '';
                    $scope.getStores();
                })

        };

        $scope.initStore = function () {
            $scope.getStores();
        }
    })

    .controller('resCtrls', function ($scope, $http) {

        $scope.pageCounter = 1;

        $scope.show = false; // Hide it initially

        /*CREATE (POST)
        $scope.createStore = function () {
            if ($scope.name) {
                $scope.updateStore($scope.name);
            }
            else {
                let request = {
                    method: 'post',
                    url: 'http://localhost:3000/stores/db',
                    data: {
                        name: $scope.name
                    }
                };
                $http(request)
                    .then(function (response) {
                        $scope.inputForm.$setPristine();
                        $scope.name = '';
                        $scope.getStores();
                    })
            }
        };*/
        //READ (GET)
        $scope.getAllRes = function () {
            $http.get('http://localhost:3000/reservations')
                .then(function (response) {
                    $scope.rests = response.data.restaurants;
                })
        };

        //READ (GET)
        $scope.getResByName = function (searchName) {
            let request = {
                method: 'get',
                url: 'http://localhost:3000/reservations/search/' + searchName
            };
            $http(request)
                .then(function (response) {
                    $scope.rests = response.data.restaurants;
                })
        };

        $scope.pageUp = function() {
            $scope.pageCounter = $scope.pageCounter++;
            getAllRes();
        };

        $scope.pageDown = function() {
            if($scope.pageCounter === 1){
                getAllRes();
            } else {
                $scope.pageCounter = $scope.pageCounter--;
                getAllRes();
            }
        }
    });