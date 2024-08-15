const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로 처리
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
