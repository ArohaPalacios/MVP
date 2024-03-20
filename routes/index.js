
var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' })
});

//get all images
router.get("/api/images", async (req, res, next) => {
  const query = "SELECT * FROM images;";
  try {
    const results = await db(query);
    console.log("********", results.data);
    if (!results.ok) {
      res.send("something went wrong")
    }
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get all sentences
router.get("/api/sentences", async (req, res, next) => {
  const query = "SELECT * FROM sentences;";
  try {
    const results = await db(query);
    console.log("********", results.data);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/api/images/:sentences_id", async (req, res, next) => {
  const{sentences_id} = req.params
  const query = `SELECT * FROM images WHERE sentences_id=${sentences_id};`;
  try {
    const results = await db(query);
    console.log("********", results.data);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/api/sentences/:id", async (req, res, next) => {
  const{id} = req.params
  const query = `SELECT * FROM sentences WHERE id=${id};`;
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
  //I need search_term, URL, type, concept, sentences_id, that will be provided by the client in the req.body.
  //Get them as variables by destructuring req.body object.
  const { search_term, URL, type, concept, sentences_id } = req.body;
  const query = `INSERT INTO images (search_term, URL, type, concept, sentences_id) VALUES ('${search_term}', '${URL}','${type}','${concept}', '${sentences_id}');`;
  try {
    //throw error if search_term are empty.
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

// router.post("/api/images", async (req, res, next) => {
//   console.log("Request Body:", req.body);
//   try {
//     const {images} = req.body; 

//     // Check if images array is provided and not empty
//     if (!Array.isArray(images) || images.length === 0) {
//       return res.status(400).json({ message: "Please provide images in the correct format" });
//     }

//     // Construct an array of promises for inserting images
//     const insertImages = images.map(async (image) => {
//       const { search_term, URL, type, concept, sentences_id } = image;
//       const query = `INSERT INTO images (search_term, URL, type, concept, sentences_id) VALUES ('${search_term}', '${URL}','${type}','${concept}', '${sentences_id}');`;
//       console.log(await db(query))
//       return await db(query);
//     });

//     // Execute all insert queries concurrently
//     const results = await Promise.all(insertImages);
//     console.log(results)

//     // Get inserted images from the database
//     const selectQuery = `SELECT * FROM images;`;
//     const selectResult = await db(selectQuery);
//     console.log("********", results.data);
//     res.send(results.data);
//     res.status(200).json({ insertedImages: selectResult.data });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error", error });
//   }
// });

router.post("/api/sentences", async (req, res, next) => {
  const { sentence} = req.body;
  const query = `INSERT INTO sentences (sentence) VALUES ('${sentence}');`;
  try {
    //throw error if sentence is empty.
    if (!sentence.length) {
      //set status of the error and send message to client.
      res.status(400).send({
        message:
          "please, provide a sentence in the correct format"
      });
    }
    await db(query);
    const results = await db(`SELECT * FROM sentences;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;


