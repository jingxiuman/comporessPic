var Compress = (function () {
    var config = {
        width:null,
        height:null,
        quality:1,
        file:'',
        success:function (blob,base64) {

        }
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

    }
    function createCanvas() {
       var canvas =  document.createElement('canvas');
       canvas.setAttribute('id','canvas');
       canvas.style.display='none'
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
            crt.drawImage(imageObj,0,0,300,300);
            var myImageData = crt.getImageData(0, 0, 300, 300);
            //var strDataURI = crt.toDataURL("image/jpeg");
            console.log(myImageData);
            var base64 = canvasObj.toDataURL('image/jpeg',0.95)
            config.success("",base64)
        };
         imageObj.src =  window.URL.createObjectURL(config.file);
    }



    return Compress
})();