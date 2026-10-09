window.W001_QUIZZES = {
  course: {
    code: "W001",
    title: "Daily Review Quiz Hub",
    subtitle: "10-minute review · recycle · retrieve",
    cycle: "Cycle 1 · Describe a Person",
    theme: {
      ink: "#26313A",
      paper: "#F3F1EC",
      understand: "#4E7B76",
      try: "#B58A3C",
      develop: "#5B6F8C",
      reflect: "#7A6A8F"
    }
  },
  quizzes: [
    {
      id: "c1-w2-sun",
      week: 2,
      day: "Sunday",
      meeting: 1,
      phase: "UNDERSTAND",
      title: "Welcome Back",
      reviews: "Week 1: email parts, polite requests, and time expressions",
      questions: [
        {type:"mcq", prompt:"Which is the best subject line for an email to your teacher?", options:["Hello","Question about Tuesday's class","Teacher","Important!!!"], answer:1, explanation:"A useful subject line tells the reader what the message is about."},
        {type:"mcq", prompt:"Choose the most polite request.", options:["Send me the file.","Can you send file?","Could you please send me the file?","You send me the file please."], answer:2, explanation:"Could you please…? is a clear, polite request."},
        {type:"gap", prompt:"Complete the request: “_____ I meet you after class, please?”", answers:["may","could","can"], displayAnswer:"May / Could / Can", explanation:"A modal comes before the subject in this question."},
        {type:"mcq", prompt:"Choose the correct time expression: ___ Sunday", options:["at","on","in","to"], answer:1, explanation:"Use on with days."},
        {type:"mcq", prompt:"Choose the correct time expression: ___ 3:00", options:["at","on","in","from"], answer:0, explanation:"Use at with clock times."},
        {type:"mcq", prompt:"Choose the correct time expression: ___ March", options:["at","on","in","for"], answer:2, explanation:"Use in with months."},
        {type:"error", prompt:"Locate the error: “Could you to explain the homework?”", options:["Could","you","to explain","the homework"], answer:2, explanation:"After a modal, use the base verb: Could you explain…?"},
        {type:"reorder", prompt:"Put the email parts in a sensible order.", items:["Thank you, Aisha","Dear Ms. Noor,","Could you please tell me the homework?","Subject: Homework question"], answer:["Subject: Homework question","Dear Ms. Noor,","Could you please tell me the homework?","Thank you, Aisha"], explanation:"Subject → greeting → message/request → closing."},
        {type:"mcq", prompt:"Which sentence is complete?", options:["Because I was absent.","I was absent yesterday.","Need the homework.","Could please help?"], answer:1, explanation:"A complete sentence needs a subject and a verb and expresses a complete idea."},
        {type:"mcq", prompt:"Which closing fits a short student email best?", options:["Bye forever","Thanks for your help,","Whatever","Send it now"], answer:1, explanation:"A polite closing matches the purpose and relationship."}
      ]
    },
    {
      id: "c1-w2-mon",
      week: 2,
      day: "Monday",
      meeting: 2,
      phase: "UNDERSTAND",
      title: "Facts, Guesses, Reasons",
      reviews: "M1 + two Week 1 retrieval items",
      questions: [
        {type:"mcq", prompt:"You see a woman holding a camera. Which sentence is a FACT?", options:["She likes travel.","She is a photographer.","She has a camera.","She is on holiday."], answer:2, explanation:"A fact is something you can directly see in the picture."},
        {type:"mcq", prompt:"Which sentence is a GUESS?", options:["He has a bicycle.","He is wearing a blue top.","He seems active.","He has short hair."], answer:2, explanation:"Seems active is an inference, not something directly visible."},
        {type:"mcq", prompt:"Which guess has the strongest reason?", options:["She looks like a student because she is nice.","She looks like a student because she has books and a notebook.","She is a student because I think so.","She student because books."], answer:1, explanation:"The reason uses visible evidence from the picture."},
        {type:"gap", prompt:"Complete: “He seems friendly _____ he is smiling.”", answers:["because"], displayAnswer:"because", explanation:"Because introduces the reason."},
        {type:"sort", prompt:"Sort each statement as FACT or GUESS.", categories:["FACT","GUESS"], items:[{text:"She has curly hair.",category:"FACT"},{text:"She may like photography.",category:"GUESS"},{text:"He is wearing running shoes.",category:"FACT"},{text:"He seems relaxed.",category:"GUESS"}], explanation:"Facts are visible; guesses need interpretation."},
        {type:"mcq", prompt:"Which detail best helps a reader identify a person from four photos?", options:["She is nice.","She has a red backpack and curly hair.","She is a person.","She is outside."], answer:1, explanation:"Specific visible details help the reader distinguish one photo from another."},
        {type:"error", prompt:"Locate the weak part: “She looks like a tourist because she is good.”", options:["She","looks like a tourist","because","she is good"], answer:3, explanation:"The reason is vague and does not give visible evidence."},
        {type:"mcq", prompt:"Which word makes this a weaker guess? “She ___ like photography because she has a camera.”", options:["is","may","has","wears"], answer:1, explanation:"May signals uncertainty."},
        {type:"mcq", prompt:"Week 1 recycle: Which request is correct?", options:["Could you to help me?","Could you help me?","Could you helped me?","Could you helps me?"], answer:1, explanation:"Modal + base verb: could help."},
        {type:"mcq", prompt:"Week 1 recycle: Choose the correct phrase.", options:["in Monday","on Monday","at Monday","Monday in"], answer:1, explanation:"Use on with days."}
      ]
    },
    {
      id: "c1-w2-tue",
      week: 2,
      day: "Tuesday",
      meeting: 3,
      phase: "UNDERSTAND",
      title: "Paragraph Architecture",
      reviews: "M1–M3 + earlier retrieval",
      questions: [
        {type:"mcq", prompt:"What is the job of a topic sentence?", options:["Add one tiny detail","Introduce the person and the main idea","Repeat the last sentence","Give only a reason"], answer:1, explanation:"The topic sentence introduces the person and overall focus."},
        {type:"mcq", prompt:"Which sentence works best as a concluding sentence?", options:["She has a black bag.","Her hair is curly.","Overall, Aisha looks like a friendly, hard-working student.","She is wearing shoes."], answer:2, explanation:"A conclusion gives the overall impression and closes the paragraph."},
        {type:"reorder", prompt:"Put the five paragraph parts in the course order.", items:["Daily life","Ending","What I see","Topic sentence","What I think and why"], answer:["Topic sentence","What I see","What I think and why","Daily life","Ending"], explanation:"This is the five-part planning skeleton used in Cycle 1."},
        {type:"mcq", prompt:"Which is an OUTLINE NOTE, not a full sentence?", options:["She is wearing a black abaya.","black abaya; books; friendly","She seems friendly because she is smiling.","Overall, she looks hard-working."], answer:1, explanation:"Outline notes are short words or phrases, not finished sentences."},
        {type:"mcq", prompt:"Which sentence belongs in “What I think and why”?", options:["She has brown eyes.","She is wearing a black shayla.","She seems busy because there are many books on her desk.","Aisha is a young woman."], answer:2, explanation:"It gives an inference and supporting evidence."},
        {type:"mcq", prompt:"Which sentence is OFF TOPIC in a paragraph describing Omar?", options:["Omar has a short beard.","He is wearing sports clothes.","My favorite food is pizza.","He looks active because he has a bicycle."], answer:2, explanation:"Every sentence should help describe Omar."},
        {type:"sort", prompt:"Sort the items as FACT or GUESS.", categories:["FACT","GUESS"], items:[{text:"She has a notebook.",category:"FACT"},{text:"She seems hard-working.",category:"GUESS"},{text:"He has a beard.",category:"FACT"},{text:"He may enjoy exercise.",category:"GUESS"}], explanation:"Keep observation and inference separate."},
        {type:"gap", prompt:"Complete: “She seems cheerful _____ she is smiling.”", answers:["because"], displayAnswer:"because", explanation:"A supported guess needs a reason."},
        {type:"mcq", prompt:"Older recycle: Which request is correctly formed?", options:["May I ask a question?","May I to ask a question?","May I asking a question?","May I asks a question?"], answer:0, explanation:"Modal + subject + base verb."},
        {type:"error", prompt:"Locate the error: “He seems friendly because he a big smile.”", options:["He seems","friendly","because","he a big smile"], answer:3, explanation:"The reason needs a verb: because he has a big smile."}
      ]
    },
    {
      id: "c1-w2-wed",
      week: 2,
      day: "Wednesday",
      meeting: 4,
      phase: "TRY",
      title: "Build the Description",
      reviews: "M4 + paragraph structure + earlier spiral",
      questions: [
        {type:"mcq", prompt:"Choose the best verb: “She ___ brown eyes.”", options:["is","has","is wearing","seems"], answer:1, explanation:"Use has for eyes, hair, and things a person has."},
        {type:"mcq", prompt:"Choose the best phrase: “He ___ a blue sports top.”", options:["has age","is wearing","looks like","seems"], answer:1, explanation:"Use is wearing for clothes."},
        {type:"mcq", prompt:"Choose the correct sentence.", options:["She has a bag green.","She has green a bag.","She has a green bag.","She a green has bag."], answer:2, explanation:"The adjective comes before the noun."},
        {type:"mcq", prompt:"Choose the correct article.", options:["a abaya","an abaya","an blue abaya","a orange bag"], answer:1, explanation:"Use an before a vowel sound."},
        {type:"sort", prompt:"Sort the sentence by its key pattern.", categories:["IS","HAS","IS WEARING","GUESS"], items:[{text:"She is young.",category:"IS"},{text:"He has a short beard.",category:"HAS"},{text:"She is wearing a black shayla.",category:"IS WEARING"},{text:"He seems friendly.",category:"GUESS"}], explanation:"These are the core M4 description patterns."},
        {type:"error", prompt:"Locate the error: “He looks like happy.”", options:["He","looks like","happy","."], answer:1, explanation:"Use looks + adjective (looks happy) or looks like + noun (looks like a teacher)."},
        {type:"gap", prompt:"Complete: “She _____ wearing a black abaya.”", answers:["is"], displayAnswer:"is", explanation:"Be is required before wearing."},
        {type:"mcq", prompt:"Paragraph recycle: Which part normally comes first?", options:["Ending","Topic sentence","Daily life","Reason"], answer:1, explanation:"The paragraph begins with a topic sentence."},
        {type:"mcq", prompt:"Fact/guess recycle: Which is a guess?", options:["He has glasses.","He is wearing a white thobe.","He seems serious.","He has a watch."], answer:2, explanation:"Serious is an inference from visual evidence."},
        {type:"mcq", prompt:"Week 1 recycle: Choose the correct phrase.", options:["at March","on March","in March","March at"], answer:2, explanation:"Use in with months."}
      ]
    },
    {
      id: "c1-w2-thu",
      week: 2,
      day: "Thursday",
      meeting: 5,
      phase: "TRY",
      title: "Check and Repair",
      reviews: "M5–M6 + M4 language + paragraph skeleton",
      questions: [
        {type:"mcq", prompt:"In the Cycle 1 check routine, what do you underline?", options:["Every adjective","The topic sentence","Every noun","The word count"], answer:1, explanation:"Students underline the topic sentence."},
        {type:"mcq", prompt:"What do you circle during the check?", options:["Three adjectives","Every subject","The ending only","All punctuation"], answer:0, explanation:"Circle three adjectives."},
        {type:"mcq", prompt:"What do you box during the check?", options:["Forms of be","All nouns","Reasons","Names"], answer:0, explanation:"Box each form of be to notice missing be."},
        {type:"mcq", prompt:"What do you star?", options:["Your shortest sentence","Your best guess with because","Every capital letter","Your word count"], answer:1, explanation:"Star the best supported guess."},
        {type:"error", prompt:"Locate the error: “My sister very friendly.”", options:["My sister","very","friendly","missing is"], answer:3, explanation:"Correct: My sister is very friendly."},
        {type:"mcq", prompt:"Choose the correct repair: “He have a short beard.”", options:["He is a short beard.","He has a short beard.","He having a short beard.","He have short a beard."], answer:1, explanation:"With he/she/it, have changes to has."},
        {type:"mcq", prompt:"Choose the correct repair: “She has a shayla white.”", options:["She has white a shayla.","She has a white shayla.","She is white shayla.","She has shayla a white."], answer:1, explanation:"Adjective before noun: a white shayla."},
        {type:"gap", prompt:"Complete: “He _____ wearing a white thobe.”", answers:["is"], displayAnswer:"is", explanation:"The sentence needs be before wearing."},
        {type:"mcq", prompt:"Older recycle: Which outline item belongs under “What I think and why”?", options:["black bag","friendly — smiling","young woman","Overall…"], answer:1, explanation:"It combines an inference with evidence."},
        {type:"mcq", prompt:"Older recycle: Which sentence is a fact?", options:["She seems shy.","She may like reading.","She has glasses.","She looks like a teacher."], answer:2, explanation:"Glasses are directly visible."}
      ]
    },
    {
      id: "c1-w3-sun",
      week: 3,
      day: "Sunday",
      meeting: 6,
      phase: "DEVELOP",
      title: "Spiral Review",
      reviews: "Week 2 cumulative review before M8",
      questions: [
        {type:"mcq", prompt:"Which detail is more specific?", options:["She has things.","She has a blue notebook and a silver laptop.","She is nice.","She is there."], answer:1, explanation:"Specific details help the reader picture the person."},
        {type:"mcq", prompt:"Which sentence develops an idea with evidence?", options:["He is active.","He is active because he has a bicycle and is wearing running shoes.","He active bicycle.","Active."], answer:1, explanation:"The reason explains why the writer makes the claim."},
        {type:"mcq", prompt:"Choose the correct sentence.", options:["She is a friendly woman.","She is a woman friendly.","She friendly is woman.","She has friendly woman."], answer:0, explanation:"Adjective before noun: a friendly woman."},
        {type:"error", prompt:"Locate the error: “She wearing a black abaya.”", options:["She","wearing","a black abaya","missing is"], answer:3, explanation:"Correct: She is wearing a black abaya."},
        {type:"mcq", prompt:"Which sentence is a supported guess?", options:["He is wearing glasses.","He seems careful because he is checking a plan.","He has dark hair.","He is tall."], answer:1, explanation:"A guess is supported by visible evidence."},
        {type:"reorder", prompt:"Put the paragraph plan in order.", items:["Ending","Daily life","Topic sentence","What I think and why","What I see"], answer:["Topic sentence","What I see","What I think and why","Daily life","Ending"], explanation:"The same skeleton returns throughout Cycle 1."},
        {type:"mcq", prompt:"Choose the best repair: “He have brown eyes.”", options:["He has brown eyes.","He is brown eyes.","He have eyes brown.","He having brown eyes."], answer:0, explanation:"He → has."},
        {type:"sort", prompt:"Sort as FACT or GUESS.", categories:["FACT","GUESS"], items:[{text:"She has a pen.",category:"FACT"},{text:"She seems busy.",category:"GUESS"},{text:"He is wearing a jacket.",category:"FACT"},{text:"He may work outside.",category:"GUESS"}], explanation:"Direct observation versus inference."},
        {type:"mcq", prompt:"Which check helps you notice a missing be?", options:["Count commas","Box every form of be","Circle nouns","Underline colors"], answer:1, explanation:"Box forms of be, then check whether one is missing where needed."},
        {type:"mcq", prompt:"Very old recycle: Which polite request is correct?", options:["Could you explain this?","Could you to explain this?","Could you explains this?","Could explain you this?"], answer:0, explanation:"Modal + subject + base verb."}
      ]
    },
    {
      id: "c1-w3-mon",
      week: 3,
      day: "Monday",
      meeting: 7,
      phase: "DEVELOP",
      title: "Make It More Specific",
      reviews: "M8: developed sentences, vague words, evidence + older spiral",
      questions: [
        {type:"mcq", prompt:"Which sentence is less vague?", options:["She is nice.","She is helpful because she is showing another student the page.","She is good.","She has stuff."], answer:1, explanation:"Specific language plus evidence develops the idea."},
        {type:"mcq", prompt:"Which word is vague in “He has nice things on his desk”?", options:["He","has","nice things","desk"], answer:2, explanation:"Nice things does not tell the reader what the objects are."},
        {type:"mcq", prompt:"Choose the best revision: “She is busy.”", options:["She is very very busy.","She seems busy because she has a laptop, notes, and two open books.","Busy she.","She busy because."], answer:1, explanation:"It adds observable support rather than only intensifying the adjective."},
        {type:"gap", prompt:"Complete: “He _____ serious because he is looking carefully at the plan.”", answers:["seems","looks"], displayAnswer:"seems / looks", explanation:"Seems or looks can introduce a supported personality inference."},
        {type:"mcq", prompt:"Choose the stronger detail.", options:["She has a bag.","She has a large green bag on the chair.","Bag.","She has something."], answer:1, explanation:"Specific details make the description clearer."},
        {type:"error", prompt:"Locate the problem: “He is friendly because friendly.”", options:["He","is friendly","because friendly","."], answer:2, explanation:"The reason should give evidence, e.g. because he is smiling."},
        {type:"mcq", prompt:"Older recycle: Which sentence uses adjective order correctly?", options:["a shirt blue","a blue shirt","blue a shirt","a shirt of blue"], answer:1, explanation:"Adjective + noun."},
        {type:"mcq", prompt:"Older recycle: Which sentence is a guess?", options:["She has a laptop.","She is sitting at a desk.","She seems focused.","She has a blue pen."], answer:2, explanation:"Focused is inferred."},
        {type:"mcq", prompt:"Older recycle: What is the last paragraph part?", options:["What I see","Topic sentence","Ending","Daily life"], answer:2, explanation:"The ending closes the paragraph with an overall impression."},
        {type:"mcq", prompt:"Very old recycle: Choose the correct time phrase.", options:["on 3:00","at 3:00","in 3:00","to 3:00"], answer:1, explanation:"Use at with clock times."}
      ]
    },
    {
      id: "c1-w3-tue",
      week: 3,
      day: "Tuesday",
      meeting: 8,
      phase: "DEVELOP",
      title: "Third-Person + Editor's Toolkit",
      reviews: "M9–M10 + spiral retrieval",
      questions: [
        {type:"mcq", prompt:"Choose the correct verb: “The engineer ___ at a building site.”", options:["work","works","working","to work"], answer:1, explanation:"With he/she/it in the present simple, add -s."},
        {type:"gap", prompt:"Complete: “Aisha _____ at her desk every evening. (study)”", answers:["studies"], displayAnswer:"studies", explanation:"Consonant + y changes to -ies."},
        {type:"mcq", prompt:"Choose the correct verb: “The teacher ___ English.”", options:["teach","teachs","teaches","teaching"], answer:2, explanation:"Teach takes -es in the third person."},
        {type:"mcq", prompt:"Choose the correct verb: “He ___ to the souq in the morning.”", options:["go","gos","goes","going"], answer:2, explanation:"Go → goes."},
        {type:"mcq", prompt:"Choose the correct verb: “She ___ coffee at the café.”", options:["have","has","haves","having"], answer:1, explanation:"Have is irregular: she has."},
        {type:"error", prompt:"Locate the error: “She work in a hospital.”", options:["She","work","in","a hospital"], answer:1, explanation:"Third-person singular: She works…"},
        {type:"mcq", prompt:"Which sentence passes the Editor's Toolkit check?", options:["My brother very kind.","She have a laptop.","He works in a shop.","Is a student."], answer:2, explanation:"It has a subject, correct verb form, and a complete sentence."},
        {type:"mcq", prompt:"Choose the best repair: “Is very hot in the picture.”", options:["It is very hot in the picture.","Is it very hot picture.","Very hot in picture.","The very hot."], answer:0, explanation:"The sentence needs a subject: it."},
        {type:"mcq", prompt:"Older recycle: Which is more developed?", options:["He is active.","He seems active because he has a bicycle and running shoes.","Active man.","He nice."], answer:1, explanation:"It gives specific evidence."},
        {type:"mcq", prompt:"Older recycle: Choose the correct phrase.", options:["an blue bag","a orange bag","an orange bag","orange an bag"], answer:2, explanation:"Use an before a vowel sound; adjective comes before noun."}
      ]
    },
    {
      id: "c1-w3-wed",
      week: 3,
      day: "Wednesday",
      meeting: 9,
      phase: "SHOW & REFLECT",
      title: "Ready to Write",
      reviews: "Cumulative Cycle 1 retrieval before end-of-cycle writing",
      questions: [
        {type:"mcq", prompt:"Which topic sentence gives a useful overall idea?", options:["Aisha.","Aisha is a young woman who looks like a friendly, hard-working student.","She has a pen.","There are books."], answer:1, explanation:"It introduces the person and gives the reader an overall impression."},
        {type:"mcq", prompt:"Which sentence gives a fact?", options:["He may enjoy sport.","He seems relaxed.","He has a bicycle.","He looks like a coach."], answer:2, explanation:"A bicycle is directly visible."},
        {type:"mcq", prompt:"Which sentence gives a supported guess?", options:["She has books.","She seems hard-working because she has several books open and is taking notes.","She is wearing black.","She has a laptop."], answer:1, explanation:"It connects an inference to evidence."},
        {type:"mcq", prompt:"Choose the correct sentence.", options:["He has a beard short.","He has a short beard.","He a short beard has.","He is short beard."], answer:1, explanation:"Adjective before noun."},
        {type:"mcq", prompt:"Choose the correct present-simple form: “She ___ photography.”", options:["like","likes","liking","is like"], answer:1, explanation:"She → likes."},
        {type:"error", prompt:"Locate the error: “My friend she works at a shop.”", options:["My friend","she","works","at a shop"], answer:1, explanation:"Avoid a double subject: My friend works…"},
        {type:"reorder", prompt:"Put the writing process for today's task in order.", items:["Write the paragraph","Choose / study the picture","Make short notes under the five headings","Check and make a real edit"], answer:["Choose / study the picture","Make short notes under the five headings","Write the paragraph","Check and make a real edit"], explanation:"Plan before drafting, then check after writing."},
        {type:"mcq", prompt:"Which sentence is irrelevant in a person profile?", options:["She studies engineering.","She seems careful because she is checking her notes.","Qatar has many shopping malls.","She is wearing a black abaya."], answer:2, explanation:"It does not describe the person."},
        {type:"mcq", prompt:"Older recycle: What should you box when checking?", options:["Forms of be","Every adjective","The topic only","Every noun"], answer:0, explanation:"Box forms of be."},
        {type:"mcq", prompt:"Very old recycle: Choose the best polite request.", options:["Could you please explain this?","Explain this now.","You explain this.","Could you to explain this?"], answer:0, explanation:"Polite modal request + base verb."}
      ]
    },
    {
      id: "c1-w3-thu",
      week: 3,
      day: "Thursday",
      meeting: 10,
      phase: "SHOW & REFLECT",
      title: "Cycle 1 Retrieval Challenge",
      reviews: "Full Cycle 1 spiral before CAPP / transfer",
      questions: [
        {type:"sort", prompt:"Sort each item into FACT or GUESS.", categories:["FACT","GUESS"], items:[{text:"She has curly hair.",category:"FACT"},{text:"She may enjoy travel.",category:"GUESS"},{text:"He is wearing glasses.",category:"FACT"},{text:"He seems confident.",category:"GUESS"}], explanation:"Facts are visible; guesses are interpretations."},
        {type:"mcq", prompt:"Which ending is strongest?", options:["She has a bag.","Overall, Mariam looks like a friendly student who works hard.","Blue shirt.","Because she studies."], answer:1, explanation:"A conclusion gives the overall impression and closes the paragraph."},
        {type:"mcq", prompt:"Choose the correct sentence.", options:["She has an orange bag.","She has a orange bag.","She has orange a bag.","She an orange bag has."], answer:0, explanation:"An before vowel sound; adjective before noun."},
        {type:"gap", prompt:"Complete: “He _____ every morning before work. (exercise)”", answers:["exercises"], displayAnswer:"exercises", explanation:"Third-person singular: exercise → exercises."},
        {type:"error", prompt:"Locate the error: “She seems busy because she have many books.”", options:["She seems","busy","because","she have many books"], answer:3, explanation:"She has many books."},
        {type:"mcq", prompt:"Which revision adds useful development?", options:["He is nice. He is very nice.","He seems helpful because he is showing another person how to use the computer.","He nice helpful.","Helpful."], answer:1, explanation:"Specific evidence makes the inference meaningful."},
        {type:"mcq", prompt:"Which item belongs in an outline?", options:["She is wearing a blue shirt and black trousers.","blue shirt; black trousers","Overall, she looks friendly.","She seems busy because she has many books."], answer:1, explanation:"Outline notes are short, not full sentences."},
        {type:"mcq", prompt:"Which repair fixes a missing subject?", options:["Is a friendly student. → She is a friendly student.","She friendly. → She friendly is.","He work. → He working.","Has books. → Has she books."], answer:0, explanation:"Add a clear subject and keep the complete sentence."},
        {type:"mcq", prompt:"Which is the best self-editing question?", options:["Did I make it longer than everyone else's?","Does every sentence have a subject and a verb?","Did I use difficult words?","Did I copy the model exactly?"], answer:1, explanation:"The Editor's Toolkit focuses on sentence completeness and recurring accuracy targets."},
        {type:"mcq", prompt:"One last old friend: Which sentence is a correct polite request?", options:["May I ask you a question?","May I to ask you a question?","May I asks you a question?","May ask I you a question?"], answer:0, explanation:"Modal + subject + base verb."}
      ]
    }
  ]
};
