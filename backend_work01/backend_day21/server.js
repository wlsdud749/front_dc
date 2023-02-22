const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const router = express.Router();

app.set("port", process.env.PORT || 3000);


router.route("/test").get((req,res)=>{
    console.log("GET - /test 요청 됨.");

    res.end("<h1>Test Page!</h1>");
});

app.use("/",router);

server.listen(app.get("port"), ()=>{
    console.log("http://localhost:"+ app.get("port")+" 실행 중이다 일마야");
});