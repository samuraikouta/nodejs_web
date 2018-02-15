// url にあるファイルを savepath にダウンロードする
var url = "http://kujirahand.com";
var savepath = "test.html";

// ダウンロード
var aUrl = new java.net.URL(url);
var conn = aUrl.openConnection(); // URL に接続する
var ins = conn.getInputStream(); // 入力ストリームを得る
var file = new java.io.File(savepath); // 出力ストリームを得る
var out = new java.io.FileOutputStream(file);

// 読み込んで書き込む
var b;
while((b = ins.read()) != -1){
    out.write(b);
}
out.close(); // 出力ストリームを閉じる
ins.close(); // 入力ストリームを閉じる