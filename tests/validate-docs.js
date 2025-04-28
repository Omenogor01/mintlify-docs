/* 
  Title: Validating docs.json with validate-docs.js
  Description: A script to validate the structure of the docs.json file against a predefined JSON schema using Ajv. 
  This ensures that the documentation configuration adheres to the required standards.
  Author: Your Name
  Last Updated: 2025-04-29
  Tags: ["docs.json", "validation", "schema validation", "Ajv", "JSON schema"]
*/

const fs = require('fs');
const Ajv = require('ajv');

// Load the JSON schema
const schema = require('./docs-schema.json');

// Initialize Ajv for schema validation
const ajv = new Ajv({ allErrors: true, verbose: true });
const validate = ajv.compile(schema);

try {
  // Read and parse the docs.json file
  const docs = JSON.parse(fs.readFileSync('./docs.json', 'utf8'));

  // Validate the docs.json file against the schema
  const valid = validate(docs);

  if (!valid) {
    console.error('Validation failed. Errors:');
    validate.errors.forEach((error) => {
      console.error(`- ${error.instancePath}: ${error.message}`);
    });
  } else {
    console.log('docs.json is valid!');
  }
} catch (error) {
  console.error('Error reading or validating docs.json:', error.message);
}

/* 
  Usage Instructions:
  1. Ensure that `docs.json` and `docs-schema.json` are in the same directory as this script.
  2. Run the script using Node.js:
     ```
     node [validate-docs.js](http://_vscodecontentref_/1)
     ```
  3. If validation fails, review the errors in the console and update `docs.json` accordingly.
*/

/* 
  Best Practices:
  - Keep the JSON schema (`docs-schema.json`) up-to-date with the latest requirements for `docs.json`.
  - Validate `docs.json` after every significant change to ensure consistency.
  - Use meaningful error messages in the schema to make debugging easier.
*/

---
title: "Validating docs.json with validate-docs.js"
description: "Learn how to use the validate-docs.js script to ensure your docs.json file adheres to the defined schema. This guide covers setup, usage, and troubleshooting validation errors."
tags: ["docs.json", "validation", "schema validation", "Ajv", "JSON schema"]
icon: "check-circle"
---

# Validating `docs.json` with `validate-docs.js`

## Introduction
The `validate-docs.js` script is a utility designed to validate your `docs.json` file against a predefined JSON schema. This ensures that your documentation configuration is structured correctly and adheres to the required standards.

In this guide, we’ll explain how the script works, how to use it, and how to troubleshoot common validation errors.

---

## How It Works

The script uses the following components:
1. **`fs` Module**: Reads the `docs.json` file.
2. **Ajv**: A fast JSON schema validator for validating the structure of `docs.json`.
3. **Schema File**: A JSON schema (`docs-schema.json`) that defines the expected structure and rules for `docs.json`.

### Key Code Overview:
```javascript
const fs = require('fs');
const Ajv = require('ajv');

// Load the JSON schema
const schema = require('./docs-schema.json');

// Initialize Ajv for schema validation
const ajv = new Ajv({ allErrors: true, verbose: true });
const validate = ajv.compile(schema);

try {
  // Read and parse the docs.json file
  const docs = JSON.parse(fs.readFileSync('./docs.json', 'utf8'));

  // Validate the docs.json file against the schema
  const valid = validate(docs);

  if (!valid) {
    console.error('Validation failed. Errors:');
    validate.errors.forEach((error) => {
      console.error(`- ${error.instancePath}: ${error.message}`);
    });
  } else {
    console.log('docs.json is valid!');
  }
} catch (error) {
  console.error('Error reading or validating docs.json:', error.message);
}
```