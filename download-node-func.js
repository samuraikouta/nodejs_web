// ダウンロード
download(
    "http://www.aozora.gr.jp/index_pages/person81.html",
    "miyazawakenji.html",
    function(){ console.log("ok, kenji." )}
);
download(
    "http://www.aozora.gr.jp/index_pages/person148.html",
    "natsumesouseki.html",
    function() { console.log("ok, soseki.")}
);

// url を savepath にダウンロードする関数
function download(url, savepath, callback){
    var http = require('http');
    var fs = require('fs');
    var outfile = fs.createWriteStream(savepath);
    var req = http.get(url, function(res) {
        res.pipe(outfile);
        res.on('end', function(){
            outfile.close();
            callback();
        });
    });
}