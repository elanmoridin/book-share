# book-share


## Book Sharing Application - Community Book Collection

![Screenshot](https://i.imgur.com/auQwbq3.png)

## Live Site  
[Link to Live Site](https://community-book-share.herokuapp.com/)

## Usage
  Application is for a community to use for local book sharing. You can create an account and enter your books and then checkout the books from other users. 

## Installation and Requirements  
  Clone the repository  
  Navigate to the top level of the app with command line  

Install MongoDB  
Install Documentation: [Install Help](docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)  
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

## Notes and Future  
The logout functionality isn't working yet. Still working on the bug. It just redirects to the login page for now  
Want to implement an api search for books and add them to the database that way rather than entering info for indivudal books  
Want to implement an api maps restriction to keep people from being too far apart from interatcting since the point is a local exchange  
Want to implement emails with user accounts and that way when you check out a book it'll email the owner of it and let you set up a meeting to exchange or drop off  

## Acknowledgements  
See LICENSE file for license info!  
See (getbootstrap.com) for more info on Bootstrap and how it was used!  
Box shadow book effect - https://css-tricks.com/snippets/css/stack-of-paper/  
Thanks to (https://bitbucket.org/whirka/) for testing as I went along for bugs  
