const express = require("express");
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
})

app.get('/member/:name/ID/:id', (req, res) => {
	const memberDetails = {
		member: req.params.name,
		id: req.params.id
	}
	res.render('member', memberDetails);
});

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found');
	next();
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
