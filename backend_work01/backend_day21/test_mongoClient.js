// mongodb@3.3.4 에서 실행 가능
const MongoClient = require("mongodb").MongoClient;

const dbUrl = "mongodb://localhost";
let db = null;
MongoClient.connect(dbUrl, { useUnifiedTopology: true }, function(err, client) {
    if(err) throw err;
    db = client.db("vehicle");
    if(db) {
        console.log("db 연결 성공!");
        const car = db.collection("car");
        car.findOne({}, function(findErr, carData) {
            if(findErr) throw err;
            console.log(carData.name, carData.price, carData.company);
        });
        client.close();
    } else {
        console.log("db 연결 안됨!");
    }
});