# Sprint 7 project

The project contains various api tests ensuring that they function properly. All tests are stable and work conjunctively.
The files consist of DELETE,GET,POST & PUT requests.
Each method contains two tests and both tests are saved within their respective file.

The documentation source used was apiDoc.

DELETE:

1. My first test for the DELETE method will check if the status code returned when attempting to delete a kit is 200 OK.

    -First a POST request is created in order to keep the other methods stable and functioning.

    --Next I used the endpoint to retrieve the kitId from this newly created kit.

    ---Then I made the DELETE request and expected a 200 status code returned.

2. My second test for the DELETE method will check if deleting a kit returns a Ok: True response.

   -Like the first test a POST request is created prior to the delete to keep the tests overall stable.

    --Next my endpoint retrieves the kitId from this newly created kit.

    ---Then the delete request is made and we expect a ok: true response in the body.

GET:

1. My first test for the GET method will check if requesting a kit provides a 200 status code.

    -First the statusCode variable is declared.

    --Then the try catch method is used to retrieve the response from the url.

    ---Finally the test expects a 200 status code.

2. My second test for the GET request will show Pizza as the name of the first kit in cardId2.

    -First the responseBody variable is declared.

    --then the try catch method is used to retrieve the response from the url using responseBody to store the returned name from the data.

    ---Finally the test expects the name to be Pizza.


POST:

    1. My first test for the POST method will ensure that checking the delivery cost will return a successful status code.

    -First the requestBody is declared with the respective information stored.

    --Then the statusCode variable is delcared in order to later store the statusCode itself.

    ---Finally the test expects a returned statusCode of 200.


    2. My second test for the POST method will check that the delivery cost for Speedy is 7.

    -First the speedyDeliveryCost variable is declared to store the delivery cost for the speedy method.

    --Then the try catch method is used to return the response from the URL and also return the JSON response as a string.

    ---Finally the test expects the speedy value in the response to be 7.

PUT:

    1. My first test for the PUT method will check that changing the kit name will return a successful status code.

    -First the requestBody is delcared with its respective data.

    --Then the try catch method is used to retrieve the response from the URL and return the JSON response as a string.

    ---Finally the test expects the statusCode to be 200.

    2. My second test will ensure that the responseBody once the kit name is changed returns OK: true showing a successful request.

    -First The responseBody variable is declared to store the response.

    --Then the try catch method is used to retrieve the response from the URL, return the JSON response as a string and extract data.ok from the response.

    ---Finally the test expects the responseBody to return a ok: true response.

