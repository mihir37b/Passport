var express = require("express");
var router = express.Router();

//PORT=3001 npm start

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

module.exports = router;
