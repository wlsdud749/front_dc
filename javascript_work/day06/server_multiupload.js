const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const formidable = require('formidable');
const fs = require("fs");
// npm i -S formidable
// 모듈 갖고 오는 것?


// app.set("","value"); - setAttribute 용도
// app.get("key"); -getAttribute 의 용도
// app.get("path", callback); - 서버의 doGet 역할
// app.post("path", callback); - 서버의 doPost 역할
app.set("port", 3000);

app.set("view engine", "ejs");
app.set("views", __dirname + "/template");
// __ (언더바 2번 내장변수)


app.use(cors());
//미들웨어 사용?
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h1>Hello World</h1>");
    res.end();

    // 오타 있는지 확인
})

// 업로드 부분
app.post("/saram/input", (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.photo.filepath;
        // oldpath 경로 잘 확인
        var newpath = './public/upload/' + files.photo.originalFilename;
        // newpath 경로 잘 확인
        fs.rename(oldpath, newpath, function (err) {
            // oldpath 의 경로을 newpath 의 경로로 변경하고 이름도 변경한다? 
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
});




const server = http.createServer(app);
// app 을 넣어주면 http와 app 이 결합.
// http 와 express의 결합 - 같은 port를 공유한다 - 범준샘
server.listen(app.get("port"), () => {
    console.log("서버 실행 중 - http://localhost:" + app.get("port"));
});


