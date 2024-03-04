const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");

const app = express();
const PORT = 3000;
dbConnect();

const requestTime = (req, res, next) => {
  let today = new Date();
  let now = today.toLocaleTimeString();
  req.requestTime = now;
  next();
};

app.use(requestTime);

app.get("/", function (req, res) {
  res.json({ reqTime: req.requestTime, message: "Hello, Node" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

// app.get("/test", (req, res, next) => {
//   const error = new Error("테스트용 에러");
//   error.status = 401;
//   next(error);
// });
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening from http://localhost:${PORT}`);
});
