// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return status code 200 when requesting kit', async () => {
	let statusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=2`);
		statusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200);
});

test('Should show first kit in cardId 2 named "Pizza"', async () => {
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
