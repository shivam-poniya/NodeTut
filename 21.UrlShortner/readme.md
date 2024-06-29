
# API Documentation for URL Shortener

## Overview
This documentation provides details on the URL Shortener API endpoints for creating, using, and analyzing shortened URLs. The base URL for all requests is `http://localhost:8000/api/linkly`.

## Endpoints

### 1. Create Short URL
Creates a shortened URL for a given long URL.

- **URL**: `/api/linkly`
- **Method**: `POST`
- **Headers**: None
- **Request Body**:
  ```json
  {
    "url": "https://www.youtube.com/"
  }
  ```
- **Response**: 
  - **Success**: HTTP 200 OK with a JSON object containing the shortened URL.
  - **Failure**: HTTP 4XX/5XX with an error message.

**Example Request**:
```http
POST /api/linkly HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
  "url": "https://www.youtube.com/"
}
```

**Example Response**:
```json
{
  "short_url": "http://localhost:8000/sDDV2OLQz"
}
```

### 2. Use Short URL
Redirects to the original long URL using the shortened URL.

- **URL**: `/api/linkly`
- **Method**: `GET`
- **Headers**: None
- **Request Parameters**: None
- **Response**: 
  - **Success**: HTTP 302 Found with a redirect to the original URL.
  - **Failure**: HTTP 4XX/5XX with an error message.

**Example Request**:
```http
GET /api/linkly HTTP/1.1
Host: localhost:8000
```

**Example Response**:
HTTP 302 Found with a redirect to the original URL.

### 3. Get Short URL Analytics
Retrieves analytics for a specific shortened URL.

- **URL**: `/api/linkly/analytics/{shortUrlId}`
- **Method**: `GET`
- **Headers**: None
- **Request Parameters**:
  - `shortUrlId`: The unique identifier for the shortened URL.
- **Response**: 
  - **Success**: HTTP 200 OK with a JSON object containing analytics data.
  - **Failure**: HTTP 4XX/5XX with an error message.

**Example Request**:
```http
GET /api/linkly/analytics/sDDV2OLQz HTTP/1.1
Host: localhost:8000
```

**Example Response**:
```json
{
  "totalClicks": 5,
  "analytics": [
    {
      "timestamp": 1719637651458,
      "_id": "667f96931c01185fc0fd8eee"
    },
    {
      "timestamp": 1719637742843,
      "_id": "667f96ee6479c98b3d013582"
    },
    {
      "timestamp": 1719637744679,
      "_id": "667f96f06479c98b3d013585"
    },
    {
      "timestamp": 1719637746049,
      "_id": "667f96f26479c98b3d013589"
    },
    {
      "timestamp": 1719637764408,
      "_id": "667f97046479c98b3d013593"
    }
  ]
}
```

## Notes
- Ensure the server is running on `localhost:8000` to use these endpoints.
- Replace `{shortUrlId}` with the actual short URL identifier in analytics requests.
- All data is sent and received in JSON format.

## Contact
For any issues or questions regarding the API, please contact the development team at support@example.com.
