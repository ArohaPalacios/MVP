const db = require("../model/helper");
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' })
});


//get all sentences
router.get("/api/sentences", async (req, res, next) => {
  const query = "SELECT * FROM sentences;";
  try {
    const results = await db(query);
    //console.log("********", results.data);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get images by sentences_id
router.get("/api/images/:sentences_id", async (req, res, next) => {
  const{sentences_id} = req.params
  const query = `SELECT * FROM images WHERE sentences_id=${sentences_id};`;
  try {
    const results = await db(query);
    //console.log("********", results.data);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get sentence by id
router.get("/api/sentences/:id", async (req, res, next) => {
  const{id} = req.params
  const query = `SELECT * FROM sentences WHERE id=${id};`;
  try {
    const results = await db(query);
    //console.log("********", results.data);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Post all the images in the gallery on one click.
router.post("/api/images", async (req, res, next) => {
  console.log("Request Body:", req.body);
  try {
    //will recieve the image gallery as an array of objects in the request body.
    const  images = req.body; 
   // Check if images array is provided and not empty
    if (!Array.isArray(images) || images.length === 0) {
      return res.status(400).send({ message: "Please provide images in the correct format" });
    }

    // Execute each insert query sequentially using for of loop
    for (const image of images) {
      const { search_term, URL, type, concept, sentences_id } = image;
      const query = `INSERT INTO images (search_term, URL, type, concept, sentences_id) VALUES ('${search_term}', '${URL}','${type}','${concept}', '${sentences_id}');`;

      // Execute the insert query one by one
      await db(query);
    }
    // Get all images from the database. this is not necessary for the app. This bit of code returns the images so that you can see them when you try it in Postman.
    const selectQuery = `SELECT * FROM images;`;
    const selectResult = await db(selectQuery);

    // Send all the images data as response
    res.status(200).send({ allImages: selectResult.data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error", error });
  }
});

//post a new sentence in my sentences DB table and return the sentenceId as response.
router.post("/api/sentences", async (req, res, next) => {
  const { sentence} = req.body;
  //Pass INSERT INTO and SELECT LAST_INSERT_ID() queries together 
  //make sure they're run exactly one after the other
  //otherwise the connection with the db is interrupted and I only get 0 as id.
  const query = `INSERT INTO sentences (sentence) VALUES ('${sentence}');SELECT LAST_INSERT_ID() AS id;`
  try {
    //throw error if sentence is empty.
    if (!sentence.length) {
      //set status of the error and send message to client.
      res.status(400).send({
        message:
          "please, provide a sentence in the correct format"
      });
    }
    const results = await db(query);

    // The results is an array holding an object with different keys.
    // in that object, the key "insertId" holds the last id inserted. I saw that console.logging the results
    const sentenceId = results.data[0].insertId;
    // send the ID of the newly inserted sentence as response
    res.status(201).send({ id: sentenceId });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;


