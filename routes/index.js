var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' })
});


router.get("/api/images", async (req, res, next) => {
  const query = "SELECT * FROM images;";
  try {
    const results = await db(query);
    console.log("********", results.data);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
