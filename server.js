import express from 'express';

const app = express();

import path from 'path';

const port = 3000;

app.use(express.json());

app.use(express.static(path.join('frontend', 'build')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join('frontend', 'build', 'index.html'));
});

app.listen(port, () =>
	console.log('server is running on http://localhost:' + port)
);
