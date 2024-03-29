const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const path = require("path");
const port = 8000;

mongoose.connect(
 "mongodb://localhost/way2clinic",
 { useNewUrlParser: true },
 function(err, connection) {
  if (err) throw err;
  else console.log("connected to mongodb");
 }
)


app.use(cors({
  exposedHeaders: ['x-auth-token'],
}));

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

app.use(
 session({
  secret: "writer",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ url: "mongodb://localhost/way2clinic-session" })
 })
);

if (process.env.NODE_ENV === "development") {
 var webpack = require("webpack");
 var webpackConfig = require("./webpack.config");
 var compiler = webpack(webpackConfig);

 app.use(
  require("webpack-dev-middleware")(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath
  })
 );

 app.use(require("webpack-hot-middleware")(compiler));
}

app.use(cors());

app.use("/api/v1", require('./server/routes/api/v1'));
app.use("/doctor", require('./server/routes/doctor'));
app.use("/patient", require('./server/routes/patient'));

app.use(require("./server/routes/index"));

app.listen(port, () => {
 console.log(`server is running on http://localhost:${port}`);
});