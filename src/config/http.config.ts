//define all status code for request and response
const httpConfig = () => ({
    //Success response
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,

    //Client error response
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,

    //Server error response 
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
 })
 export const HTTPSTATUS = httpConfig();

 //The HttpSatusCodeType is dynamic created based on the httpConfig status codes can be number or string
 //Don't use a string in statusCode becos will be implied in the HttpSatusCodeType 

 export type HttpSatusCodeType = (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS]