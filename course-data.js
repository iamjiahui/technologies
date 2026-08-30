/* course-data.js — the whole course lives here.
   Edit by hand, or use the built-in editor (press Shift+E on the site) and hit
   "Export course-data.js", then commit the downloaded file over this one. */
window.COURSE_DATA = {
  code: "54045.",
  title: "Technologies",
  term: "Winter 2026/7",
  instructor: "Jia Hui and Artemis",
  currentWeek: 3,
  discussion: {
    tool: "E-learning",
    url: "https://moodle.example.edu/mod/forum/view.php?id=419",
    note: "All threaded discussion happens on the E-learning site. One post + one reply per week, due Sunday 23:59."
  },
  /* Right-rail "Important dates" — add, remove or reorder freely.
     date: "Sep 11" or "11 Sep". Edit here or in the site editor (Shift+E). */
  importantDates: [
    { date: "Sep 11", title: "Op-Ed #1 — What Is This Thing?", note: "Op-ed + AI Process Log — publish on The Observatory if you choose" },
    { date: "Oct 9", title: "Research design memo", note: "2 pages, no AI assistance" },
    { date: "Oct 20", title: "Reading week — no seminar", note: "" },
    { date: "Oct 30", title: "Op-Ed #2 due", note: "Submit on E-learning with your AI Process Log" },
    { date: "Nov 20", title: "Final project proposal", note: "One page + reading list" },
    { date: "Dec 12", title: "Final project due", note: "Paper or op-ed portfolio + process log" }
  ],
  quickLinks: [
    { label: "Syllabus (PDF)", url: "files/syllabus.pdf" },
    { label: "Office Hours Booking", url: "https://calendly.example.com/office-hours" },
    { label: "Presentation Sign-Up", url: "https://docs.google.com/spreadsheets/d/SIGNUP" },
    { label: "E-learning Forum", url: "https://moodle.example.edu/mod/forum/view.php?id=419" },
    { label: "Op-Ed Papers Selection", url: "files/oped-papers.pdf" },
    { label: "Sample Final Project", url: "files/sample-final.pdf" }
  ],
  students: [
    "Aidana Yerkin", "Bagzhan Alimkhan", "Zhangir Zhangozhin", "Moldir Auyelkhan",
    "Zarema Nurbayeva", "Dilnaz Mukhtarkhanova", "Alisher Sagyndyk", "Kamila Zhaksybek",
    "Nurdaulet Serik", "Aigerim Bekova", "Timur Orazaly", "Saltanat Kairat",
    "Yerassyl Toleu", "Madina Abenova", "Dias Kuanysh", "Ainur Zhumagul",
    "Arman Dosbol", "Laura Seitkali", "Bekzat Amanzhol", "Gaukhar Rysbek"
  ],
  weeks: [
    {
      n: 1, date: "Sep 1", title: "What Counts as Intelligence?",
      prompt: "Before anything technical: what work is the word \u201cintelligence\u201d doing when we apply it to a machine, and who benefits from the ambiguity?",
      presenters: [],
      readings: [
        { title: "Computing Machinery and Intelligence", author: "Turing (1950)", url: "https://academic.oup.com/mind/article/LIX/236/433/986238" },
        { title: "Minds, Brains, and Programs", author: "Searle (1980)", url: "" }
      ],
      materials: [{ name: "Week 1 slides", kind: "slides", url: "files/w01-slides.pdf" }],
      assignment: null
    },
    {
      n: 2, date: "Sep 8", title: "Machines That Predict People",
      prompt: "Prediction is not explanation. Where does that distinction bite hardest in social science?",
      presenters: ["Aidana Yerkin", "Alisher Sagyndyk"],
      readings: [
        { title: "Prediction Policy Problems", author: "Kleinberg et al. (2015)", url: "" },
        { title: "To Explain or to Predict?", author: "Shmueli (2010)", url: "" }
      ],
      materials: [{ name: "Week 2 slides", kind: "slides", url: "files/w02-slides.pdf" }],
      assignment: { title: "Op-Ed #1 — What Is This Thing?", due: "Sep 11", url: "files/oped1-brief.pdf", note: "Op-ed + AI Process Log — publish on The Observatory if you choose" }
    },
    {
      n: 3, date: "Sep 15", title: "Could It Be Conscious?",
      prompt: "The hard question from three angles: the case for taking it seriously, the reason we may never be able to settle it, and the classic account of why experience resists outside description.",
      presenters: ["Aidana Yerkin", "Bagzhan Alimkhan", "Zhangir Zhangozhin", "Moldir Auyelkhan", "Zarema Nurbayeva", "Dilnaz Mukhtarkhanova"],
      readings: [
        { title: "Could a large language model be conscious?", author: "Chalmers (2023)", url: "https://arxiv.org/abs/2303.07103" },
        { title: "The Edge of Sentience — read Ch. 16, Large Language Models and the Gaming Problem", author: "Birch (2024)", url: "" },
        { title: "What is it like to be a bat?", author: "Nagel (1974)", url: "" }
      ],
      materials: [
        { name: "Week 3 slides", kind: "slides", url: "files/w03-slides.pdf" },
        { name: "Seminar handout — three angles", kind: "handout", url: "files/w03-handout.pdf" }
      ],
      assignment: { title: "Op-Ed #2 — The Future of Social Science Research", due: "Oct 30", url: "files/oped2-brief.pdf", note: "Op-ed + AI Process Log. AI-free checkpoint in seminar." }
    },
    {
      n: 4, date: "Sep 22", title: "Bias Is Not a Bug Report",
      prompt: "If a model reproduces a society's inequalities faithfully, is it broken?",
      presenters: ["Kamila Zhaksybek", "Nurdaulet Serik"],
      readings: [
        { title: "Machine Bias", author: "Angwin et al. (2016)", url: "" },
        { title: "Fairness and Abstraction in Sociotechnical Systems", author: "Selbst et al. (2019)", url: "" }
      ],
      materials: [], assignment: null
    },
    {
      n: 5, date: "Sep 29", title: "Labour Behind the Curtain",
      prompt: "Who does the invisible work that makes automation look automatic?",
      presenters: ["Aigerim Bekova", "Timur Orazaly"],
      readings: [{ title: "Ghost Work — Introduction & Ch. 1", author: "Gray & Suri (2019)", url: "" }],
      materials: [], assignment: null
    },
    {
      n: 6, date: "Oct 6", title: "Simulated Subjects",
      prompt: "Can a language model stand in for a survey respondent? Argue the strongest version of both answers.",
      presenters: ["Saltanat Kairat", "Yerassyl Toleu"],
      readings: [{ title: "Out of One, Many: Using Language Models to Simulate Human Samples", author: "Argyle et al. (2023)", url: "" }],
      materials: [], assignment: { title: "Research design memo", due: "Oct 9", url: "", note: "2 pages, no AI assistance." }
    },
    {
      n: 7, date: "Oct 13", title: "Measurement in the Age of Text",
      prompt: "What becomes measurable that was not before, and what quietly stops being measured?",
      presenters: ["Madina Abenova", "Dias Kuanysh"],
      readings: [{ title: "Text as Data", author: "Grimmer & Stewart (2013)", url: "" }],
      materials: [], assignment: null
    },
    {
      n: 8, date: "Oct 20", title: "Reading Week — no seminar",
      prompt: "", presenters: [], readings: [], materials: [], assignment: null, off: true
    },
    {
      n: 9, date: "Oct 27", title: "Governance Without Consensus",
      prompt: "Regulation is being written faster than the evidence base. What should a social scientist contribute?",
      presenters: ["Ainur Zhumagul", "Arman Dosbol"],
      readings: [{ title: "The EU AI Act — Titles I\u2013III (skim)", author: "European Parliament (2024)", url: "" }],
      materials: [], assignment: { title: "Op-Ed #2 due", due: "Oct 30", url: "", note: "Submit on E-learning with your AI Process Log." }
    },
    {
      n: 10, date: "Nov 3", title: "Persuasion at Scale",
      prompt: "If persuasion becomes cheap and personalised, what happens to public argument?",
      presenters: ["Laura Seitkali", "Bekzat Amanzhol"],
      readings: [{ title: "On the Conversational Persuasiveness of LLMs", author: "Salvi et al. (2024)", url: "" }],
      materials: [], assignment: null
    },
    {
      n: 11, date: "Nov 10", title: "Work, Skill and the Middle",
      prompt: "Which tasks are being hollowed out here, in this city, this year?",
      presenters: ["Gaukhar Rysbek", "Aidana Yerkin"],
      readings: [{ title: "Experimental Evidence on the Productivity Effects of Generative AI", author: "Noy & Zhang (2023)", url: "" }],
      materials: [], assignment: null
    },
    {
      n: 12, date: "Nov 17", title: "Field Methods with a Machine in the Room",
      prompt: "Bring one method from your own project and stress-test it.",
      presenters: ["Bagzhan Alimkhan", "Kamila Zhaksybek"],
      readings: [], materials: [], assignment: { title: "Final project proposal", due: "Nov 20", url: "", note: "One page + reading list." }
    },
    {
      n: 13, date: "Nov 24", title: "Student Symposium I",
      prompt: "Six presentations, twelve minutes each, hard stop.",
      presenters: ["Zhangir Zhangozhin", "Moldir Auyelkhan", "Zarema Nurbayeva"],
      readings: [], materials: [], assignment: null
    },
    {
      n: 14, date: "Dec 1", title: "Student Symposium II & Close",
      prompt: "Remaining presentations, then what we would teach differently next year.",
      presenters: ["Dilnaz Mukhtarkhanova", "Alisher Sagyndyk", "Nurdaulet Serik"],
      readings: [], materials: [],
      assignment: { title: "Final project", due: "Dec 12", url: "", note: "Paper or op-ed portfolio + process log." }
    }
  ],
  /* Submission tracker: "student name": { "assignment title": "in" | "graded" | "late" } */
  tracker: {
    "Aidana Yerkin": { "Op-Ed #1 — What Is This Thing?": "graded" },
    "Bagzhan Alimkhan": { "Op-Ed #1 — What Is This Thing?": "graded" },
    "Zhangir Zhangozhin": { "Op-Ed #1 — What Is This Thing?": "in" },
    "Moldir Auyelkhan": { "Op-Ed #1 — What Is This Thing?": "late" },
    "Zarema Nurbayeva": { "Op-Ed #1 — What Is This Thing?": "graded" },
    "Dilnaz Mukhtarkhanova": { "Op-Ed #1 — What Is This Thing?": "in" }
  }
};
