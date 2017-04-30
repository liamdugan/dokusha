## Welcome to Dokusha!

Dokusha is an online full-stack Javascript web app intended to allow users to easily find reading material at their level when studying foreign languages!

The front end of the site is made entirely in React while the backend is a combination of an express API server and a mongoose database

## How do I run it?

* cd into the main directory (probably named `dokusha`) and run `npm install` to install the required dependencies.

* From within the dokusha directory, run `mongod` to start the database

* Open up a new terminal window, cd into dokusha and run `node ./src/bin/run-server.js` to launch the express API server.

* Finally, in a third terminal window navigate to dokusha and run `npm build` to start the react-scripts server. You should see text that tells you what port the site is being hosted on.
* Open up your browser and navigate to the localhost port and you're good to go!

## How does it work?

That's easy, just sign up for an account, choose one of the recommended books, and start reading!

If you finish a book and feel like you understood it, you can add all words in the book to your vocabulary. The more you read, the more your vocabulary bank will grow!

As your vocabulary gets bigger, Dokusha will adjust  the estimated % comprehension of each book accordingly so you can know how you're progressing and your recommendations will change to reflect your newfound knowledge!

Try to get 100% comprehension in every book!

## What's with the name?

Dokusha (読者) is the Japanese word for reader! Hopefully through this app, you
too will become a better 読者.

## Why was this made?

This was made in late April of 2017 for the UPenn CIS197 (Javascript) final project.
