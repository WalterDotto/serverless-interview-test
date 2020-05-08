'use strict';

const databaseManager = require('./databaseManager');

function createResponse(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}


module.exports.fetchAll = (event, context, callback) => {

  databaseManager.scan().then(response => {
    console.log(response);
    callback(null, createResponse(200, response));
  });

};

