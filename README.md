# PLS 419 / 519 — AI & Social Science

A self-contained course site. No server, no build step, no database: three files and a folder.

    Course Site.dc.html   the site
    course-data.js        all course content (weeks, readings, links, roster)
    styles.css            the design system
    files/                your uploads — PDFs, slides, handouts

## Publish on GitHub Pages

1. Push this folder to a repository.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Copy `Course Site.dc.html` to `index.html` so the site loads at the bare URL.

## Adding materials each week

**In the browser (easiest).** Open the site, press `Shift+E` (or add `?edit` to the URL). The editor panel edits the selected week — title, date, prompt, presenters, readings, materials, assignment — plus quick links, the discussion link and the roster. Edits live in your browser only. When you're done, click **Export course-data.js** and commit the downloaded file over the existing one. Students never see the editor.

Course code, title, semester and instructor name are edited at the top of the editor panel (or in `course-data.js` → `code` / `title` / `term` / `instructor`).

**By hand.** Open `course-data.js` in any text editor and change it directly. It's plain JavaScript — one object, commented.

**Uploads.** Drop PDFs and slides into `files/`, then reference them as `files/w03-slides.pdf` in a week's materials. That's the only way a static site can hold files, and it keeps everything versioned with the course.

## Discussions

All threaded discussion happens on the external tool set in `course-data.js` → `discussion` (E-learning by default). The Discussions tab shows every week's prompt and links out; nothing is posted or stored here.

## Tracker

The Tracker tab shows submission marks only — `IN` received, `GR` graded, `LT` late — never scores. Statuses live in `course-data.js` → `tracker`. Anything in this file is public once pushed, so keep it to marks.
