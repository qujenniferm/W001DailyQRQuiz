# W001 Daily Review Quiz Hub

A zero-build, static quiz hub designed for GitHub Pages. It contains **20 daily entry quizzes × 10 questions (Unit 1 and Unit 2)** and shows a slot for every meeting of the 13 teaching weeks (Weeks 2-14), so the full W001 course fits in one hub. Slots without a quiz show as “Coming soon”.

## What teachers do

1. Open `index.html` on the published GitHub Pages site.
2. Pick the unit and week, then find today's quiz by day.
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

The CSS uses the W001 deck palette taken from the W001 deck theme:

- ink `#26313A`
- warm paper `#F3F1EC`
- UNDERSTAND teal `#4E7B76`
- TRY gold `#B58A3C`
- DEVELOP blue `#5B6F8C`
- WRITE & REFLECT violet `#7A6A8F`

## Edit or add quizzes

See `docs/QUESTION_AUTHORING.md`. All content is in `js/quiz-data.js`; there is no framework or build process.

## Course map

| Unit | Weeks | Genre | Quizzes |
| --- | --- | --- | --- |
| Unit 1 | 2-3 | Describe a person | 10 written |
| Unit 2 | 4-5 | Describe a place | 10 written |
| Unit 3 | 6 | Describe a thing (product review) | to write |
| Typing week | 7 | Typed piece, midterm | to write |
| Unit 4 | 8-9 | Opinion 1: agree / disagree | to write |
| Unit 5 | 10-11 | Opinion 2: best and most important | to write |
| Unit 6 | 12-13 | Opinion 3: ways that X can Y | to write |
| Typing week | 14 | Typed piece, review | to write |

The course map lives in `course.plan` in `js/quiz-data.js`. Meeting numbers run from Week 2 Sunday = 1.

## Adding quizzes for the next units

Use the same architecture. Keep the older-information principle: every new quiz should include a few items from previous weeks and units, not only yesterday's material. Add the quiz to `quizzes` with `unit` set (see `docs/QUESTION_AUTHORING.md`); the hub shows it automatically in place of its “Coming soon” slot.
