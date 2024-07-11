// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    name: "Stable",
    cardId: 6
}

test('Deleting kit results in successful response code', async () => {
    let statusCode;
    try {
        const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const postResponseBody = await postResponse.json();
        const kitId = postResponseBody["id"];

        const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
            method: 'DELETE',
        });
        statusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(statusCode).toBe(200);
});

test('Deleting kit returns ok true in response', async () => {
    let responseBody;
    try {
        const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const postResponseBody = await postResponse.json();
        const kitId = postResponseBody["id"];

        const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        responseBody = data.ok;
    } catch (error) {
        console.error(error);
    }
    expect(responseBody).toBe(true);
});
