const express = require('express');
const app = express();
const enviontment = require('./helpers/environtment');
require('dotenv').config();
const {host, port} = enviontment;
const bodyParser = require('body-parser');
const cors = require('cors');
const inventoryController = require('./controllers/inventoryController');

app.use(express.static('public'));

app.use(cors('*'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.route('/inventory').get(inventoryController?.getInventory);
app.route('/release').put(inventoryController?.releasePokemon);
app.listen(port, () => {
	console.log(`Server started on http://${host}:${port}`);
});
