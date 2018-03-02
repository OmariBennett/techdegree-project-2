const express = require('express');
const app = express();

//Serving static file to express
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index.html');
});

//This expression will evaluate to 3000 unless we're deploying the out to a production environment.
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Sever is running port ${port}!`);
});
