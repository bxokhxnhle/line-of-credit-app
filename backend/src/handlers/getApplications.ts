import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandler = async (event) => {
  const { userId } = event.queryStringParameters || {};

  const params = {
    TableName: process.env.DYNAMODB_TABLE!,
    FilterExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': userId,
    },
  };

  const result = await dynamoDb.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items),
  };
};