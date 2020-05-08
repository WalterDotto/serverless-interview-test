'use strict';

const db = require('./pgConnection');
const rdsConfig = require('../config/rds_config');

module.exports.fetchAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getAll(rdsConfig.aws_rds_table_name)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find Todos: ' + e
      })
    })
};