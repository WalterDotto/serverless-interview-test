'use strict';

const config = require('../config/dynamo_config.js')
const AWS = require('aws-sdk');

AWS.config.update(config.aws_remote_config);
const TABLE_NAME = config.aws_table_name;

let dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.initializeDynamoClient = newDynamo => {
    dynamo = newDynamo;
};

module.exports.scan = () => {

    var params = {
        TableName: TABLE_NAME,
    }

    return dynamo.scan(params).promise().then(result => {
        return result;
    });

}


