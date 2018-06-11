App.controller('homeController', function ($scope, $rootScope, $routeParams, $location, $state) {

    $scope.dataBook = {
        isbn: null,
        title: null,
        author: null,
        messageFromSharer: null,
        qrCodeText: function() {
            return  this.isbn + this.title + this.author;
        }
    };

    $scope.dataUser = {
        email: null,
        name: null,
    };

    $scope.maxLenMessage = 280;
    $scope.investBackgroundTagBook = false;

    $scope.genQRCode = function() {
        $('#qrCode').empty();
        $('#qrCode').qrcode({
            width: 120,
            height: 120,
            text: $scope.dataBook.qrCodeText()
        });
        convertToPng($scope.dataBook.title);
    };

    function convertToPng(imgName) {
        html2canvas(document.querySelector("#tag")).then(canvas => {
            $("#tagImg").append(canvas);
            document.body.appendChild(canvas) 
            saveAsImg(canvas.toDataURL(), imgName + '.png');
            document.body.removeChild(canvas);
        });
    };

    function saveAsImg(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
          link.href = uri;
          link.download = filename;
          //Firefox requires the link to be in the body
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(uri);
        }
    };

    $scope.init = function() {
        console.log('init ok');
        fireJs.db.init();
    };
    $scope.init();

});