# Design Brief

## Direction

Shree Anant Residency — Premium luxury girls hostel website combining warm hospitality aesthetic with modern student-focused design.

## Tone

Refined elegance with warmth: luxury hospitality feel using cream + gold palette, serif headers for sophistication, approachable sans-serif body, minimal ornament. Not sterile corporate — warm and welcoming.

## Differentiation

Soft gold (#C9A84C) accent used sparingly on CTAs and hover states creates luxury hospitality distinction without pretension. Warm cream backgrounds with subtle card elevation make every section visually distinct yet cohesive.

## Color Palette

| Token      | OKLCH            | Role                                      |
|------------|------------------|-------------------------------------------|
| background | 0.96 0.015 75    | Warm cream page base; welcoming, soft     |
| foreground | 0.2 0.03 50      | Warm dark brown for text; readable        |
| card       | 0.98 0.01 75     | Off-white cards for content zones         |
| primary    | 0.45 0.12 30     | Warm terracotta; secondary actions only   |
| accent     | 0.55 0.14 70     | Soft gold; CTAs, hover, highlights        |
| muted      | 0.92 0.02 75     | Light beige; sections, borders, disabled  |
| destructive| 0.5 0.2 25       | Warm red; alerts and errors                |

## Typography

- Display: Lora — elegant serif for h1/h2; conveys luxury & trustworthiness
- Body: DM Sans — clean, modern, highly legible; student-friendly
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Cards float above cream background via subtle 2-4px shadow (no harsh shadows). Header fixed with minimal elevation. Footer is `bg-muted/30` for visual separation. Section alternation prevents monotony: cards on cream, muted background sections.

## Structural Zones

| Zone    | Background       | Border               | Notes                                  |
|---------|------------------|----------------------|----------------------------------------|
| Header  | `bg-card`        | `border-b border-muted` | Sticky, minimal shadow, navigation nav |
| Hero    | `bg-background`  | —                    | Ken Burns zoom slider, overlay text    |
| Content | Alternating      | —                    | Card on cream, then `bg-muted/20`      |
| Footer  | `bg-muted/30`    | `border-t border-muted` | Warm, cohesive footer with info        |

## Spacing & Rhythm

Large section gaps (48-64px) with generous padding (32-40px per section). Card internal padding 24-32px. Micro-spacing (8-12px) for text/icon pairs. Mobile: 24px sections, 16px padding; desktop: consistent scale-up. Breathing room prioritized.

## Component Patterns

- **Buttons**: Accent gold bg, dark brown text, `rounded-md`, hover scales 102% + shadow lift. Primary actions only.
- **Cards**: `bg-card` with `rounded-lg`, light shadow, `border-muted` optional. Hover: shadow increases on interactive cards.
- **Images**: `rounded-md`, subtle border, lazy-loaded. Hero slider: Ken Burns slow zoom (6s), fade transitions.
- **Form**: Input `bg-background border-muted rounded-md` with focus ring. Label `text-sm font-semibold text-foreground`.

## Motion

- **Preloader**: Dark overlay fades out (0.8s ease-out) on page load.
- **Entrance**: Sections fade-in + slide-up (0.6s delay-staggered via AOS).
- **Hero**: Ken Burns zoom effect (6s on image), text fades in with 0.3s delay.
- **Hover**: Buttons/cards scale 102%, shadow elevates, smooth 0.3s transition.
- **Scroll**: AOS triggers fade-in, slide-up, zoom on elements as they enter viewport. No bounce.

## Constraints

- No gradients on backgrounds (cream + cards only). Accents may have subtle gradient depth if needed.
- Gold accent sparingly (CTAs, hovers, borders). Never overuse.
- Rounded corners: 0.5rem (md) baseline, full only for badges. Keep subtle.
- Typography: Only 2 weights per font (regular 400, bold 700). No ultra-light or extra-bold.
- Motion: Always under 1s for interactions; preloader/entrance animations max 0.8s.

## Signature Detail

Warm gold soft accent creates immediate luxury hospitality recognition. Used only on interactive elements, never on text or backgrounds — restraint conveys premium positioning.
