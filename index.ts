import { Context, APIGatewayProxyCallback, APIGatewayEvent,APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event:APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    return{
        statusCode: 200,
        body: JSON.stringify({
        message: 'Hello World!',
        }),
    };
};