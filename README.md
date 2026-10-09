# W001 Daily Review Quiz Hub

A zero-build, static quiz hub designed for GitHub Pages. It contains **10 Cycle 1 daily entry quizzes × 10 questions** and is set up to expand across the full W001 course.

## What teachers do

1. Open `index.html` on the published GitHub Pages site.
2. Find today's quiz by week/day.
3. Click **New session QR**.
4. Display the QR code on the classroom screen.
5. Students scan it and complete the quiz as they arrive.

The session code creates a fresh URL/QR for that class meeting. It does **not** change the question set and it does not track students.

## What students get

- 10 questions
- multiple choice
- locate-the-error items
- typed gap fills
- reorder / drag-and-drop tasks
- category sorting
- immediate check on each item
- a final score
- a full answer/explanation review at the end

No student response data is stored or sent anywhere.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.
6. GitHub will give you a public Pages URL. Open that URL and use the teacher hub.

The QR code library is loaded from jsDelivr. If it ever fails to load, the student link still appears and can be copied.

## Coursebook visual language

The CSS uses the Cycle 1 palette taken from the W001 deck theme:

- ink `#26313A`
- warm paper `#F3F1EC`
- UNDERSTAND teal `#4E7B76`
- TRY gold `#B58A3C`
- DEVELOP blue `#5B6F8C`
- SHOW & REFLECT violet `#7A6A8F`

## Edit or add quizzes

See `docs/QUESTION_AUTHORING.md`. All content is in `js/quiz-data.js`; there is no framework or build process.

## Current Cycle 1 schedule

- Week 2 Sunday — onboarding recycle
- Week 2 Monday — facts, guesses, reasons
- Week 2 Tuesday — paragraph architecture
- Week 2 Wednesday — core description language
- Week 2 Thursday — checking and sentence repair
- Week 3 Sunday — cumulative spiral
- Week 3 Monday — specificity and development
- Week 3 Tuesday — third-person -s + Editor's Toolkit
- Week 3 Wednesday — cumulative pre-writing retrieval
- Week 3 Thursday — full Cycle 1 retrieval challenge

## Suggested next expansion

Use the same architecture for Cycles 2–6. Keep the older-information principle: every new quiz should include a few items from previous weeks/cycles, not only yesterday's material.
