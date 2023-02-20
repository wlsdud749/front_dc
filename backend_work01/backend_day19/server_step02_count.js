const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
// npm i -S multer 
const multer = require("multer");
// fs 파일 시스템 기본적으로 내장되어있음
const fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
process.env.PORT = 3000;
app.set("port", process.env.PORT || 3001);

app.use(cookieParser());
app.use(expressSession({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// post 전송 방식을 사용하기 때문에 bodyParser 가 먼저 선언되어야 한다.
let storages = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  }
});

// 파일 제한 : 10, 1G 이하로 제한.
let upload = multer({
  storage: storages,
  limit: {
    files: 10,
    fileSize: 1024 * 1024 * 1024
  }
});

/////// router -------
// 웹 counter 예재
let cnt = 0; // count 를 해줄 전역변수 생성
router.route("/count").get((req, res) => {
  console.log("GET -/ count");
  cnt++; // cnt+=1;
  let date = new Date();
  let responseDate = {
    cnt: cnt,
    dateStr : date.getFullYear()+"-"
    +(date.getMonth()+1)+"-"+(date.getDate())+" "+(date.getHours())+":"
    +(date.getMinutes())+":"+(date.getSeconds()),
    date : {date}
  }

  // res.end(cnt+""); // red.end(); <-- 문자열만 사용 가능, 문자열을 더해주면 문자열이 됨 (자바스크립트에서)
  res.send(JSON.stringify({ responseDate }));
});






// file upload 예제
router.route("/home").get((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>길동이의 홈페이지</h1>");
  res.end();
});

router.route("/process/photo").post(upload.array("photo", 1), (req, res) => {
  console.log("POST - /process/photo 호출 ...");
  console.log(req.files);

  res.end("file upload!");
});


app.use("/", router);

/////// error handler -----
var expressErrorHandler = require('express-error-handler');
var errorHandler = expressErrorHandler({
  static: {
    '404': './public/404.html'
  }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);


const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Node.js 서버 실행 중 ... http://localhost:" + app.get("port"));
});