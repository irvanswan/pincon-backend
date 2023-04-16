const fetch = require('node-fetch');
const fetchApiPokemon = async (method, path, params = null) => {
	const options = {
		method,
	};
	let url = `${process.env.API_POKEMON}${path}`;
	if (method === 'GET') {
		if (params) {
			url += `?${(new URLSearchParams(params)).toString()}`;
		}
	} else {
		options.body = JSON.stringify(params);
	}

	return (await fetch(url, options)).json();
};

module.exports = fetchApiPokemon;
