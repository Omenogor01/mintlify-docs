---
title: "API Reference Introduction"
description: "Learn how to build API documentation using OpenAPI or MDX components. This guide provides an overview of API authentication, endpoints, and best practices for creating API reference documentation."
tags: ["API reference", "OpenAPI", "MDX", "API documentation", "authentication"]
icon: "leaf"
---

# API Reference Introduction

## Welcome

Welcome to the **API Reference Documentation**! This section provides a comprehensive guide to building and managing API documentation using two approaches:
1. **[OpenAPI](https://mintlify.com/docs/api-playground/openapi/setup)**: A standardized format for defining RESTful APIs.
2. **[MDX Components](https://mintlify.com/docs/api-playground/mdx/configuration)**: A flexible way to create custom API documentation using Markdown and React components.

For this starter kit, we are using the OpenAPI specification to define and showcase API endpoints.

---

## Quick Links

<Card
  title="Plant Store Endpoints"
  icon="leaf"
  href="https://github.com/mintlify/starter/blob/main/api-reference/openapi.json"
>
  View the OpenAPI Specification File
</Card>

---

## Authentication

All API endpoints in this documentation require authentication using **Bearer tokens**. Ensure that your requests include a valid token in the `Authorization` header.

### Example Authentication Header
```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```
