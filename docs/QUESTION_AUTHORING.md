# Adding and editing quizzes

All quiz content lives in `js/quiz-data.js`. The site is intentionally static: no database, login, or build step is required.

## Quiz object

Each quiz needs a unique `id`, week, day, meeting number, phase, title, review-focus line, and a `questions` array. Keep each daily quiz at 10 questions.

```js
{
  id: "c2-w4-sun",
  week: 4,
  day: "Sunday",
  meeting: 11,
  phase: "UNDERSTAND",
  title: "Place Description Warm-up",
  reviews: "Cycle 2 + older Cycle 1 retrieval",
  questions: [ /* exactly 10 */ ]
}
```

## Supported question types

### Multiple choice
```js
{type:"mcq", prompt:"...", options:["A","B","C","D"], answer:2,
 explanation:"Why C is correct."}
```

### Locate the error
Uses the same engine as multiple choice, but the prompt asks students to identify the faulty chunk.
```js
{type:"error", prompt:"Locate the error: ...", options:["chunk 1","chunk 2","chunk 3","chunk 4"], answer:1,
 explanation:"..."}
```

### Gap fill with typing
Accepted answers are case-insensitive and ignore final punctuation.
```js
{type:"gap", prompt:"She ___ every day. (study)", answers:["studies"], displayAnswer:"studies",
 explanation:"..."}
```

### Reorder / drag-and-drop
Students can drag on computers or use ↑/↓ buttons on phones.
```js
{type:"reorder", prompt:"Put the parts in order.",
 items:["B","D","A","C"], answer:["A","B","C","D"], explanation:"..."}
```

### Sort into categories
Students can drag or tap a card and then tap its category.
```js
{type:"sort", prompt:"Sort the statements.", categories:["FACT","GUESS"],
 items:[{text:"She has a bag.",category:"FACT"},{text:"She seems busy.",category:"GUESS"}],
 explanation:"..."}
```

## Recommended daily mix

A good 10-item entry quiz is usually:

- 3–4 items from the most recent meeting
- 3–4 items from earlier in the current cycle
- 2–3 deliberately old retrieval items
- 3–5 question formats, not ten near-identical MCQs

Avoid trick questions. Keep the English at A1–A2; the cognitive work should be retrieval, noticing, categorizing, sequencing, and editing rather than decoding a difficult stem.
