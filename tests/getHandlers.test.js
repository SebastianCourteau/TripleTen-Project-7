// eslint-disable-next-line no-undef
const config = require('../config');

test('Requesting a kit provides a successful status code', async () => {
	let statusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=2`);
		statusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200);
});

test('Requesting kits in cardid 2 shows "Pizza" as first kit', async () => {
	let responseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=2`);
		const data = await response.json();
		responseBody = data[0]["name"];
	} catch (error) {
		console.error(error);
	}
	expect(responseBody).toBe("Pizza");
});
