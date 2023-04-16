const db = require('./db');
const dbAction = {
	insert(table, data) {
		return new Promise((resolve, reject) => {
			db.query(`INSERT INTO ${table} SET ? `, data, (err, res) => {
				if (err) {
					reject(new Error(err));
				} else {
					resolve(res);
				}
			});
		});
	},
	update(table, data, id) {
		return new Promise((resolve, reject) => {
			db.query(`UPDATE ${table} SET ? WHERE id = ? `, [data, id], (err, res) => {
				if (err) {
					reject(new Error(err));
				} else {
					resolve(res);
				}
			});
		});
	},
	delete(table, id) {
		return new Promise((resolve, reject) => {
			db.query(`DELETE FROM ${table} WHERE id = ?`, id, err => {
				if (err) {
					reject(err);
				} else {
					resolve(resolve);
				}
			});
		});
	},
	getWhere(table, params, columns) {
		return new Promise((resolve, reject) => {
			db.query(`SELECT ?? FROM ${table} WHERE ?? = ?`, [columns, Object.keys(params), Object.values(params)], (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			});
		});
	},
	getAll(table, columns) {
		return new Promise((resolve, reject) => {
			db.query(`SELECT ?? FROM ${table}`, [columns, table], (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			});
		});
	},
};

module.exports = dbAction;
