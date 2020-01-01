# nodecli

[js-primer](https://jsprimer.net/use-case/nodecli/read-file/)の`nodecli`の学習用リポジトリ。

Markdown -> HTML に変換するコード。

# Usage
 
モジュール追加
 
```bash
$ npm install
```

Markdown -> HTML 変換処理実行

```bash
$ node main.js README.md
```

存在しないファイルを読み込むとエラーが発生して終了する

```bash
$ node main.js notfound.md
ENOENT: no such file or directory, open 'notfound.md'
```

unit test 実行

```bash
$ node test
  ✓ converts Markdown to HTML (GFM=false)
  ✓ converts Markdown to HTML (GFM=true)

  2 passing (14ms)
```

# Note

`node test`実行時にテストファイルの終端に改行が入ってしまう場合

```bash
$ vi expected-gfm.html
$ vi expected.html
```

で保存し直すことで終端に`/n`が入らない