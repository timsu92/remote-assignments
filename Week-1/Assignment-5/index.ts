import express from 'express';

const app = express();
const port = 3000;

app.get('/', function (req, res) {
	res.send("Hello, My Server!\nReturned from localhost~");
})

app.get('/data', function (req, res) {
	const query: {number?: string} = req.query;
	if(Object.keys(query).length === 0) {
		res.send("Lack of Parameter");
	} else if (query.number === undefined || isNaN(+query.number) || !Number.isInteger(+query.number) || +query.number < 1) {
		res.send('Wrong Parameter');
	} else {
		res.send(((1 + +query.number) * +query.number / 2).toString(10));
	}
})

app.listen(port, () => {
	console.log(`Example app listening on localhost:${port}`);
})
