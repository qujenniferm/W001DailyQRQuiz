window.W001_QUIZZES = {
  course: {
    code: "W001",
    title: "Daily Review Quiz Hub",
    subtitle: "20 questions · recycle · retrieve",
    unit: "All units",
    theme: {
      ink: "#26313A",
      paper: "#F3F1EC",
      understand: "#4E7B76",
      try: "#B58A3C",
      develop: "#5B6F8C",
      reflect: "#7A6A8F"
    },
    plan: [
      {unit: 1, name: "Describe a Person", weeks: [2, 3]},
      {unit: 2, name: "Describe a Place", weeks: [4, 5]},
      {unit: 3, name: "Describe a Thing (product review)", weeks: [6]},
      {unit: "Typing 1", name: "Typing week and midterm", weeks: [7]},
      {unit: 4, name: "Opinion 1: agree / disagree", weeks: [8, 9]},
      {unit: 5, name: "Opinion 2: best and most important", weeks: [10, 11]},
      {unit: 6, name: "Opinion 3: ways that X can Y", weeks: [12, 13]},
      {unit: "Typing 2", name: "Typing week and review", weeks: [14]}
    ]
  },
  // The questions are loaded from the published Google Sheet (see config.js).
  // This list is only a fallback. The full bundled copy is in the file quiz-data-full.js.
  quizzes: []
};
