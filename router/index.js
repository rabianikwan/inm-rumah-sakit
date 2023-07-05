import express from 'express';

import * as path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).sendFile(path.join('..', 'frontend', 'build', 'index.html'));
});

router.post('/id', (req, res) => {
	const nr = req.body.username;
	const pass = req.body.pass;
	const numerator = req.body.numerator;
	const denumerator = req.body.denumerator;
	const month = req.body.month;

	res.status(200).json({
		message: 'ini akan diteruskan sebagai data identifikasi pasien',
		data: {
			namaruangan: nr,
			pass: pass,
			month: month,
			numerator: numerator,
			denumerator: denumerator,
		},
	});
});

router.post('/visite', (req, res) => {
	const nr = req.body.username;
	const pass = req.body.pass;
	const numerator = req.body.numerator;
	const denumerator = req.body.denumerator;
	const month = req.body.month;

	res.status(200).json({
		message: 'ini akan diteruskan sebagai data visite',
		data: {
			namaruangan: nr,
			pass: pass,
			month: month,
			numerator: numerator,
			denumerator: denumerator,
		},
	});
});

router.post('/resiko-jatuh', (req, res) => {
	const nr = req.body.username;
	const pass = req.body.pass;
	const numerator = req.body.numerator;
	const denumerator = req.body.denumerator;
	const month = req.body.month;

	res.status(200).json({
		message: 'Ini akan diteruskan untuk data resiko jatuh',
		data: {
			namaruangan: nr,
			pass: pass,
			month: month,
			numerator: numerator,
			denumerator: denumerator,
		},
	});
});

export default router;
