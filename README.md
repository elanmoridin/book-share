# book-share


## Book Sharing Application - Community Book Collection

![Screenshot](https://i.imgur.com/auQwbq3.png)

## Usage
  Application is for a community to use for local book sharing. You can create an account and enter your books and then checkout the books from other users. 

## Installation and Requirements  
  Clone the repository  
  Navigate to the top level of the app with command line  

Install MongoDB  
Install Documentation: <docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/>  
This app will use the collections books and users inside the DB book-share  

Initialize the directory  
`npm init`   

Install Express  
`npm install express`  

Install EJS to use within html files  
`npm install ejs`  

Setup Mongoose to use with MongoDB  
`npm install mongoose`  

Setup Sessions addon with NPM  
`npm install express-session`  

create env file  
`touch .env`  
`npm install dotenv`  

Configure your PORT and database connection within this file  

Install Method Override to be able to DELETE with POST  
`npm install method-override`  

Install bcrypt packge for using passwords with MongoDB with encrytpion  
`npm install bcrypt`  

Once dependancies are installed you can run the server on the local machine with 
`nodemon server.js`  

You can seed the application with the seed file and route I setup by going to 
localhost:3000/seed  

## Acknowledgements  
See LICENSE file for license info!  
See (getbootstrap.com) for more info on Bootstrap and how it was used!  
Box shadow book effect - https://css-tricks.com/snippets/css/stack-of-paper/  
Thanks to (https://bitbucket.org/whirka/) for testing as I went along for bugs  
