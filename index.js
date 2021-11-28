await import("dotenv").then((dotenv) => dotenv.config());
const { HOST, PORT } = process.env;
import { default as express } from "express";
import session from "express-session";
import { routes } from "./route.js";
import { profile } from "./routes/profile.js";
const server = express();
server
  .use(express.urlencoded({ extended: true }))
  .use(session({secret: 'not a good secret', resave: true, saveUninitialized: true}))
  .use(express.static("public"))
  .set("view engine", "ejs")
  .set("views", "public")
  .use("/",routes)
  .use("/profile", profile);
  server.listen(PORT, HOST, console.log(`Listening on port ${PORT}:${PORT}`));
 
