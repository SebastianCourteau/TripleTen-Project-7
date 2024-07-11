// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {

		"name": "Test"
}

test('should return status code 200 when changing kit name', async () => {
	let statusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		statusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200);
});

test('Should return ok true in response body when changing kit name"', async () => {
	let responseBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		responseBody = data.ok;
	} catch (error) {
		console.error(error);
	}
	expect(responseBody).toBe(true);
});
