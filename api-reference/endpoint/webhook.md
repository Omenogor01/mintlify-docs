---
title: "New Plant Webhook"
description: "Learn how to use the New Plant Webhook to receive real-time notifications when a new plant is added. This guide includes payload structure, setup instructions, and best practices."
tags: ["API", "webhook", "real-time notifications", "plants", "API reference"]
icon: "webhook"
openapi: "WEBHOOK /plant/webhook"
---

# New Plant Webhook

## Overview
The New Plant Webhook allows you to receive real-time notifications whenever a new plant is added to the system. This webhook is ideal for applications that need to stay updated with the latest plant data without polling the API.

---

## Webhook Details

- **Event**: `new_plant`
- **URL**: `/plant/webhook`
- **Authentication Required**: Yes
- **Payload Format**: JSON

---

## Payload Structure

When a new plant is added, the webhook sends a `POST` request to your specified endpoint with the following payload:

### Example Payload
```json
{
  "event": "new_plant",
  "data": {
    "id": "12345",
    "name": "Fiddle Leaf Fig",
    "type": "indoor",
    "description": "A popular indoor plant with large, glossy leaves.",
    "created_at": "2025-04-29T12:34:56Z"
  }
}
