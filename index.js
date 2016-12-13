var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var gameID = event.gameID.toString();

    var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
    var gameParams = {
        TableName : 'Game',
        Key : {
            gameID: gameID
        },
    }
    docClient.get(gameParams, function(err, data) {
        if (err) {
            callback(new Error('Unknown Team'));
        }
        else {
            callback(null, data);
          }
      });
};