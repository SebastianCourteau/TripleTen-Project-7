// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 4,
            "quantity": 1
        },
        {
            "id": 9,
            "quantity": 3
        }
    ],
    "deliveryTime": 7
}

test('Checking delivery cost returns successful status code', async () => {
	let statusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		statusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200)
});

test('Checking delivery cost for speedy is 7', async () => {
	let speedyDeliveryCost
    try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		speedyDeliveryCost = data.Speedy.deliveryPrice;
	} catch (error) {
		console.error(error);
	}
	expect(speedyDeliveryCost).toBe(7)
});
