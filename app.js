const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require('./models') // default for require to look for index.js
// { } we are destructing the file to access all things within the file 


const app = express();


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
    console.log('hello world');
  });

db.authenticate().
    then(() => {
    console.log('connected to the database');
    })

const Page = db.define()


const User = db.define()



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
