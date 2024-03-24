[
    {
    "search_term" : "skin drawing",
    "URL": "https://i.ytimg.com/vi/cDBkp-Aqq8s/maxresdefault.jpg",
    "type": null,
    "concept": "skin structure",
    "sentences_id" : 4 
    },
    {
    "search_term" : "skin surface",
    "URL": "https://www.aveeno.com/sites/aveeno_us_2/files/threemainlayerofthehuman_793071.jpg",
    "type": null,
    "concept": "epidermis",
    "sentences_id" : 4 
    },
    {
    "search_term" : "skin cells",
    "URL": "https://biologydictionary.net/wp-content/uploads/2021/05/Keratinocyte-layers-scaled.jpg",
    "type": null,
    "concept": "skin cells",
    "sentences_id" : 4 
    },
    {
    "search_term" : "colocar ladrillos",
    "URL": "https://www.wikihow.com/images/c/ce/Lay-Brick-Step-16-Version-2.jpg",
    "type": null,
     "concept": "built like brick layers",
    "sentences_id" : 4 
    },
    {
    "search_term" : "protection",
    "URL": "http://thestephaneandre.com/wp-content/uploads/2017/02/protectYourIdea_01.jpg",
    "type": null,
    "concept": "defense barrier",
    "sentences_id" : 4 
    },
]

//get all images
// router.get("/api/images", async (req, res, next) => {
//   const query = "SELECT * FROM images;";
//   try {
//     const results = await db(query);
//     console.log("********", results.data);
//     if (!results.ok) {
//       res.send("something went wrong")
//     }
//     res.send(results.data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });


// // INSERT one new image into the DB
// //Without error handling, when I send an empty object though Postman, this function still creates an image entry with correspondent id and undefined firstname and lastname.
// router.post("/api/images", async (req, res, next) => {
//   //your code here
//   //I need search_term, URL, type, concept, sentences_id, that will be provided by the client in the req.body.
//   //Get them as variables by destructuring req.body object.
//   const { search_term, URL, type, concept, sentences_id } = req.body;
//   const query = `INSERT INTO images (search_term, URL, type, concept, sentences_id) VALUES ('${search_term}', '${URL}','${type}','${concept}', '${sentences_id}');`;
//   try {
//     //throw error if search_term are empty.
//     if (!search_term.length) {
//       //set status of the error and send message to client.
//       res.status(400).send({
//         message:
//           "please, provide a search_term in the correct format"
//       });
//     }
//     await db(query);
//     const results = await db(`SELECT * FROM images;`);
//     res.send(results.data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

//   const getSentence = async () => {
//         try{
//            //contact api
//            const response = await fetch(`/api/sentences/${sentenceId}`)
//            //parse api response to js
//            const sentence = response.json()
//            //populate state variable with the retrieved data.
//             setSelectedSentence(sentence);
//             console.log(sentence)
//            } catch(error) {
//            console.log(error.message);
//            };
//     }


    // const getSentenceImages = async () => {
    //     try{
    //        //contact api
    //        const response = await fetch(`/api/images/${sentenceId}`)
    //        //parse api response to js
    //        const sentenceImages = response.json()
    //        //populate state variable with the retrieved data.
    //        setFavoriteImages(sentenceImages);
    //        } catch(error) {
    //        console.log(error.message);
    //        };
    // }


<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<div class="mb-3">
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
  </div>
  <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>


