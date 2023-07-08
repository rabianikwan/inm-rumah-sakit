import express from 'express';

import * as path from 'path';

import idenClient from '../handler/core-app.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).sendFile(path.join('..', 'frontend', 'build', 'index.html'));
});

router.post('/id', (req, res) => {
	const nr = req.body.username;
	const pass = req.body.pass;
	let numerator = req.body.numerator;
	numerator = numerator.split(',');
	console.log(numerator);

	let denumerator = req.body.denumerator;
	denumerator = denumerator.split(',');
	console.log(denumerator);
	const month = req.body.month;
	const dashboard =
		'http://36.91.145.99:5800/pmkp/index.php?im=aktivitas&id=90';
	idenClient(nr, pass, month, numerator, denumerator, dashboard).then(() =>
		console.log('finsihed')
	);

	res.status(200).json({
		message: 'ini akan diteruskan sebagai data identifikasi pasien',
		data: {
			namaruangan: nr,
			pass: pass,
			month: month,
			numerator: numerator,
			denumerator: denumerator,
			dashboard: dashboard,
		},
	});
});

router.post('/visite', (req, res) => {
	const nr = req.body.username;
	const pass = req.body.pass;
	let numerator = req.body.numerator;
	numerator = numerator.split(',');
	console.log(numerator);

	let denumerator = req.body.denumerator;
	denumerator = denumerator.split(',');
	console.log(denumerator);
	const month = req.body.month;
	const dashboard =
		'http://36.91.145.99:5800/pmkp/index.php?im=aktivitas&id=94';
	idenClient(nr, pass, month, numerator, denumerator, dashboard).then(() =>
		console.log('finsihed')
	);

	res.status(200).json({
		message: 'ini akan diteruskan sebagai data visite',
		data: {
			namaruangan: nr,
			pass: pass,
			month: month,
			numerator: numerator,
			denumerator: denumerator,
			dashboard: dashboard,
		},
	});
});

router.post('/resiko-jatuh', (req, res) => {
	const nr = req.body.username;
	const pass = req.body.pass;
	let numerator = req.body.numerator;
	numerator = numerator.split(',');
	console.log(numerator);

	let denumerator = req.body.denumerator;
	denumerator = denumerator.split(',');
	console.log(denumerator);

	const month = req.body.month;
	const dashboard =
		'http://36.91.145.99:5800/pmkp/index.php?im=aktivitas&id=99';
	idenClient(nr, pass, month, numerator, denumerator, dashboard).then(() =>
		console.log('finsihed')
	);

	res.status(200).json({
		message: 'Ini akan diteruskan untuk data resiko jatuh',
		data: {
			namaruangan: nr,
			pass: pass,
			month: month,
			numerator: numerator,
			denumerator: denumerator,
			dashboard: dashboard,
		},
	});
});

export default router;
