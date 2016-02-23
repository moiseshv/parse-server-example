# Demo application backend based on parse-Server example. 
# Using Express for routing public data and connecting to MongoDB server.
# Very nice for testing mobile and web application without any kind of code on server side.

# Parse-Server make all dirty work for you.
# You can use this application to make your own backend services and host your public files at the same time.


1. Resove CRUD delete, insert and Update all your model using REST API
2. User Register and Login
3. You can make your custom cloud entryPoint. see cloud/main.js
4. You can put all your public files in public folder.
5. You can use Parse SDK API..

Enjoy..



### For Local Development

* Make sure you have at least Node 4.1. `node --version`
* Move to this directory an install modules
* `npm install`
* Install mongo locally using http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x/
* Run `mongo` to connect to your database, just to make sure it's working. Once you see a mongo prompt, exit with Control-D

* Run the server with: `npm start`
* By default it will use a path of /parse for the API routes. 
* app.json have the main config variables
* You now have a database named "api_db" that contains your data



### Using it

You can use the REST API, the JavaScript SDK, and any of our open-source SDKs:

Example request to a server running locally:

```
//User register
curl -X POST \
  -H "X-Parse-Application-Id: Backend_API_Id" \
  -H "Content-Type: application/json" \
  -d '{"username":"moiseshv","password":"moiseshv","phone":"415-392-0202"}' \
   http://localhost:1337/parse/users


curl -X POST \
  -H "X-Parse-Application-Id: Backend_API_Id" \
  -H "Content-Type: application/json" \
  -d '{"score":1337,"playerName":"Sean Plott","cheatMode":false}' \
  http://localhost:1337/parse/classes/GameScore
  
curl -X POST \
  -H "X-Parse-Application-Id: Backend_API_Id" \
  -H "Content-Type: application/json" \
  -d '{}' \
  http://localhost:1337/parse/functions/hello
```

Example using it via JavaScript:

```
Parse.initialize('Backend_API_Id','unused');
Parse.serverURL = 'http://localhost:1337';
var obj = new Parse.Object('GameScore');
obj.set('score',1337);
obj.save().then(function(obj) {
  console.log(obj.toJSON());
  var query = new Parse.Query('GameScore');
  query.get(obj.id).then(function(objAgain) {
    console.log(objAgain.toJSON());
  }, function(err) {console.log(err); });
}, function(err) { console.log(err); });
```

for use public data just
http://localhost:1337/

index.html file is the main entry point.
Is a login form but yet not implemented...
I will code latter

Thanks to Parse



