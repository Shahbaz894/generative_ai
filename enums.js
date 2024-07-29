var ApiResponseStatus;
(function (ApiResponseStatus) {
    ApiResponseStatus["Success"] = "SUCCESS";
    ApiResponseStatus["NotFound"] = "NOT_FOUND";
    ApiResponseStatus["Unauthorized"] = "UNAUTHORIZED";
    ApiResponseStatus["ServerError"] = "SERVER_ERROR";
    ApiResponseStatus["BadRequest"] = "BAD_REQUEST";
})(ApiResponseStatus || (ApiResponseStatus = {}));
// Example function to simulate an API call
function fetchApiResponse() {
    // Simulating different API responses
    var randomResponse = Math.floor(Math.random() * 5);
    switch (randomResponse) {
        case 0:
            return { status: ApiResponseStatus.Success, data: { id: 1, name: "John Doe" } };
        case 1:
            return { status: ApiResponseStatus.NotFound, message: "Resource not found" };
        case 2:
            return { status: ApiResponseStatus.Unauthorized, message: "Unauthorized access" };
        case 3:
            return { status: ApiResponseStatus.ServerError, message: "Internal server error" };
        case 4:
            return { status: ApiResponseStatus.BadRequest, message: "Bad request" };
        default:
            return { status: ApiResponseStatus.ServerError, message: "Unexpected error" };
    }
}
// Handling the API response
function handleApiResponse(response) {
    switch (response.status) {
        case ApiResponseStatus.Success:
            console.log("Data received:", response.data);
            break;
        case ApiResponseStatus.NotFound:
            console.error("Error:", response.message);
            break;
        case ApiResponseStatus.Unauthorized:
            console.error("Error:", response.message);
            break;
        case ApiResponseStatus.ServerError:
            console.error("Error:", response.message);
            break;
        case ApiResponseStatus.BadRequest:
            console.error("Error:", response.message);
            break;
        default:
            console.error("Unknown status:", response.status);
            break;
    }
}
// Simulating an API call
var response = fetchApiResponse();
handleApiResponse(response);
