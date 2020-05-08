'use  strict';

const AWS = require('aws-sdk');
const databaseManager = require('../dynamo/databaseManager');

beforeAll(() => {

    const dynamo = new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000'
    });

    databaseManager.initializeDynamoClient(dynamo);
});


afterAll(() => {

    const dynamo = new AWS.DynamoDB.DocumentClient();
    databaseManager.initializeDynamoClient(dynamo);

});

describe('Test retrieve items', () => {

    it('Retrieve all items', done => {
        databaseManager.scan().then(result => {
            console.log(result);
            done();
        });
    });

});