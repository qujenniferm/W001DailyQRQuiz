# W001 Teacher's Hub

Static quiz hub for GitHub Pages. 65 daily Review quizzes (Weeks 2 to 14, Sunday to Thursday), 20 questions each. The questions come from the published "Hub bank" Google Sheet.

## Files
- `index.html` teacher page: pick the day, make a session QR code, preview the quiz, open the answer key.
- `quiz.html` student page (opens from the QR code).
- `key.html` printable teacher answer key for one day.
- `css/styles.css` the look.
- `js/config.js` the link to the published sheet. Change the link here if you ever republish.
- `js/loader.js` reads the sheet. `js/quiz.js`, `js/teacher.js`, `js/key.js` are the pages' code.
- `js/quiz-data.js` the course plan (units and weeks). The questions themselves are in the sheet.

## Put it on GitHub Pages
1. In your repository choose Add file, then Upload files.
2. Drag in `index.html`, `quiz.html`, `key.html`, `README.md`, and the two folders `css` and `js`. Keep the folder names exactly as they are.
3. Commit the changes.
4. Settings, Pages, deploy from branch `main` and `/ (root)`.
5. Open the Pages address. A "Live data" note on the teacher page means the sheet loaded.

## Edit questions
Edit the `W001_Hub_bank` sheet. Changes appear in the Hub a few minutes after you edit, because Google refreshes the published copy on its own schedule.
- Multiple choice and find-the-error: options in columns a to d, answer is the letter A to D.
- Click-to-identify: type the answer numbers with semicolons, for example `2; 4; 6`. Google Sheets turns `5, 6, 7` into a date unless the cell is plain text.
- Rows that are incomplete are skipped, and the teacher page lists them.

## Privacy
No student data is stored or sent anywhere. Answers stay in the student's browser. A published sheet can be read by anyone with the link, so keep secure Weekly Writing material out of it.
