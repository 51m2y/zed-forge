# zed-forge Portfolio — Contact Details Brief for Codex

## What this document is
Targeted edits to update all contact information, social links, and icons
across the zed-forge portfolio site. Do not change anything else.

---

## Real contact details (replace all placeholders with these)

```
Email:      chandasimbaya8@gmail.com
WhatsApp:   +260 976034685
Phone:      +260 976034685
GitHub:     https://github.com/51m2y
LinkedIn:   https://www.linkedin.com/in/chanda-simbaya-451947270
```

---

## Edit 1 — Contact section (right column)

Replace all placeholder contact detail entries with the real details below.
Use Lucide React icons — modern, stroke-style, consistent with the rest of the site.

### HTML/JSX structure for each contact item:
```tsx
// Pattern for every contact item:
<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 text-ff-muted transition hover:text-ff-text"
>
  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ff-border bg-ff-surface transition group-hover:border-ff-blue group-hover:bg-ff-surface-2">
    <Icon size={16} className="transition group-hover:text-ff-blue" />
  </span>
  <span className="text-sm">{label}</span>
</a>
```

### Contact items (in this order):

```tsx
// 1. Email
import { Mail } from "lucide-react"
href="mailto:chandasimbaya8@gmail.com"
icon: <Mail />
label: "chandasimbaya8@gmail.com"

// 2. WhatsApp
import { MessageCircle } from "lucide-react"
href="https://wa.me/260976034685"
icon: <MessageCircle />
label: "+260 976 034 685"
// Note: opens WhatsApp chat directly

// 3. Phone
import { Phone } from "lucide-react"
href="tel:+260976034685"
icon: <Phone />
label: "+260 976 034 685"

// 4. GitHub
import { Github } from "lucide-react"
href="https://github.com/51m2y"
icon: <Github />
label: "github.com/51m2y"

// 5. LinkedIn
import { Linkedin } from "lucide-react"
href="https://www.linkedin.com/in/chanda-simbaya-451947270"
icon: <Linkedin />
label: "linkedin.com/in/chanda-simbaya-451947270"
```

### WhatsApp CTA button (below contact items):
```tsx
<a
  href="https://wa.me/260976034685?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20zed-forge."
  target="_blank"
  rel="noopener noreferrer"
  className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
>
  <MessageCircle size={16} />
  Message us on WhatsApp
</a>
```

---

## Edit 2 — Footer social links

Replace all placeholder social links in the footer with the real URLs.
Use the same Lucide icons — consistent with contact section.

```tsx
// Footer social links row:

// GitHub
<a href="https://github.com/51m2y" target="_blank" rel="noopener noreferrer"
   aria-label="zed-forge on GitHub"
   className="focus-ring text-ff-muted transition hover:text-ff-text">
  <Github size={18} />
</a>

// LinkedIn
<a href="https://www.linkedin.com/in/chanda-simbaya-451947270"
   target="_blank" rel="noopener noreferrer"
   aria-label="zed-forge on LinkedIn"
   className="focus-ring text-ff-muted transition hover:text-ff-text">
  <Linkedin size={18} />
</a>

// WhatsApp
<a href="https://wa.me/260976034685" target="_blank" rel="noopener noreferrer"
   aria-label="Message zed-forge on WhatsApp"
   className="focus-ring text-ff-muted transition hover:text-ff-text">
  <MessageCircle size={18} />
</a>
```

---

## Edit 3 — CommandPalette WhatsApp action

The CommandPalette already has an "Open WhatsApp" action.
Update its href to use the real number:

```tsx
// Find this line in CommandPalette.tsx:
window.open("https://wa.me/260976034685", "_blank", "noopener")
// If the number is different, update it to: 260976034685
```

---

## Edit 4 — Any other placeholder contact references

Search the entire codebase for these placeholder strings and remove or
replace them with the real details above:

```
"hello@forgeflow.zm"         → chandasimbaya8@gmail.com
"hello@zed-forge.zm"         → chandasimbaya8@gmail.com
"+260 97 000 0000"           → +260 976034685
"wa.me/260970000000"         → wa.me/260976034685
"github.com/5im2y"           → github.com/51m2y
"github.com/simzy"           → github.com/51m2y
"linkedin.com/in/5im2y"      → linkedin.com/in/chanda-simbaya-451947270
```

---

## Icon usage rules (apply everywhere)

- Icon library: **Lucide React** only — already installed in the project
- Style: stroke icons (default Lucide style) — do NOT use filled variants
- Size in contact section: `size={16}` inside the square button
- Size in footer: `size={18}` standalone
- Size in CommandPalette: `size={16}` (already correct)
- All icons must have `aria-label` on their parent `<a>` tag for accessibility
- Never use emoji as icons in place of Lucide icons

### Icon mapping (use exactly these):
```
Email       → Mail          (lucide-react)
WhatsApp    → MessageCircle (lucide-react)
Phone       → Phone         (lucide-react)
GitHub      → Github        (lucide-react)
LinkedIn    → Linkedin      (lucide-react)
```

---

## Checklist for Codex

- [ ] Email: chandasimbaya8@gmail.com — mailto link, Mail icon
- [ ] WhatsApp: wa.me/260976034685 — MessageCircle icon, pre-filled message
- [ ] Phone: tel:+260976034685 — Phone icon
- [ ] GitHub: github.com/51m2y — Github icon
- [ ] LinkedIn: linkedin.com/in/chanda-simbaya-451947270 — Linkedin icon
- [ ] WhatsApp CTA button: green (#25D366), full width, pre-filled message
- [ ] Footer: GitHub + LinkedIn + WhatsApp icons updated with real URLs
- [ ] CommandPalette: WhatsApp number confirmed as 260976034685
- [ ] All placeholder emails/numbers/handles removed from codebase
- [ ] All contact links open in new tab (target="_blank" rel="noopener noreferrer")
- [ ] Phone link uses tel: protocol (works on mobile)
- [ ] All icons are Lucide React, stroke style, correct sizes
- [ ] All icon-only links have aria-label for accessibility
