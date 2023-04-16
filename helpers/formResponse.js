/* eslint-disable no-negated-condition */
const fromResponse = (message, status, result) => result !== null
	? {
		message,
		status,
		data: result,
	}
	: {
		message,
		status,
	};

module.exports = fromResponse;
