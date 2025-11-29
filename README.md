# Token Atelier

Premium style guides for React + Tailwind projects. Stop building UI from scratch - install beautiful, pre-styled component libraries with a single command.

## What is Token Atelier?

Token Atelier provides complete style guides that include:

- **Design Tokens** - Colors, typography, spacing, shadows as CSS variables
- **Styled Components** - 20+ React components built on Radix UI primitives
- **Tailwind Integration** - Ready-to-use with your existing Tailwind setup
- **Showcase Component** - React component to preview all styled components

## Available Styles

| Style | Description | Access |
|-------|-------------|--------|
| **Midnight Aurora** | Dark theme with aurora-inspired accents (teal, purple, pink). Perfect for dashboards and dev tools. | Premium |
| *Starter Light* | Clean, minimal light theme | Free (coming soon) |
| *More styles* | Corporate, Brutalist, Soft Pastels, and more | Coming soon |

## Installation

### Using AI Tools (Recommended)

Tell your AI assistant:

> "Install the Token Atelier midnight-aurora style from https://github.com/token-atelier/token-atelier into my React project"

The AI will:
1. Read the manifest.json
2. Copy files to the correct locations
3. Update your Tailwind config
4. Install npm dependencies

### Manual Installation

1. Navigate to the style directory: `styles/midnight-aurora/`
2. Follow instructions in `STYLE.md`
3. Add a route for the Showcase component to preview all components

## File Structure

```
token-atelier/
├── README.md                    # This file
├── styles/
│   └── midnight-aurora/         # Style package
│       ├── manifest.json        # AI-readable installation spec
│       ├── STYLE.md            # Human-readable guide
│       ├── globals.css         # CSS variables + base styles
│       ├── tailwind.config.patch.js
│       ├── components/         # Styled React components
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── showcase.tsx    # Component preview (add as route)
│       │   └── ...
│       └── lib/
│           └── utils.ts        # cn() utility
```

## How It Works

### For AI Assistants

Each style includes a `manifest.json` that provides:

- Installation instructions in structured format
- File mappings (source → target)
- npm dependencies list
- Component metadata and descriptions

This allows AI coding assistants to automatically install styles into your project.

### For Manual Installation

Each style includes a `STYLE.md` with:

- Step-by-step installation guide
- Design philosophy and color palette
- Customization instructions
- Component documentation

## Tech Stack

- **[Radix UI Primitives](https://www.radix-ui.com/primitives)** - Accessible, unstyled components
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first styling
- **[Class Variance Authority](https://cva.style/)** - Type-safe variant management
- **TypeScript** - Full type safety

## Pricing

| Plan | Price | What You Get |
|------|-------|--------------|
| **Free** | $0 | Starter Light style + showcases |
| **Single Style** | $39 | One premium style, lifetime access |
| **Pro** | $12/mo | All styles + new releases + updates |
| **Team** | $39/mo | 5 seats + priority support |

## Roadmap

- [ ] Free "Starter Light" style
- [ ] CLI tool (`npx token-atelier install`)
- [ ] MCP Server for native AI integration
- [ ] Web catalog at tokenatelier.dev
- [ ] More style options
- [ ] Figma integration

## Support

- **Documentation**: See `STYLE.md` in each style package
- **Issues**: [GitHub Issues](https://github.com/token-atelier/token-atelier/issues)
- **Email**: hello@tokenatelier.dev

## License

Component code is MIT licensed. See individual style packages for details.

---

**Token Atelier** - Beautiful styles for vibe coders
