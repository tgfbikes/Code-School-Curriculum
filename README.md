# Code School Curriculum

## Overview
Simple todo app that can perform CRUD operations.  There are actually two separate apps; one that
runs in the browser and does not persist data and one that uses an Node/Express server as a host/API and
a local instance of MongoDB (`/react` and `/react-server` respectively).  Both were created to show the basics
of React, Node/Express, and MongoDB to prospective students in the Dixie State Code School program.

## Prerequisites
#### Node/NPM
```
brew install node
```
#### MongoDB
###### Mac
```
brew install mongodb
```
## Installation
```
git clone git@github.com:tgfbikes/Code-School-Curriculum.git
cd Code-School-Curriculum/react or /react-server
npm install
gulp
node server.js
```

## Setup
#### Browser app (/react)
Run `gulp` which will automatically run a local server and launch Chrome.
#### Full stack app (/react-server)
###### Setup Local MongoDB Instance
```
mongo
> use <name-of-db>
> db.createCollection("<name-of-collection")
> quit()
```

###### Go to server.js
```
mongoose.connect('mongodb://localhost/<name-of-db>');
```
###### Run server
```
node server.js
```


## Todo
- [ ] Both apps in ES6
