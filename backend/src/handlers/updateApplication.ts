import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';
import { Application } from '../models/application';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters!;
  const { state, amount } = JSON.parse(event.body || '{}');

  const params = {
    TableName: process.env.DYNAMODB_TABLE!,
    Key: { id },
    UpdateExpression: 'set #state = :state, amount = :amount, updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#state': 'state',
    },
    ExpressionAttributeValues: {
      ':state': state,
      ':amount': amount,
      ':updatedAt': new Date().toISOString(),
    },
    ReturnValues: 'ALL_NEW',
  };

  const result = await dynamoDb.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Attributes),
  };
};