export interface Event {
    body: string;
    headers?: Record<string, string>;
    queryStringParameters?: Record<string, string>;
    pathParameters?: Record<string, string>;
    httpMethod: string;
}

export interface Response {
    statusCode: number;
    body: string;
    headers?: Record<string, string>;
}