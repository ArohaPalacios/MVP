// //Example code to test in POSTMAN.
// //First step: add a sentence to the sentences table:
// //method POST
// //URL: http://localhost:4000/api/sentences/
// //body:
// {"sentence" : "Go downstairs to the reception desk and book an appointment for a bloodtest"}

// //second step: add the corresponding images to the images table.
// //method POST
// //URL: http://localhost:4000/api/images/
// //body:
// [
//     {
//     "search_term" : "skin drawing",
//     "URL": "https://i.ytimg.com/vi/cDBkp-Aqq8s/maxresdefault.jpg",
//     "type": null,
//     "concept": "skin structure",
//     "sentences_id" : 4 
//     },
//     {
//     "search_term" : "skin surface",
//     "URL": "https://www.aveeno.com/sites/aveeno_us_2/files/threemainlayerofthehuman_793071.jpg",
//     "type": null,
//     "concept": "epidermis",
//     "sentences_id" : 4 
//     },
//     {
//     "search_term" : "skin cells",
//     "URL": "https://biologydictionary.net/wp-content/uploads/2021/05/Keratinocyte-layers-scaled.jpg",
//     "type": null,
//     "concept": "skin cells",
//     "sentences_id" : 4 
//     },
//     {
//     "search_term" : "colocar ladrillos",
//     "URL": "https://www.wikihow.com/images/c/ce/Lay-Brick-Step-16-Version-2.jpg",
//     "type": null,
//      "concept": "built like brick layers",
//     "sentences_id" : 4 
//     },
//     {
//     "search_term" : "protection",
//     "URL": "http://thestephaneandre.com/wp-content/uploads/2017/02/protectYourIdea_01.jpg",
//     "type": null,
//     "concept": "defense barrier",
//     "sentences_id" : 4 
//     },
// ]


//Try to store API in .env file fore security. Didn't work
//const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
//console.log(import.meta.env.VITE_RAPIDAPI_KEY)