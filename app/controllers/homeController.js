App.controller('homeController', function ($scope, $rootScope, $routeParams, $location, $state) {

    $scope.dataBook = {
        isbn: null,
        title: null,
        author: null,
        messageFromSharer: null,
        qrCodeText: function() {
            return 'http://iamquethzel.com';
        }
    };

    $scope.dataUser = {
        email: null,
        name: null,
    };

    $scope.maxLenMessage = 280;
    $scope.investBackgroundTagBook = false;

    function generateQR(textCode) {
        var typeNumber = 4;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(textCode);
        qr.make();
        document.getElementById('qrCode').innerHTML = qr.createImgTag();

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


    $scope.share = function() {
        // fireJs.saveDataBook($scope.dataBook);
        generateQR($scope.dataBook.qrCodeText());
    };

    $scope.init = function() {
        fireJs.db.init();
    };
    $scope.init();

});