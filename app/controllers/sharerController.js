App.controller('sharerController', [ '$scope', function ($scope) {

    $scope.investBackgroundTagBook = false;
    
    $scope.dataBook = {
        author: null,
        sharedMessage: null,
        qrCodeText: function(id) {
            return 'http://iamquethzel.com/Rands/index.html#!/promote/reader/' + id;
        }
    };
    
    $scope.dataUser = {
        email: null,
        name: null,
    };

    function generateQR(textCode) {
        var typeNumber = 0;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(textCode);
        qr.make();
        document.getElementById('qrCode').innerHTML = qr.createImgTag();

        convertToPng($scope.dataBook.author);
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
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(uri);
        }
    };

    $scope.share = function() {
        $scope.dataBook.author = $scope.dataBook.author == null ? 'Unknown' : $scope.dataBook.author ;
        $scope.obj = angular.copy($scope.dataBook,$scope.obj);
        delete $scope.obj.qrCodeText;

        var deffBook = fireJs.db.saveDataBook($scope.obj);
        deffBook.then(function(res) {
            generateQR($scope.dataBook.qrCodeText(res));
        });
    };

}]);
