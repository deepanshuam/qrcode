import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;

import cors from 'cors';
import router from './routes.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(json());
app.use(cors());
app.use(router);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});