# Data Structure Documentation

This document provides a detailed breakdown of the `app/data.json` file structure. Each field is explained with its purpose and usage.

## JSON Structure Overview

```json
{
  "app": {
    /* App header information */
  },
  "screenshots": [
    /* Array of screenshot paths */
  ],
  "description": "/* App description text */",
  "whatsNew": {
    /* What's New section data */
  },
  "ratings": {
    /* Ratings overview and distribution */
  },
  "reviews": [
    /* Array of user reviews */
  ],
  "information": {
    /* App metadata and details */
  }
}
```

## Field-by-Field Breakdown

### `app` Object

Contains the main app information displayed in the header section.

```json
{
  "app": {
    "icon": "/logo.png", // Path to app icon image (relative to /public folder)
    "name": "Subwise Subscription Tracker", // App name displayed as the main title
    "ageRating": "9+", // Age rating badge (e.g., "4+", "9+", "12+", "17+")
    "developer": "Anime Effect, Deforum Editor", // Developer/company name
    "priceType": "Free . In-App Purchases", // Price information (e.g., "Free", "$4.99", "Free . In-App Purchases")
    "overallRating": 5.0, // Overall rating (0.0 to 5.0) displayed in header
    "totalRatings": 6900, // Total number of ratings (used for "X Ratings" text)
    "buttonText": "GET", // Text displayed on the main action button
    "privacyPolicy": "https://www.google.com", // URL to privacy policy page
    "termsOfService": "https://www.google.com" // URL to terms of service page
  }
}
```

**Notes:**

- `icon`: Place your app icon in the `public/` folder and reference it here
- `ageRating`: Common values are "4+", "9+", "12+", "17+"
- `overallRating`: Should match or be close to the calculated average from ratings distribution
- `buttonText`: Typically "GET" for free apps or "$X.XX" for paid apps

### `screenshots` Array

Array of screenshot image paths displayed in a horizontal scrollable gallery.

```json
{
  "screenshots": [
    "/1.png", // First screenshot (leftmost)
    "/2.png", // Second screenshot
    "/3.png", // Third screenshot
    "/4.png", // Fourth screenshot
    "/5.png" // Fifth screenshot (rightmost)
  ]
}
```

**Notes:**

- Place screenshot images in the `public/` folder
- Screenshots are displayed in order from left to right
- Recommended size: 1242x2688px (iPhone Pro Max dimensions)
- Supports any number of screenshots (typically 3-5)

### `description` String

The main app description text displayed below the screenshots.

```json
{
  "description": "Looking for a way to come viral easily? Making your content eye-catching..."
}
```

**Notes:**

- Supports multi-line text
- Automatically truncates with "more" button if text exceeds 2 lines
- Use this to describe your app's features and benefits

### `whatsNew` Object

Contains the "What's New" section information displayed below the description.

```json
{
  "whatsNew": {
    "version": "5.0.0", // Version number displayed in the section header
    "content": "Building and maintaining a font collection..." // Release notes/changelog text
  }
}
```

**Notes:**

- `version`: Follow semantic versioning (e.g., "1.0.0", "2.1.3")
- `content`: Describe new features, improvements, or bug fixes in this version

### `ratings` Object

Contains overall rating statistics and distribution breakdown.

```json
{
  "ratings": {
    "overall": 4.5, // Overall average rating (0.0 to 5.0)
    "totalRatings": 6900, // Total number of ratings
    "distribution": {
      "5": 90, // Percentage of 5-star ratings (0-100)
      "4": 15, // Percentage of 4-star ratings (0-100)
      "3": 5, // Percentage of 3-star ratings (0-100)
      "2": 0, // Percentage of 2-star ratings (0-100)
      "1": 0 // Percentage of 1-star ratings (0-100)
    }
  }
}
```

**Notes:**

- `overall`: Should approximately match the weighted average of the distribution
- `distribution`: Percentages should ideally add up to 100% (not strictly enforced)
- Used to display the rating breakdown bars and overall rating

### `reviews` Array

Array of user review objects displayed in a horizontal scrollable card layout.

```json
{
  "reviews": [
    {
      "title": "Download this one!", // Review title/headline
      "user": "rickNorman", // Username of the reviewer
      "date": "04/19/2023", // Review date (MM/DD/YYYY format)
      "rating": 5, // Star rating (1-5)
      "content": "I've been apart of this app..." // Review text content
    }
  ]
}
```

**Notes:**

- Each review object represents one user review card
- `rating`: Integer between 1 and 5
- `date`: Display format is MM/DD/YYYY
- `content`: Review text (will be truncated if too long)
- Typically include 3-5 reviews

### `information` Object

Contains detailed app metadata displayed in the Information section.

```json
{
  "information": {
    "seller": "Pinak Faldu", // App seller/developer name
    "category": "Photo & Video", // App Store category
    "size": "63.6 MB", // App download size
    "language": "English", // Primary language
    "compatibility": "iOS 14.0+", // Minimum OS version requirement
    "ageRating": "4+", // Age rating (can differ from app.ageRating)
    "inAppPurchases": true, // Boolean indicating if app has in-app purchases
    "pricing": [
      // Array of in-app purchase options (if inAppPurchases is true)
      {
        "name": "Weekly Subscription", // Purchase option name
        "price": "$3.99" // Price of the purchase option
      }
    ]
  }
}
```

**Notes:**

- `category`: Common categories include "Photo & Video", "Games", "Productivity", "Social Networking", etc.
- `size`: Format as "XX.X MB" or "XX.X GB"
- `compatibility`: Format as "iOS X.X+" or "Android X.X+"
- `inAppPurchases`: Set to `false` if your app has no in-app purchases
- `pricing`: Only displayed if `inAppPurchases` is `true` and array has items
- `pricing` array: Can include multiple purchase options (subscriptions, one-time purchases, etc.)

## Complete Example

Here's a complete example of a properly structured `data.json`:

```json
{
  "app": {
    "icon": "/logo.png",
    "name": "My Awesome App",
    "ageRating": "4+",
    "developer": "Your Company Name",
    "priceType": "Free",
    "overallRating": 4.8,
    "totalRatings": 1250,
    "buttonText": "GET",
    "privacyPolicy": "/privacy-policy",
    "termsOfService": "/terms-of-service"
  },
  "screenshots": ["/1.png", "/2.png", "/3.png"],
  "description": "My Awesome App is the perfect solution for...",
  "whatsNew": {
    "version": "1.0.0",
    "content": "Initial release with amazing features..."
  },
  "ratings": {
    "overall": 4.8,
    "totalRatings": 1250,
    "distribution": {
      "5": 85,
      "4": 10,
      "3": 3,
      "2": 1,
      "1": 1
    }
  },
  "reviews": [
    {
      "title": "Amazing app!",
      "user": "user123",
      "date": "01/15/2024",
      "rating": 5,
      "content": "This app has changed my life..."
    }
  ],
  "information": {
    "seller": "Your Company Name",
    "category": "Productivity",
    "size": "25.5 MB",
    "language": "English",
    "compatibility": "iOS 14.0+",
    "ageRating": "4+",
    "inAppPurchases": false,
    "pricing": []
  }
}
```

## Best Practices

1. **Consistency**: Keep ratings consistent between `app.overallRating` and `ratings.overall`
2. **Realistic Data**: Use realistic rating distributions (most apps have more 5-star than 1-star ratings)
3. **Image Paths**: Always use paths relative to the `public/` folder (start with `/`)
4. **Content Length**: Keep descriptions and reviews at reasonable lengths for better UX
5. **Version Format**: Use semantic versioning (MAJOR.MINOR.PATCH) for version numbers
6. **Date Format**: Use MM/DD/YYYY format for review dates

## Troubleshooting

- **Images not showing**: Ensure images are in the `public/` folder and paths start with `/`
- **Ratings don't match**: Verify `app.overallRating` and `ratings.overall` are similar
- **Layout breaks**: Check that all required fields are present and properly formatted
- **In-app purchases not showing**: Ensure `inAppPurchases` is `true` and `pricing` array has items
