---
title: "Delete Plant API Endpoint"
description: "Learn how to use the DELETE /plants/{id} API endpoint to remove a plant record. This guide includes request parameters, response examples, and error handling."
tags: ["API", "DELETE", "plants", "API reference", "endpoint"]
icon: "trash"
---

# Delete Plant API Endpoint

## Overview
The `DELETE /plants/{id}` endpoint allows you to remove a specific plant record from the database. Use this endpoint to manage and maintain your plant data effectively.

---

## Endpoint Details

- **Method**: `DELETE`
- **URL**: `/plants/{id}`
- **Authentication Required**: Yes
- **Rate Limit**: 100 requests per minute

---

## Request Parameters

### Path Parameters
| **Parameter** | **Type** | **Description**            | **Required** |
|---------------|----------|----------------------------|--------------|
| `id`          | `string` | The unique ID of the plant | Yes          |

---

## Example Request

### cURL
```bash
curl -X DELETE https://api.yourdomain.com/plants/12345 \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
