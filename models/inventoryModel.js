/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
/* eslint-disable no-negated-condition */
const db = require('../helpers/db');
const formResponse = require('../helpers/formResponse');
const fetchApiPokemon = require('../helpers/fetcher');

const fetchApi = async name => {
	const response = await fetchApiPokemon('GET', `/pokemon/${name}`);
	if (response) {
		return response;
	}

	return null;
};

const inventoryModel = {
	getAllInventory() {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM inventory', (err, res) => {
				if (!err) {
					const promises = [];
					const test = res?.map(item => {
						const tempRes = item;
						tempRes.images = `${process.env.URL_IMG_POKEMON}/${item?.id_pokemon}.png`;
						promises.push(fetchApi(item?.origin_name));
						return tempRes;
					});
					Promise.all(promises).then(values => {
						values?.map((item, idx) => test[idx].data = item);
						resolve(formResponse('Get Data Success', 200, test));
					}).catch(err => {
						reject(formResponse(`Get Data Failed ${err}`, 400));
					});
				} else {
					reject(formResponse(`Get Data Failed ${err}`, 400));
				}
			});
		});
	},
	releasePokemon(req) {
		return new Promise((resolve, reject) => {
			const {id} = req.body;
			console.log('iid', req?.body);
			db.query('SELECT * FROM inventory WHERE id = ?', [id], (err, res) => {
				if (!err) {
					console.log('res', res);
					if (res.length > 0) {
						const newCount = res[0].count + 1;
						const newBody = {
							nickname: `${res[0].nickname.replace(`-${res[0].count}`, '')}-${newCount}`,
							count: newCount,
						};
						db.query('UPDATE inventory SET ? WHERE id = ?', [newBody, id], (error, result) => {
							if (!error) {
								resolve(formResponse('Update Inventory', 200, result));
							} else {
								reject(formResponse(`Update Inventory Gagal ${error}`, 500, error));
							}
						});
					} else {
						reject(formResponse(`Get Failed ${err}`, 400));
					}
				} else {
					reject(formResponse(`Get Failed ${err}`, 500));
				}
			});
		});
	},
};

module.exports = inventoryModel;

