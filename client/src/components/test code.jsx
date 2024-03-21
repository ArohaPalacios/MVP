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

// const handleAddToFavorites = async () => {
//     if (sentenceInput.length) {
//       try {
//         const first = addFavoriteSentence()
//         const second = gallery.map(image => ({ ...image, sentences_id: sentencesId }));
//         const third = addFavoriteImages()
//         // Use Promise.all to await both addFavoriteSentence and addFavoriteImages
//         const [add] = await Promise.all([first,second , third]);
        
//         if (add) {
//           // Clear input if both promises resolve successfully
//           setSentenceInput("");
//         } else {
//           setError("Failed to add sentence");
//         }
//       } catch (err) {
//         // Handle errors
//         console.error("Error adding favorites:", err);
//         // You may want to differentiate between backend errors and frontend errors here
//         setError("Something went wrong, please try again.");
//       }
//     } else {
//       setError("Failed to add favorites: No sentence input provided");
//     }
//   };