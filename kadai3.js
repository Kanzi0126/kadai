const Fs = require('fs');
const { stringify } = require('csv-stringify/sync');
const Iconv = require('iconv-lite');

let contents = [
  { 年齢: '10', 名前: 'イチロー' },
  { 年齢: '20', 名前: 'ジロー' },
  { 年齢: '30', 名前: 'サブロー' },
];

// カンマ区切りへ変換する。
const csvString = stringify(contents, {
  header: true,
  quoted_string: true,
});

// Shift_JSIへ変換する。
const csvStringSjis = Iconv.encode(csvString, 'Shift_JIS');

// CSVファイルを出力する。
Fs.writeFileSync('./data/result.csv', csvStringSjis);

//こんな感じで、便利なツールを使う方法がある
//json,xmlファイルについても同様のものがあるので、それを使うと便利
//課題的に、htmlファイルにあるフォームからデータを受けとり、それをjsonファイルなどに書き込む必要があるから、expressなどを利用して、サーバーを立てて、そこにデータを送るというのが一般的なやり方