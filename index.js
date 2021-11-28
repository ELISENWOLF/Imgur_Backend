await import("dotenv").then(dotenv => dotenv.config());
import {default as express} from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { join, resolve } from "path";
const {PORT, HOST } = process.env; 
const server = express(); 
server.use(express.static("public"));

server.set("view engine", "ejs");
server.set("views", "public");

server.use(express.urlencoded({extended:true}));

const db = `mongodb+srv://AravindPrakash:wowmaker@imgur-b.2l8iu.mongodb.net/imgur-b?retryWrites=true&w=majority`;
mongoose.connect(db).then(_ => {
    console.log("db connected ")
})

server.get("/",(req, res) =>{
    res.render(join(resolve(), "/public/index"));
});

server.get("/login",(req, res) =>{
    res.render(join(resolve(), "/public/login"));
});

const newUser = {
    name:String,
    password:String
}

let Users = mongoose.model("Users", newUser);

server.post("/",async (req,res) => {
    let newUsers = new Users({
        name: req.body.name,
        password: req.body.password
    });
    newUsers.save();
    res.send(`Hello, ${newUsers.name}`);
    res.redirect('/');
});
server.listen(PORT, HOST, console.log(`Listening on port ${PORT}`));

