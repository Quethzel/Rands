App.controller('readerController', [ '$scope', '$stateParams',
    function ($scope, $stateParams) {

    $scope.code = null;
    $scope.message = null;
    $scope.hasBeenDecrypted = false;

    $scope.getBook = function(idDoc) {
        if(idDoc == null) { return };
        fireJs.db.getBook(idDoc)
        .then(function(book) {
            $scope.hasBeenDecrypted = true;
            $scope.message = book.sharedMessage;
            $scope.code = idDoc;
            $scope.$apply();
        });
    };

    $scope.init = function() {
        if($stateParams.id != 0){
            $scope.getBook($stateParams.id);
        }
    }();

}]);
