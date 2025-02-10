import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk';
import { Application } from '../models/application';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandler = async (event) => {
  const { userId, amount, expressDelivery } = JSON.parse(event.body || '{}');

  const application: Application = {
    id: uuidv4(),
    userId,
    amount,
    state: 'Open',
    expressDelivery,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await dynamoDb
    .put({
      TableName: process.env.DYNAMODB_TABLE!,
      Item: application,
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(application),
  };
};