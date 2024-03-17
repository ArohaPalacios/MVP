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

// INSERT a new image into the DB
//Without error handling, when I send an empty object though Postman, this function still creates an image entry with correspondent id and undefined firstname and lastname.
router.post("/api/images", async (req, res, next) => {
  //your code here
  //I need a firstname and a lastname, that will be provided by the client in the req.body.
  //Get firstname and lastname as variables by deconstructing req.body object.
  const { search_term, URL, type, concept } = req.body;
  const query = `INSERT INTO images (search_term, URL, type, concept) VALUES ('${search_term}', '${URL}','${type}','${concept}');`;
  try {
    //throw error if firstname or lastname are empty.
    if (!search_term.length) {
      //set status of the error and send message to client.
      res.status(400).send({
        message:
          "please, provide a search_term in the correct format"
      });
    }
    await db(query);
    const results = await db(`SELECT * FROM images;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
