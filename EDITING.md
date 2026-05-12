# How to edit the website

You don't need to know how to code. All text and images on the website live in two folders inside this repository:

- `content/` — text content (one file per section)
- `public/images/` — images

Every time you save a change on GitHub, the website rebuilds automatically and is live within a couple of minutes.

---

## Editing text

1. On GitHub, open the `content/` folder.
2. Click the section you want to change. The filenames match the sections on the site:
   - `hero.md` — top banner (big title, subtitle, button)
   - `cards.md` — the three info cards (Kde a kedy, Pre koho, Čo ťa čaká)
   - `topics.md` — the list of 10 tutorial topics
   - `why-agora.md` — the "Prečo Agora?" paragraph block
   - `faces.md` — the people grid (Tváre Agory)
   - `why-apply.md` — the green "Prečo sa prihlásiť?" section
   - `apply.md` — the "Prihlásenie" section above the form
3. Click the pencil icon (✏️) at the top right of the file.
4. Edit the text. See the formatting rules below.
5. Scroll down, write a short note like "fix typo in deadline", click **Commit changes**.
6. Wait ~2 minutes. The website updates itself.

### Text formatting rules

- `**bold text**` → **bold text**
- `*italic text*` → *italic text*
- Blank line between paragraphs creates a new paragraph
- `[link text](https://example.com)` makes a clickable link

Things between `---` lines at the top of each file (called "frontmatter") are settings — keep the structure the same and only change what's after the colon. Example:

```yaml
---
title: ŠTUDENTSKÁ AGORA       ← edit this text
button:
  label: prihlás sa            ← edit this text
  href: "#prihlasit-sa"        ← don't change unless you know what this does
---
```

---

## Changing an image

1. **Add the new image:** open the `public/images/` folder on GitHub → click **Add file** → **Upload files** → drag your image in → **Commit changes**.
   - Use lowercase filenames with no spaces: `andrej-2025.jpg`, not `Andrej 2025.JPG`.
   - JPG or PNG. Keep file size under ~2 MB if possible.
2. **Point the website at the new image:** open the section's `.md` file and change the image filename:

   ```yaml
   image: /images/andrej.jpeg          ← change this to /images/andrej-2025.jpg
   ```

3. Save (commit). The site updates within ~2 minutes.

If you also want to delete the old image, open `public/images/`, click the old file, then the trash icon.

---

## Adding or removing a person

Open `content/faces.md`. You'll see a list like this for each person:

```yaml
- name: Mgr. Ján Pastorek
  role: Tútor a akademický tím
  image: /images/jan.png
  alt: Ján
```

To **add** a person, copy a block, paste it below, and change the four fields. Make sure to upload their photo to `public/images/` first.

To **remove** a person, delete their four lines (from `- name:` down to `alt:`).

The indentation (the spaces at the start of each line) **matters** — keep it the same as the existing entries.

---

## Adding or removing a tutorial topic

Open `content/topics.md`. Each topic looks like this:

```yaml
- name: Existencia
  sub: Existencializmus už od Augustína
```

Copy, paste, edit, or delete the same way. The numbers (1., 2., 3., …) are added automatically — don't put them in the file yourself.

---

## Updating the deadline / contact email

Open `content/apply.md`. Update the `deadline` and `email` lines in the top section, and also the inline mentions in the paragraph below.

---

## Previewing changes (optional, for the brave)

Every change is live within ~2 minutes on the public URL. If you want to preview a change without publishing it, you can:

1. Edit a file on GitHub.
2. Instead of committing to `master`, choose "Create a new branch" and click **Propose changes**.
3. On the next page, click **Create pull request**. GitHub will build a preview deployment.

If this feels like too much, just commit to `master` directly. Mistakes are easy to undo: every commit can be reverted by clicking it in the history and pressing **Revert**.

---

## If something looks broken

1. Open the **Actions** tab at the top of the GitHub repo.
2. The most recent run will have a red ❌ if the build failed.
3. Click it to see the error. Common causes:
   - You removed the `---` line at the top of a `.md` file.
   - You broke the indentation in a YAML list (missing or extra spaces).
   - You referenced an image filename that doesn't exist in `public/images/`.
4. Open the same file, fix the mistake, commit again. The build will retry.

If you're stuck, revert your last commit (history → click commit → **Revert**).
