---
title: "Navigation: Organize Your Documentation"
description: "Learn how to configure the navigation menu in docs.json for your documentation. Includes examples for regular, nested, and folder-based navigation structures."
tags: ["navigation", "docs.json", "documentation", "nested navigation", "folders"]
icon: "map"
---

# Navigation: Organize Your Documentation

## Introduction
The navigation menu is the backbone of your documentation, providing users with a clear and structured way to explore your content. In Mintlify, the `navigation` field in `docs.json` defines the pages and groups that appear in the navigation menu.

This guide explains how to configure the navigation menu, including regular navigation, nested groups, and folder-based structures. By the end of this guide, you’ll be able to create a seamless navigation experience for your users.

---

## Navigation Syntax

The navigation syntax in `docs.json` is recursive, allowing you to create nested navigation groups. You don’t need to include `.mdx` in page names.

### Example: Regular Navigation
```json
"navigation": {
  "tabs": [
    {
      "tab": "Docs",
      "groups": [
        {
          "group": "Getting Started",
          "pages": ["quickstart"]
        }
      ]
    }
  ]
}
```

### Example: Nested Navigation
```json
"navigation": {
  "tabs": [
    {
      "tab": "Docs",
      "groups": [
        {
          "group": "Getting Started",
          "pages": [
            "quickstart",
            {
              "group": "Nested Reference Pages",
              "pages": ["nested-reference-page"]
            }
          ]
        }
      ]
    }
  ]
}
```

## Folders

Simply put your MDX files in folders and update the paths in `docs.json`.

For example, to have a page at `https://yoursite.com/your-folder/your-page` you would make a folder called `your-folder` containing an MDX file called `your-page.mdx`.

<Warning>

You cannot use `api` for the name of a folder unless you nest it inside another folder. Mintlify uses Next.js which reserves the top-level `api` folder for internal server calls. A folder name such as `api-reference` would be accepted.

</Warning>

### Example: Navigation With Folder
```json
"navigation": {
  "tabs": [
    {
      "tab": "Docs",
      "groups": [
        {
          "group": "Group Name",
          "pages": ["your-folder/your-page"]
        }
      ]
    }
  ]
}
```

## Hidden Pages

MDX files not included in `docs.json` will not show up in the sidebar but are accessible through the search bar and by linking directly to them.
