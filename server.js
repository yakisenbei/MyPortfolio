const express = require('express');
const app = express();
const port = 3002;

// publicディレクトリを静的ファイルのルートディレクトリとして指定
app.use(express.static('public'));

// ルートパスへのアクセスをindex.htmlにマッピング
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
