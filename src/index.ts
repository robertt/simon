import express from 'express';
import cors from 'cors';

const app = express();

app.set('view engine', 'ejs');
app.use(cors());

const port = parseInt(process.env.PORT || '4000');

function detect(agent: string) {
	if (/android/i.test(agent)) return 'android';
	if (/iPad|iPhone|iPod/.test(agent)) return 'ios';

	return null;
}

const requiredKeys = ['playstore', 'appstorename', 'appstoreid'];

app.get('/', (req, res) => {
	for (const key of requiredKeys) {
		if (!req.query[key]) return res.status(400).send(`Missing key ${key}`);
	}

	const playstoreLink = `https://play.google.com/store/apps/details?id=${req.query.playstore}`;
	const appstoreLink = `https://apps.apple.com/us/app/${req.query.appstorename}/${req.query.appstoreid}`;

	const agent = req.headers['user-agent'];
	const detected = !agent ? null : detect(agent);

	if (detected === 'android') return res.redirect(playstoreLink);

	if (detected === 'ios') return res.redirect(appstoreLink);

	// Unable to detect, try fallback
	if (req.query.fallback) return res.redirect(req.query.fallback as string);

	// Finally, if all else fails, return a very basic page
	return res.render('index', { appstoreLink, playstoreLink });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
