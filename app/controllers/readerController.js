App.controller('readerController', function ($scope, $routeParams, $location, $state, $stateParams) {
    console.log('your id is: ', $stateParams.id);

    fireJs.db.getBook($stateParams.id)
    .then(function(book) {
        console.log(book);
    });

});
