const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    const db = client.db("vehicle");
    const car = db.collection("car");
    const cursor = car.find({}, { projection: { _id: 0 } });
    await cursor.forEach(console.log);
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
