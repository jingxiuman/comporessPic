document.getElementById('file').addEventListener('change',function (e) {

    var files = e.target.files;
    var some = new Compress({
        width:500,
        height:500,
        quality:0.8,
        file:files[0]
    });
    console.log(some);
});

