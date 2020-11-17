# Osha Groetz - YearOne MOVIE API
Search movies with async Fetch requests to RapidAPI's IMDB Movie Database  
Upvote & Downvote movies while saving data to a local backend server using a PostgreSQL database

## How to setup and run your application: 

## Application - Front End Repository:
https://github.com/osha7/yearone-api-movies-frontend 

- Navigate to frontend github repo - Fork & Clone Repository
- Clone repository in your local terminal
- Project was built on ReactJS 17.0.1 or higher

### In the project directory command line,run:
- npm install  
#### To run the app in the development mode:  
- npm start   
RUN AT: [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Connect program to backend for api calls to persist & obtain data of upvotes & downvotes:  

## Application - Back End Repository:
https://github.com/osha7/yearone-movie-api-backend

- Navigate to backend github repo - Fork & Clone Repository
- Clone repository in your local terminal
- Project was built on Rails 6.0.3

### In the project directory command line,run:
- bundle install
- rake db:create
- rake db:migrate
#### To run the app in the development mode:
- rails s  
RUN AT:[http://localhost:3002](http://localhost:3002) ((JSON database can be viewed at [http://localhost:3002/movies](http://localhost:3002/movies)))
application should automatically open to port 3002
the application will not successfully run if on any other port (front end making calls to local host 3002)

#### To make database queries from backend:
- rails c

# Landing Page Search Bar:  
![Search Bar](https://i.imgur.com/3I1lVuX.jpg)

# Search Results:  
![Search Results](https://i.imgur.com/wImAHiV.jpg)

# Movie Info Page:  
![Movie Info Page](https://i.imgur.com/fgdaV8i.jpg)
##### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
