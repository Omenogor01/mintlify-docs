---
title: "Images and Embeds: Enhance Your Documentation"
description: "Learn how to add images, videos, and other HTML elements to your documentation using Markdown and embeds. Includes examples for custom styling and iFrames."
tags: ["images", "embeds", "Markdown", "HTML", "documentation"]
icon: "image"
---

# Images and Embeds: Enhance Your Documentation

## Introduction
Images and embeds are essential for creating engaging and visually appealing documentation. Whether you're adding screenshots, diagrams, or videos, Markdown and HTML provide flexible ways to include media in your content.

In this guide, we’ll explore how to add images, videos, and other HTML elements to your documentation, along with tips for custom styling and best practices.

---

## Adding Images

### Using Markdown
Markdown provides a simple syntax for adding images to your documentation.

#### Example:
```md
![title](/path/image.jpg)
```

Note that the image file size must be less than 5MB. Otherwise, we recommend hosting on a service like [Cloudinary](https://cloudinary.com/) or [S3](https://aws.amazon.com/s3/). You can then use that URL and embed.

### Using Embeds

To get more customizability with images, you can also use [embeds](/writing-content/embed) to add images

```html
<img height="200" src="/path/image.jpg" />
```

## Embeds and HTML elements

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/4KzFe50RQkQ"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ width: '100%', borderRadius: '0.5rem' }}
></iframe>

<br />

<Tip>

Mintlify supports [HTML tags in Markdown](https://www.markdownguide.org/basic-syntax/#html). This is helpful if you prefer HTML tags to Markdown syntax, and lets you create documentation with infinite flexibility.

</Tip>

### iFrames

Loads another HTML page within the document. Most commonly used for embedding videos.

```html
<iframe src="https://www.youtube.com/embed/4KzFe50RQkQ"> </iframe>
```
