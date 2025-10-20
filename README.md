# June Care Company Landing Page

A pixel-perfect recreation of the Republic.com June Care crowdfunding campaign page, built with Next.js 14 and Tailwind CSS.

## ✨ Features

- 🎨 **Faithful Design Recreation**: Meticulously crafted to match the Republic.com design
- 📱 **Fully Responsive**: Optimized for all screen sizes
- 🖼️ **Interactive Media Gallery**: Video and image carousel with thumbnails
- 📊 **Investment Dashboard**: Live funding progress, investor count, and deadline tracker
- 🧭 **Left Sidebar Navigation**: Quick jump navigation through all pitch sections
- 💼 **Deal Terms Display**: Comprehensive investment information and bonus perks
- 🎯 **Tab-Based Content**: Pitch, Discussion, Updates, and Reviews sections
- ⚡ **Optimized Performance**: Built with Next.js 14 for fast page loads

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
/app
  ├── page.tsx          # Main page layout
  ├── layout.tsx        # Root layout with metadata
  └── globals.css       # Global styles and Tailwind imports

/components
  ├── Header.tsx        # Navigation header with search and auth
  ├── Hero.tsx          # Company profile and tags
  ├── Tabs.tsx          # Tab navigation (Pitch, Discussion, etc.)
  ├── MediaGallery.tsx  # Video/image carousel
  ├── PitchContent.tsx  # Main pitch content with left nav
  └── InvestmentStats.tsx # Sidebar with funding stats and perks
```

## 🎨 Key Sections Implemented

### Main Content
- **Highlights & Deal Terms**: Key metrics and investment details side-by-side
- **Problem**: Market opportunity and pain points
- **Solution**: The June Care App and features
- **Traction**: Growth metrics, user stats, and press coverage
- **Vision & Strategy**: Expansion plans and fundraising goals
- **Product**: Platform features and user experience
- **Competition**: Competitive advantages
- **Funding**: Previous funding rounds and investors
- **Team & Founders**: Leadership information
- **FAQ, Press, Risks, About**: Additional sections

### Sidebar Features
- Real-time funding progress bar
- Investor count and days remaining
- CTA button ("Invest in June Care Company")
- Complete deal terms breakdown
- Legal documents and Form C links
- Investment tier bonus perks ($1K, $5K, $25K)

## 🎯 Design Alignment with Republic.com

This implementation closely matches the actual Republic.com June Care page:

- ✅ Clean, modern card-based layout
- ✅ Gray (#F9FAFB) background with white content cards
- ✅ Left sidebar navigation with active state indicators
- ✅ Gradient logo and media placeholders
- ✅ Typography hierarchy matching Republic's style
- ✅ Proper spacing and padding throughout
- ✅ Responsive grid layout (2/3 content, 1/3 sidebar)
- ✅ Interactive elements with hover states
- ✅ Shadow and border treatments

## 🔧 Customization

To adapt this for your own campaign:

1. **Update company info** in `/components/Hero.tsx`
2. **Modify pitch content** in `/components/PitchContent.tsx`
3. **Adjust funding goals** in `/components/InvestmentStats.tsx`
4. **Change media assets** in `/components/MediaGallery.tsx`
5. **Update branding colors** in `tailwind.config.ts`

## 📄 License

MIT

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

# siscom-notes
