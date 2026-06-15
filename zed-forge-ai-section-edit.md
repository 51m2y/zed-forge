# zed-forge Portfolio — Manual Edit Instructions
## AI Workflow Section Reframe

These are step-by-step instructions to manually edit the AI workflow
section in the zed-forge portfolio. No AI coding tool needed —
just find the file, find the text, and make the changes below.

---

## What we are changing and why

The skills section currently shows "AI Workflow" with three pills:
ChatGPT · Claude · Codex

This needs to be reframed so it reads as a professional process advantage
rather than "AI does the work." Two small changes: the label and one new line
of copy below the pills.

---

## Step 1 — Find the right file

Open your project folder in VS Code (or any editor).

Look for the Skills section component. It will be one of these:

```
src/components/home/Skills.tsx
components/home/Skills.tsx
```

Open that file.

---

## Step 2 — Find the AI Workflow block

Inside the file, search for the text:

```
AI Workflow
```

You are looking for a block that looks something like this
(exact code may vary slightly depending on how Codex built it):

```tsx
<div>
  <h3>AI Workflow</h3>
  <div>
    <span>ChatGPT</span>
    <span>Claude</span>
    <span>Codex</span>
  </div>
</div>
```

It may also look like this if it uses a data array:

```tsx
{ group: "AI Workflow", items: ["ChatGPT", "Claude", "Codex"] }
```

---

## Step 3 — Make the changes

### Change 1 — Update the group label

Find:
```
AI Workflow
```

Replace with:
```
AI-Assisted Development
```

---

### Change 2 — Add a description line below the pills

After the three pills (ChatGPT · Claude · Codex), add this line:

```
We use industry-leading AI tools to plan faster, catch errors earlier,
and spend more time on the details that matter — so you get a better
product in less time.
```

### How to add it in JSX

Find the closing tag of the pills container and add a `<p>` after it:

**Before:**
```tsx
<div className="flex flex-wrap gap-2">
  <span>ChatGPT</span>
  <span>Claude</span>
  <span>Codex</span>
</div>
```

**After:**
```tsx
<div className="flex flex-wrap gap-2">
  <span>ChatGPT</span>
  <span>Claude</span>
  <span>Codex</span>
</div>
<p className="mt-3 text-sm leading-relaxed text-ff-muted">
  We use industry-leading AI tools to plan faster, catch errors earlier,
  and spend more time on the details that matter — so you get a better
  product in less time.
</p>
```

---

### If the skills are defined in a data file instead

Look for a file at:
```
data/skills.ts
src/data/skills.ts
```

It may look like this:

```ts
export const skills = [
  {
    group: "AI Workflow",
    items: ["ChatGPT", "Claude", "Codex"],
  },
  // ...other groups
]
```

**Change it to:**

```ts
export const skills = [
  {
    group: "AI-Assisted Development",
    items: ["ChatGPT", "Claude", "Codex"],
    description: "We use industry-leading AI tools to plan faster, catch errors earlier, and spend more time on the details that matter — so you get a better product in less time.",
  },
  // ...other groups
]
```

Then in the Skills component, find where it renders each group and add:

```tsx
{skill.description && (
  <p className="mt-3 text-sm leading-relaxed text-ff-muted">
    {skill.description}
  </p>
)}
```

---

## Step 4 — Save and check

1. Save the file
2. Run `npm run dev` if not already running
3. Open `http://localhost:3000` in your browser
4. Scroll to the Skills section
5. Confirm:
   - Label now reads **"AI-Assisted Development"** not "AI Workflow"
   - The three pills (ChatGPT · Claude · Codex) are still there
   - The description line appears below the pills in muted text

---

## Step 5 — Deploy

Once it looks correct locally:

```bash
git add .
git commit -m "reframe AI workflow section as AI-Assisted Development"
git push
```

Vercel will auto-deploy within 60 seconds.

---

## Summary of all changes

| Location | Find | Replace with |
|---|---|---|
| Skills section or data file | `"AI Workflow"` | `"AI-Assisted Development"` |
| Below the pills | *(nothing)* | Add description paragraph (see Step 3) |

That is the only change needed. Do not touch anything else.
