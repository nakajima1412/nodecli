// commanderモジュールをprogramとしてインポートする
const program = require('commander');
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require('fs');
// markedモジュールをmarkedオブジェクトとしてインポートする
const marked = require('marked');

// gfmオプションを定義する
program.option('--gfm', 'GFMを有効にする');
// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
  gfm: false,
  ...program.opts(),
};

// ファイルを非同期で取り出す
fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err.message);
    // 終了ステータス 1 でプロセス終了
    process.exit(1);
    return;
  }
  // MarkdownファイルをHTML文字列に変換する
  const html = marked(file, {
    gfm: cliOptions.gfm,
  });
  console.log(html);
});