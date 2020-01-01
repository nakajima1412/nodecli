# nodecli

[js-primer](https://jsprimer.net/use-case/nodecli/read-file/)の`nodecli`の学習用リポジトリ。

Markdown -> HTML に変換するコード。

# Usage
 
モジュール追加
 
```bash
$ npm install
```

ファイルの読み込み処理実行

```bash
$ node main.js README.md
```

存在しないファイルを読み込むとエラーが発生して終了する

```bash
$ node main.js notfound.md
ENOENT: no such file or directory, open 'notfound.md'
```
