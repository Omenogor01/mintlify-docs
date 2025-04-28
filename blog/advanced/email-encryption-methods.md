---
title: "Email Encryption Methods Compared: TLS vs PGP vs S/MIME"
date: "2024-04-15"
author: 
  name: "David Kim"
  role: "Cryptography Expert"
  avatar: "/assets/images/authors/david-kim.jpg"
tags: ["encryption", "security", "tls"]
---

## Encryption Matrix

| Method       | Transport | E2E | Complexity |
|--------------|-----------|-----|------------|
| STARTTLS     | ✅         | ❌  | Low        |
| PGP          | ❌         | ✅  | High       |
| S/MIME       | ❌         | ✅  | Medium     |

## Implementation Guide

```bash
# Generate PGP key
gpg --full-generate-key

# Encrypt message
gpg --encrypt --recipient user@example.com message.txt