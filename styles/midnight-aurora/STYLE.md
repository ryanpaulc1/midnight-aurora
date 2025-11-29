# Midnight Aurora

A dark, elegant theme with aurora-inspired accent colors. Features deep navy backgrounds with vibrant teal, purple, and pink accents. Perfect for dashboards, developer tools, and modern SaaS applications.

## Quick Start

### For AI Assistants (Claude Code, Cursor, etc.)

Read `manifest.json` for structured installation instructions.

### Manual Installation

1. **Copy utility function**
   ```bash
   cp lib/utils.ts src/lib/utils.ts
   ```

2. **Copy or merge globals.css**
   ```bash
   cp globals.css src/styles/globals.css
   ```
   Or merge the CSS variables into your existing global styles.

3. **Extend Tailwind config**

   Merge the contents of `tailwind.config.patch.js` into your `tailwind.config.js`:
   ```js
   // tailwind.config.js
   module.exports = {
     darkMode: ["class"],
     theme: {
       extend: {
         // ... paste from tailwind.config.patch.js
       }
     }
   }
   ```

4. **Copy components**
   ```bash
   cp -r components/* src/components/ui/
   ```

5. **Install dependencies**
   ```bash
   npm install @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-accordion @radix-ui/react-avatar @radix-ui/react-tooltip @radix-ui/react-progress @radix-ui/react-label @radix-ui/react-separator class-variance-authority clsx tailwind-merge lucide-react
   ```

6. **Import globals.css** in your app entry point (e.g., `app/layout.tsx` or `main.tsx`)
   ```tsx
   import '@/styles/globals.css'
   ```

## Design Philosophy

Midnight Aurora draws inspiration from the natural aurora borealis phenomenon. The color palette features:

- **Deep navy backgrounds** that provide a calm, focused environment
- **Aurora teal** as the primary action color - vibrant yet professional
- **Aurora purple** for secondary elements - adds depth and sophistication
- **Aurora pink** as an accent - creates visual interest and highlights

The theme is optimized for:
- Long coding sessions with reduced eye strain
- Dashboard and data visualization interfaces
- Developer tools and technical applications
- Modern SaaS products

## Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `background` | `hsl(0 0% 100%)` | `hsl(222 47% 11%)` | Page background |
| `foreground` | `hsl(222 47% 11%)` | `hsl(210 40% 98%)` | Primary text |
| `primary` | `hsl(199 89% 48%)` | `hsl(199 89% 48%)` | Primary actions, links |
| `secondary` | `hsl(280 65% 60%)` | `hsl(280 65% 60%)` | Secondary elements |
| `accent` | `hsl(330 80% 60%)` | `hsl(330 80% 60%)` | Highlights, accents |
| `muted` | `hsl(220 14% 96%)` | `hsl(217 33% 17%)` | Subtle backgrounds |
| `destructive` | `hsl(0 84% 60%)` | `hsl(0 62% 50%)` | Error states, danger |
| `border` | `hsl(220 13% 91%)` | `hsl(217 33% 20%)` | Borders, dividers |
| `card` | `hsl(0 0% 100%)` | `hsl(222 47% 14%)` | Card backgrounds |

## Components Included

### Primitives
- **Button** - 6 variants (default, secondary, destructive, outline, ghost, link) × 4 sizes
- **Badge** - Status indicators with 4 variants
- **Separator** - Horizontal and vertical dividers
- **Skeleton** - Loading placeholders with pulse animation

### Form Elements
- **Input** - Text input with consistent styling
- **Label** - Accessible form labels
- **Checkbox** - With Radix accessibility
- **Radio Group** - Single selection from options
- **Switch** - Toggle for boolean values
- **Select** - Dropdown with keyboard navigation

### Layout
- **Card** - Container with Header, Content, Footer sections
- **Avatar** - User avatars with image and fallback
- **Alert** - Feedback messages with variants

### Interactive
- **Dialog** - Modal dialogs with overlay
- **Dropdown Menu** - Context menus with submenus
- **Tabs** - Tabbed content organization
- **Accordion** - Collapsible content sections
- **Tooltip** - Hover information
- **Toast** - Notification system
- **Progress** - Progress bars

### Utility
- **Showcase** - Interactive preview of all components (add as a route)

## Customization

### Changing Colors

All colors are defined as CSS custom properties in `globals.css`. To customize:

```css
:root {
  /* Change the primary color to a different hue */
  --primary: 220 90% 50%; /* Blue instead of teal */
}

.dark {
  --primary: 220 90% 60%;
}
```

### Adding New Variants

Components use [Class Variance Authority (CVA)](https://cva.style/) for variant management. To add a new button variant:

```tsx
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        // ... existing variants
        success: "bg-green-500 text-white hover:bg-green-600",
      },
    },
  }
)
```

## Preview

The Showcase component renders all components with this style. Add it as a route in your project:

```tsx
// app/showcase/page.tsx (Next.js) or similar
import { Showcase } from '@/components/ui/showcase'

export default function ShowcasePage() {
  return <Showcase />
}
```

Then visit `/showcase` in your dev server to preview all components with live CSS sync.

## License

MIT License - Use freely in personal and commercial projects.

---

**Token Atelier** - Premium style guides for React + Tailwind projects
