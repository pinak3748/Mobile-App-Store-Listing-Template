# Mobile App Store Listing Template

A modern, responsive Next.js template for creating beautiful app store listing pages. This template replicates the look and feel of iOS App Store listings with a clean, professional design that works seamlessly across all devices.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **App Store UI**: Authentic iOS App Store listing page design
- **Easy Customization**: All content managed through a single JSON configuration file
- **Modern Stack**: Built with Next.js 16, React 19, and Tailwind CSS
- **Type-Safe**: Full TypeScript support
- **Performance Optimized**: Image optimization and fast page loads
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📋 Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

## 🛠️ Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Quick Start

### 1. Customize Your App Data

Edit `app/data.json` with your app's information. This file contains all the content displayed on your listing page:

- App name, icon, and developer information
- Screenshots
- Description and "What's New" content
- Ratings and reviews
- App information (category, size, compatibility, etc.)

See [DATA_BREAKDOWN.md](./DATA_BREAKDOWN.md) for a detailed breakdown of all available fields.

### 2. Add Your Assets

Place your app assets in the `public/` directory:

- **App Icon**: Add your app icon as `logo.png` (or update the path in `data.json`)
- **Screenshots**: Add your screenshots as `1.png`, `2.png`, `3.png`, etc. (or update paths in `data.json`)

### 3. Customize Styling

The template uses Tailwind CSS for styling. You can customize:

- Colors: Edit `app/globals.css` for theme colors
- Layout: Modify `app/page.tsx` for layout changes
- Components: Customize individual components in `app/components/`

### 4. Update Legal Pages

Update the privacy policy and terms of service:

- Edit `app/content/privacy-policy.mdx` for your privacy policy
- Edit `app/content/terms-of-service.mdx` for your terms of service

### Modifying Layout

The main page component is in `app/page.tsx`. You can:

- Reorder sections
- Add new sections
- Modify existing sections
- Change component styling

### Adding New Sections

1. Add data to `app/data.json`
2. Import the data in `app/page.tsx`
3. Create a new section component
4. Add it to the page layout

## 🌐 Deployment

This template can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository and deploy automatically
- **Netlify**: Connect your repository or use the Netlify CLI
- **AWS Amplify**: Connect your repository for automatic deployments
- **Self-hosted**: Use any Node.js hosting service

## 📚 Project Structure

```
mobile-boilerplate/
├── app/
│   ├── components/          # Reusable React components
│   ├── content/             # MDX content files (privacy policy, terms)
│   ├── data.json           # Main configuration file
│   ├── globals.css         # Global styles and theme
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── public/                 # Static assets (images, icons)
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

All app data is configured in `app/data.json`. For detailed information about each field, see [DATA_BREAKDOWN.md](./DATA_BREAKDOWN.md).

## 💡 Tips

- **Screenshots**: Use high-quality screenshots (recommended: 1242x2688px for iPhone)
- **App Icon**: Use a square icon (1024x1024px recommended)
- **Content**: Keep descriptions concise but informative
- **Reviews**: Use authentic-sounding reviews for better credibility
- **Ratings**: Ensure ratings distribution adds up to 100%

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For detailed information about the data structure and configuration options, refer to [DATA_BREAKDOWN.md](./DATA_BREAKDOWN.md).

---

Built with ❤️ using Next.js and Tailwind CSS
