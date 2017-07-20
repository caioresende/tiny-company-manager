# tiny-company-manager
Tiny company manager app written using nodejs, express, mongodb and angularjs + angular material

# Running the app
This section does a step by step on how to run the app. There is already a deployed version here: https://comp-manager-caio.herokuapp.com. ***Have fun!***
## Local Environment
To run locally, using gulp and node, follow the steps after opening terminal:
  1. Clone this repository.
  2. Make sure you have [NodeJS](https://nodejs.org/en/) and Gulp (`npm install -g gulp`) installed on your machine. I used version 6x and 3x respectively.
  3. Run `npm install` to get all dependencies like AngularJS, Angular Material and so many others.
  4. Run `gulp`. A web browser window/tab should be opened with a localhost. (**Preferably, Chrome**)
  5. The app is already connected to MongoDB through Heroku by default.
## Deploy using Heroku
To deploy the app, using heorku, follow the steps after opening terminal:
  1. Clone this repository.
  2. Make sure you have [NodeJS](https://nodejs.org/en/) installed on your machine. I used version 6x.
  3. Make sure you have a [Heroku](https://heroku.com) account, installed CLI, and you're logged in. To login, run `heroku login`.
  4. Run `heroku create` to generate an app.
  5. We need to add MongoDB to our app. Add it through `heroku addons:create mongolab`.
  6. Since we automated some tasks, by default, Heroku does not run `dev dependencies` from `package.json`. Run `heroku config:set NPM_CONFIG_PRODUCTION=false` to make it sure it will run `gulp` while deploying.
  7. Run `git push heroku master to deploy`to deploy the app on heroku platform. Open the link that appears at the end of the deploy.
  8. Open the app on a browser. (**Preferably, Chrome**)
##  Using cURL to query the web service
You can test the web service using cURL. Below there are some examples on how you can `GET`, `POST`, `PUT`, `DELETE`:
**The api path for the deployed version of this app is:** https://comp-manager-caio.herokuapp.com/api/companies
### GET ALL COMPANIES
Run: `curl -i -X GET -H 'Content-Type: application/json' https://comp-manager-caio.herokuapp.com/api/companies`
### CREATE A COMPANY
Run: `curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "123"}' https://comp-manager-caio.herokuapp.com/api/companies`
### UPDATE A COMPANY
Take note, you will need the `company id` for this. Run a `curl get` to pick one.
Run: `curl -i -X PUT -H 'Content-Type: application/json' -d '{"name": "1234"}' https://comp-manager-caio.herokuapp.com/api/companies/5971343e8cbc7400118f9041`
### DELETE A COMPANY
Take note, you will need the `company id` for this. Run a `curl get` to retrieve one.
Run: `curl -i -X DELETE -H 'Content-Type: application/json' https://comp-manager-caio.herokuapp.com/api/companies/5971343e8cbc7400118f9041`
#Final Thoughts
There are plent of work to do yet, like for example, validating data on the backend, using authentication and managing accounts.
## Authentication
There are many ways to add authentication to the app. We could use some addons from Heroku like Auth0 or use OAuth from Google. We could also implement external loggin strategies using Facebook, Twitter, etc
## Versioning the data
The app's data is not versionated yet. But a simple way to do so, it's to include timestamps such as `dateAdded`, `lastUpdated` and many others.
## Making the service redundant
Heroku has dynos, which can be scaled up as needed on paid versions
> Applications with multiple running dynos will be more redundant against failure. If some dynos are lost, the application can continue to process requests while the missing dynos are replaced - [Heroku Redundancy](https://devcenter.heroku.com/articles/dynos#redundancy)
  
