import express from 'express';

const app = express();

import path from 'path';

import router from './router/index.js';

const port = 3000;

app.use(express.json());

app.use(express.static(path.join('frontend', 'build')));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () =>
	console.log('server is running on http://localhost:' + port)
);
