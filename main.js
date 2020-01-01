// commanderモジュールをprogramとしてインポートする
const program = require('commander');
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require('fs');

// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];

// ファイルを非同期で取り出す
fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err.message);
    // 終了ステータス 1 でプロセス終了
    process.exit(1);
    return;
  }
  console.log(file);
});