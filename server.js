let express = require("express");

let app = express();

let port = process.env.PORT || 5000;

app.use(express.static("public"));

app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.route("/api/info").get((req, res) => {
  res.json({
    ipAddress: req.ip,
    language: req.headers["accept-language"],
    systemInfos: req.headers["user-agent"],
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
