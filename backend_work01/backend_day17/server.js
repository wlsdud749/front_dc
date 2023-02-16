const http = require('http');
const express = require('express');
const app = express();
// expree 는 app 이랑 같이 사용?
const cors = require('cors');

// view engine - 템플릿엔진
app.set("views", __dirname + "/views");  // prefix 
app.set("view engine", "ejs"); // suffix

process.env.PORT = 3000;
app.set('port', process.env.PORT || 3001);
// console.log(process.env.PORT || 3000); // 3항 연산자의 줄임 표현

// 특정 패스 요청 처리 app.get()
app.get("/home", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>길동이의 홈페이지</h1>");
    res.end(); // end() 안하면 무한루프 발생
});

const carList = [
    { no: 1, title: "SONATA", price: 3000, company: "HYUNDAI", year: 2022 },
    { no: 2, title: "GRANDEUR", price: 4000, company: "HYUNDAI", year: 2019 },
    { no: 3, title: "K9", price: 7000, company: "KIA", year: 2020 },
];

// ejs 템플릿 뷰 엔진 사용 (view engine)
app.get("/car", (req, res) => {
    //  req.app.render( 뷰, data, 콜백(err,data{}) ) 형식으로 사용
    let userName = "김범준샘";
    req.app.render("car", { userName, carList }, (err, data) => {
        if (err != null) {
            console.log(err);
            return;
        }
        res.end(data);
    });

});

const server = http.createServer(app);
// createServer + app = > http 와 express 를 합쳐준다 - 같은 port 사용
server.listen(app.get('port'), () => {
    console.log("Node.js server 실행 중 ... http://localhost:" + app.get('port'));
})