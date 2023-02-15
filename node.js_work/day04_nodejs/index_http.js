// console.log('Hello node.js World!');

//한줄 주석

/* 
여러 줄 주석
Node.js 문법은 ES6+ 문법 + 기존 자바스크립트 문법
*/

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(3000);

// 종료는 ctrl + c

const http=require('http');

const server = http.createServer((req, res) => {

    res.end=("<h1>Hello World!</h2>");

});


server.listen(3000,function() {
    console.log('nodejs 서버 실행 중 ...');
});