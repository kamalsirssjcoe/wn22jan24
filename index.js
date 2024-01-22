const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res) =>  { 
	const url = "mongodb+srv://classeskamalsir:29h3TdY0CPO504ok@cluster0.rxhc0nw.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(url);
	const db = client.db("wn22jan24");
	const coll = db.collection("student");
	const record = {"name":req.body.name, "choice":req.body.choice};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));

});

app.listen(9000, () => { console.log("ready @ 9000"); } );