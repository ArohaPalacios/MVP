# Full Stack app PICTO-TELL

This app converts written prompts to images that users can add to a gallery to build a visual message. It also offers the possibility to add the visual message to favorites.
It has two main features:
- Home (Image search engine): the user writes a prompt and the app returns a set of images that can be navigated with a "previous" button (arrow left) and a next button (arrow right). "I like it!" button adds the selected image to a gallery below, that will show all the images. Every image has a trash button that will delete that specific image. The gallery also has a "clear gallery" button that deletes all images from the gallery and an "Add to favorites" button that will save it to favorites. (NOTE: the "Add to favorites" functionality requires to fill in the "MESSAGE" field).
- Favorites: after filling in the "MESSAGE" field and clicking the "Add to favorites" button, the images in the gallery and the corresponding message will be added to favorites. The favorites section (use navbar link to go there) shows a list of the different messages saved to favorites. Clicking a message will show the corresponding array of images.
The images search engine gets the images from an external API and all the logic to fetch and display the images is held by the client side of the app (Home).
The favorite messages and the corresponding images are stored in a local database. The endpoints to access the database are held by the server side of the app (routes/index.jx), while the logic to fetch and display them is held by the client side (Favorites). 

## Setup

### Dependencies

- Run `npm install` in your project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called favorites: `create database favorites`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=favorites

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create two tables called 'images' and 'sentences' in your database.
![DB tables](./ASSETS/DB%20tables.png)

- In your MySQL console, you can run `use favorites;` and then `describe images;` to see the structure of the images table, or `describe sentences;` to see the structure of the sentences table.
      
### Connect to API
- To access the images API you must go to this URL: https://rapidapi.com/opensorted/api/images-search1/  (NOTE: you might have to sign in).
- Click the "subscribe to test" button to subscribe to the API (It's 100% free, no account data is required!).
- In the dropdown menu at the right side of the window, select (JavaScript)fetch. This will show the syntax for a basic GET request. In the headers, you will see your API-key.
- In the app repository, go to client/src/components/SearchImageView. Change the current value of the const apiKey variable to your own API-Key.

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.


## Guidelines
- NOTE: your database and your favorites section will be empty when you first open the app. After configuration, you should be able to populate it using the search engine at the Home page. If you need to manually test it in Postman, there's a sample code and instructions in client/src/components/testcode. This file is not connected to the app: it's used to try and store code samples that might be useful for the developing process.
- NOTE: there is no endpoint to delete elements from the database. If you need to do so, it has to be done manually in SQL. To delete a favorite from the database, images must be deleted before trying to delete the corresponding sentence, due to database relationship constraints.
    Code sample:
DELETE from images WHERE sentences_id=4; (change the number 4 for the one you want to delete)
DELETE from sentences WHERE id=14; (change the number 14 for the one you want to delete )

- Resources you may need:
  - [MDN docs](https://developer.mozilla.org/en-US/)
  - [Express docs](https://expressjs.com/en/api.html)
  - [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
  - [React docs](https://reactjs.org/docs/hello-world.html)
  - https://vitejs.dev/guide/
  - https://reactrouter.com/en/main
  - https://docs.rapidapi.com/docs/
