import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (request, response) => response.send('Arslaan\'s API!'));

export default app;
export const handler = serverless(app);
