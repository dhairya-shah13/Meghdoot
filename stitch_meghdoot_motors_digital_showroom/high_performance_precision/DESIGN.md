---
name: High-Performance Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444650'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757681'
  outline-variant: '#c5c6d2'
  surface-tint: '#445b9e'
  primary: '#001646'
  on-primary: '#ffffff'
  primary-container: '#0b2a6b'
  on-primary-container: '#7c94db'
  inverse-primary: '#b3c5ff'
  secondary: '#bb0218'
  on-secondary: '#ffffff'
  secondary-container: '#df2a2e'
  on-secondary-container: '#fffbff'
  tertiary: '#181921'
  on-tertiary: '#ffffff'
  tertiary-container: '#2d2e36'
  on-tertiary-container: '#96959f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4385'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb3ac'
  on-secondary-fixed: '#410003'
  on-secondary-fixed-variant: '#930010'
  tertiary-fixed: '#e3e1ec'
  tertiary-fixed-dim: '#c6c5cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#46464e'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Barlow Condensed
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style
The design system is engineered to evoke the precision of automotive engineering and the reliability of a premier service institution. The brand personality is authoritative and technical, yet remains approachable through a structured, clean layout. 

The design style is **Corporate Modern with Tactile Accents**. It utilizes high-contrast visual cues—notably Racing Red—to guide users through the conversion funnel, while maintaining a sophisticated atmosphere through Deep Navy and Metallic Silver. The interface feels fast and efficient, mirroring the speed of service, with smooth transitions and subtle depth that suggest a premium, white-glove experience.

## Colors
The palette is rooted in a "Performance Trinity" of colors:
- **Deep Navy (#0B2A6B):** Represents authority, trust, and the foundation of the brand. Used for headers, primary backgrounds, and high-level navigation.
- **Racing Red (#D42027):** Reserved exclusively for Actionable items (CTAs), critical alerts, and brand highlights. It creates an immediate focal point.
- **Metallic Silver & Graphite:** Used for borders, icons, and secondary text to provide a technical, industrial finish.
- **Clean Base:** A light-grey background (#F1F5F9) is used instead of pure white to reduce glare and enhance the premium feel of the navy containers.

## Typography
The typography strategy contrasts the mechanical, high-energy feel of **Barlow Condensed** for headings with the systematic clarity of **Inter** for functional text. 

Headings should use tight letter-spacing and uppercase styling for "Display" roles to mimic automotive badging. Body text maintains generous line heights to ensure legibility during quick scans. Labels and small utility text should utilize a semi-bold weight and slight tracking to maintain a technical, organized appearance.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

Layouts are characterized by "Rigid Alignment"—elements should feel snapped to a grid, reflecting engineering precision. Spacing is generous between sections (80px+) to allow the high-quality automotive imagery to breathe. On mobile, horizontal margins are reduced to 20px, but vertical rhythm remains tight (using 8px increments) to maintain the "fast" feel of the interface.

## Elevation & Depth
Depth is used sparingly but effectively to indicate interactivity:
- **Sticky Navigation:** Uses a high-density backdrop blur (20px) with a semi-transparent Navy tint (85% opacity) to maintain context while scrolling.
- **Card States:** Default cards use a thin 1px Metallic Silver border. On hover, they transition to a "Shadow Glow"—a soft, diffused outer glow using a desaturated version of the Primary Navy, accompanied by a 4px upward translation (Y-axis).
- **Surface Layering:** Service sections utilize tonal layering, where secondary content sits on a slightly darker or lighter grey surface to define boundaries without heavy lines.

## Shapes
The shape language is **Soft-Industrial**. While sharp corners feel too aggressive, overly rounded "pill" shapes feel too casual for a mechanical service brand. 

A consistent 4px (0.25rem) radius is applied to buttons, input fields, and cards. This provides a modern touch while maintaining a structural, geometric silhouette that aligns with the "Precision" brand value.

## Components
- **Buttons:** Primary CTAs (e.g., "Book Service") use the Racing Red background with white text and a subtle 10% dark gradient on the bottom edge for a tactile feel. Secondary buttons use a Navy outline or Ghost style.
- **Service Cards:** Feature a top-aligned icon in Silver, followed by a Barlow Condensed header. The entire card area is interactive, triggering the hover-lift effect.
- **Input Fields:** Use a light grey fill with a bottom-only 2px border that turns Navy on focus. This mimics technical blueprints.
- **Animated Stats:** Large display numbers for "Cars Serviced" or "Expert Technicians" should use Barlow Condensed and count up on scroll-into-view.
- **Chips/Status:** Small badges for "Genuine Parts" or "Express Service" use high-contrast Navy backgrounds with uppercase Label-bold typography.
- **Interactive Map:** A custom-styled map interface using the Navy and Silver palette to show service station locations.