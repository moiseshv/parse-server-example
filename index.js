// Example express application adding the parse-server module to expose Parse
// compatible API routes.

// Load all config data
appConfig = require('./app.json');


var express = require('express');

//Create a ParserServe Object
var ParseServer = require('parse-server').ParseServer;

// Point to MogoDB database
var databaseUri = appConfig.env.DATABASE_URI;
// Path where user the cloud code
var cloudPath = __dirname + appConfig.env.CLOUD_CODE_MAIN;
//APP ID
var APP_ID = appConfig.env.APP_ID;
//Master Key for use to modify data
var master_KEY = appConfig.env.MASTER_KEY;
// Where to route de API
var parse_MOUNT = appConfig.env.PARSE_MOUNT;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri ,
  cloud: cloudPath,
  appId: APP_ID,
  masterKey: master_KEY
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// puic static data on public folder
app.use(express.static('public'));

// Serve the Parse API on the /parse URL prefix
var mountPath = parse_MOUNT;
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('Root APP');
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
    console.log('Fork & Join server running on port ' + port + '.');
    console.log('DB path ' + databaseUri + '.');
    console.log('Cloud Path ' + cloudPath + '.');
    console.log('APP ID ' + APP_ID + '.');
    console.log('Master key ' + master_KEY + '.');
    console.log('API Mount Route ' + parse_MOUNT + '.');
});
