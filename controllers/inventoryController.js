const inventoryModel = require('../models/inventoryModel');
const aboutUsController = {
	// Ini buat development
	async getInventory(req, res) {
		inventoryModel.getAllInventory(req).then(result => {
			res.status(result.status).send(result);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	},
	async releasePokemon(req, res) {
		inventoryModel.releasePokemon(req).then(result => {
			res.status(result.status).send(result);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	},
	async catchPokemon(req, res) {
		inventoryModel.releasePokemon(req).then(result => {
			res.status(result.status).send(result);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	},
};

module.exports = aboutUsController;
