var Compress = (function () {
    var config = {
        width:null,
        height:null,
        quality:1,
        file:''
    };
    var canvasObj,crt;
    function Compress(options) {
        mergeOption(config,options);
        console.log(config)
        init()
    }

    function mergeOption(originObj, newObj) {
        for(var item in newObj){
            if(newObj.hasOwnProperty(item)){
                originObj[item] = newObj[item]
            }
        }
    }
    function init() {
        createCanvas();
        setCanvasImg();
        exportImg();
    }
    function createCanvas() {
       var canvas =  document.createElement('canvas');
       canvas.setAttribute('id','canvas');
       canvas.width = 300;
        canvas.height = 300;
        document.getElementsByTagName('body')[0].appendChild(canvas);
        canvasObj = canvas;
        console.log(canvasObj)
    }
    function setCanvasImg() {
        crt = canvasObj.getContext('2d');
        var imageObj = new Image();

        imageObj.onload = function() {
            crt.drawImage(imageObj,0,0,300,300)
        };
        //imageObj.src =  'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
         imageObj.src =  window.URL.createObjectURL(config.file);
    }
    function exportImg() {
        var dateUrl  = canvasObj.toBlob(function (blob) {
            var newImg = document.createElement("img"),
                url = URL.createObjectURL(blob);

            newImg.onload = function() {
                // no longer need to read the blob so it's revoked
                URL.revokeObjectURL(url);
            };

            newImg.src = url;
            document.body.appendChild(newImg);
        },'image/jpeg',1);

        //document.getElementById('img').src= dateUrl;
    }



    return Compress
})();