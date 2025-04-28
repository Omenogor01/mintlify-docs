---
title: 'Send Email API'
openapi: 'POST /v1/emails'
---

```openapi
{
  "title": "Send Email API",
  "description": "Learn how to use the Send Email API to send transactional or marketing emails. This guide includes request body details, response examples, and best practices for email delivery.",
  "tags": ["API", "email", "send email", "email API", "transactional email", "marketing email"],
  "icon": "email",
  "openapi": "POST /v1/emails",
  "requestBody": {
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "to": {
              "type": "string",
              "description": "The recipient's email address."
            },
            "subject": {
              "type": "string",
              "description": "The subject line of the email."
            },
            "html": {
              "type": "string",
              "description": "The HTML content of the email."
            }
          },
          "required": ["to", "subject", "html"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "Email queued successfully",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "message_id": {
                "type": "string",
                "description": "The unique ID of the queued email."
              }
            }
          }
        }
      }
    },
    "400": {
      "description": "Bad Request - Invalid input data",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "error": {
                "type": "string",
                "description": "Details about the validation error."
              }
            }
          }
        }
      }
    },
    "401": {
      "description": "Unauthorized - Missing or invalid API key",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "error": {
                "type": "string",
                "description": "Authentication error details."
              }
            }
          }
        }
      }
    },
    "500": {
      "description": "Internal Server Error - An error occurred on the server",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "error": {
                "type": "string",
                "description": "Details about the server error."
              }
            }
          }
        }
      }
    }
  },
  "bestPractices": [
    "Ensure the 'to' field contains a valid email address.",
    "Use a descriptive subject line to improve email engagement.",
    "Validate the HTML content to ensure proper rendering across email clients.",
    "Monitor email delivery rates and handle bounces effectively.",
    "Use authentication headers to secure your API requests."
  ]
}