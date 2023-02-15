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
});

// 업로드 부분
app.post("/saram/input", (req, res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(">>>>>> (1) ");
        res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
        res.write("<h2>upload ok!</h2>");
        res.end();
    });


        form.on("end", function () {

            // 위에 있는 app.post 에서 rew.end() 가 끝나면 함수 
            // 실행 하라는 뜻?

            console.log("파일 갯수 : ", this.openedFiles.length);
            for(var i=0; i<this.openedFiles.length; i++) {
                let file = this.openedFiles[i];
                console.dir(file);
                var oldpath = file.filepath;
                var newpath = './public/upload' + file.originalFilename;
                fs.rename(oldpath, newpath, function (err) {

                    // Node.js 내장되어 있는 fs
                    
                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                });
            }
        });
    });







const server = http.createServer(app);
// app 을 넣어주면 http와 app 이 결합.
// http 와 express의 결합 - 같은 port를 공유한다 - 범준샘
server.listen(app.get("port"), () => {
    console.log("서버 실행 중 - http://localhost:" + app.get("port"));
});
