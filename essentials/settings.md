---
title: "Global Settings: Configure Your Mintlify Documentation"
description: "Learn how to configure your Mintlify documentation using the docs.json file. Includes examples for navigation, colors, logos, and more."
tags: ["global settings", "docs.json", "Mintlify", "documentation configuration"]
icon: "gear"
---

# Global Settings: Configure Your Mintlify Documentation

## Introduction
Every Mintlify site requires a `docs.json` file to define its core configuration settings. This file allows you to customize your documentation's navigation, appearance, and functionality. By understanding the properties available in `docs.json`, you can create a tailored and user-friendly documentation experience.

In this guide, we’ll explore the key properties of `docs.json`, including navigation, colors, logos, and more, with examples to help you get started.

---

## Properties

### `name` (string, required)
The name of your project, used for the global title.

#### Example:
```json
"name": "Mintlify"
```

### `navigation` (Navigation[], required)
An array of groups with all the pages within that group

#### Example:
```json
"navigation": [
  {
    "group": "Settings",
    "pages": ["customization", "page"]
  }
]
```

### `logo` (string or object)
Path to logo image or object with path to "light" and "dark" mode logo images

#### Example:
```json
"logo": {
  "light": "path/to/light/logo.png",
  "dark": "path/to/dark/logo.png",
  "href": "/"
}
```

### `favicon` (string)
Path to the favicon image

#### Example:
```json
"favicon": "path/to/favicon.ico"
```

### `colors` (Colors)
Hex color codes for your global theme

#### Example:
```json
"colors": {
  "primary": "#ff5733",
  "light": "#c70039",
  "dark": "#900c3f",
  "background": {
    "light": "#f0f0f0",
    "dark": "#333333"
  }
}
```

### `topbarLinks` (TopbarLink[])
Array of `name`s and `url`s of links you want to include in the topbar

#### Example:
```json
"topbarLinks": [
  {
    "name": "Contact us",
    "url": "https://mintlify.com/docs"
  }
]
```

### `topbarCtaButton` (Call to Action)
#### Example:
```json
"topbarCtaButton": {
  "type": "link",
  "url": "https://mintlify.com",
  "name": "Get Started"
}
```

### `versions` (string[])
Array of version names. Only use this if you want to show different versions of docs with a dropdown in the navigation bar.

#### Example:
```json
"versions": ["v1.0", "v2.0"]
```

### `anchors` (Anchor[])
An array of the anchors, includes the `icon`, `color`, and `url`.

#### Example:
```json
"anchors": [
  {
    "icon": "comments",
    "name": "Community",
    "url": "community",
    "color": "#ff5733",
    "version": "v1.0",
    "isDefaultHidden": false,
    "iconType": "duotone"
  }
]
```

### `topAnchor` (Object)
Override the default configurations for the top-most anchor.

#### Example:
```json
"topAnchor": {
  "name": "Documentation",
  "icon": "book-open",
  "iconType": "duotone"
}
```

### `tabs` (Tabs[])
An array of navigational tabs.

#### Example:
```json
"tabs": [
  {
    "name": "Overview",
    "url": "overview"
  }
]
```

### `api` (API)
Configuration for API settings.

#### Example:
```json
"api": {
  "baseUrl": "https://api.example.com",
  "auth": {
    "method": "bearer",
    "name": "Authorization",
    "inputPrefix": "Bearer "
  },
  "playground": {
    "mode": "show"
  },
  "maintainOrder": true
}
```

### `openapi` (string | string[])
A string or an array of strings of URL(s) or relative path(s) pointing to your OpenAPI file.

#### Example:
```json
"openapi": ["https://example.com/openapi1.json", "/openapi2.json"]
```

### `footerSocials` (FooterSocials)
An object of social media accounts where the key:property pair represents the social media platform and the account url.

#### Example:
```json
"footerSocials": {
  "x": "https://x.com/mintlify",
  "website": "https://mintlify.com"
}
```

### `feedback` (Feedback)
Configurations to enable feedback buttons

#### Example:
```json
"feedback": {
  "suggestEdit": true,
  "raiseIssue": true
}
```

### `modeToggle` (ModeToggle)
Customize the dark mode toggle.

#### Example:
```json
"modeToggle": {
  "default": "dark",
  "isHidden": true
}
```

### `backgroundImage` (string)
A background image to be displayed behind every page.

#### Example:
```json
"backgroundImage": "path/to/background/image.png"
```
