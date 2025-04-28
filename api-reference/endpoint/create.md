---
title: 'Create Plant'
openapi: 'POST /plants'
description: 'Learn how to use the Create Plant API endpoint to add new plants to your database.'
---

# Create Plant API Endpoint

## Overview
The **Create Plant** API endpoint allows you to add new plants to your database. This endpoint is designed for applications that manage plant data, such as gardening apps, plant nurseries, or inventory systems. By using this endpoint, you can specify plant details like name, species, and care instructions.

---

## Endpoint Details

- **URL**: `/plants`
- **Method**: `POST`
- **Authentication Required**: Yes
- **Content-Type**: `application/json`

---

## Request Parameters

### Body Parameters
The following parameters should be included in the request body:

| Parameter      | Type     | Required | Description                          |
|----------------|----------|----------|--------------------------------------|
| `name`         | `string` | Yes      | The name of the plant.               |
| `species`      | `string` | Yes      | The species of the plant.            |
| `description`  | `string` | No       | A brief description of the plant.    |
| `care_instructions` | `string` | No   | Instructions for taking care of the plant. |
| `price`        | `number` | No       | The price of the plant (if applicable). |

### Example Request Body
```json
{
  "name": "Fiddle Leaf Fig",
  "species": "Ficus lyrata",
  "description": "A popular indoor plant with large, glossy leaves.",
  "care_instructions": "Water once a week and keep in bright, indirect sunlight.",
  "price": 25.99
}
