---
title: "Get Plants API Endpoint"
description: "Learn how to use the GET /plants API endpoint to retrieve a list of plant records. This guide includes query parameters, response examples, and best practices."
tags: ["API", "GET", "plants", "API reference", "endpoint"]
icon: "leaf"
openapi: "GET /plants"
---

# Get Plants API Endpoint

## Overview
The `GET /plants` endpoint allows you to retrieve a list of plant records from the database. Use this endpoint to fetch plant data for display, analysis, or integration with other systems.

---

## Endpoint Details

- **Method**: `GET`
- **URL**: `/plants`
- **Authentication Required**: Yes
- **Rate Limit**: 100 requests per minute

---

## Query Parameters

| **Parameter** | **Type**   | **Description**                                      | **Required** |
|---------------|------------|------------------------------------------------------|--------------|
| `limit`       | `integer`  | The maximum number of records to return (default: 10)| No           |
| `offset`      | `integer`  | The number of records to skip for pagination         | No           |
| `type`        | `string`   | Filter plants by type (e.g., "indoor", "outdoor")    | No           |
| `search`      | `string`   | Search for plants by name or description             | No           |

---

## Example Request

### cURL
```bash
curl -X GET "https://api.yourdomain.com/plants?limit=10&offset=0&type=indoor" \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
