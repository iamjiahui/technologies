/* course-data.js — the whole course lives here.
   Edit by hand, or use the built-in editor (press Shift+E on the site) and hit
   "Export course-data.js", then commit the downloaded file over this one. */
window.COURSE_DATA = {
  /* Bump rev by 1 whenever you edit this file. Any browser holding older
     local edits then drops them and shows the published version. */
  rev: 5,
  code: "54045.",
  title: "Technologies",
  term: "Winter 2026/7",
  instructor: "Prof. Dr. Jia Hui Lee and Dr. Artemis Ignatidou",
  /* Date of the FIRST seminar (YYYY-MM-DD). With autoWeek on, the site works out
     which week it is every time the page loads — you never have to bump a number.
     Set autoWeek: false to freeze it on currentWeek instead. */
  startDate: "2026-10-19",
  autoWeek: true,
  currentWeek: 1,
  /* Shown on the Description page. Line breaks are kept. */
  description: `The seminar is an introduction to the field of Science and Technology Studies (STS). STS is dedicated to the social science analysis of the interplay between knowledge, technology and society. Technologies have not only made industrial society possible and shaped modernity, but are also closely linked to its excesses (e.g. environmental pollution, climate change, post-truth politics). Technologies also dominate and enrich our daily lives and social interactions.

This semester (Winter 2026/7), the course is co-taught by an anthropologist of technology and a cultural historian of sound. Across the semester, we will trace these dynamics as much through the history and performance of sound as through computers and laboratories. We will ask how algorithms compute and shape musical taste; how instruments, recordings, and performance — from Bach’s solo violin works to the Edison phonograph’s pursuit of sonic “fidelity” — mediate what counts as musical authenticity. We explore the overlooked work of women in electronic music while examining science and technology themselves as staged and performative, from Latour’s laboratory theater to the Margravial Opera House here in Bayreuth. Finally, we consider how mechanical (re)production — in manuscript, print, photography, and code — has reshaped aesthetic judgment, authorship, and authenticity, from medieval scribes and early modern printing to Walter Benjamin’s reflections on art in the age of mechanical reproduction.

Based on empirical case studies we will examine different theoretical and methodological approaches to the relationship between knowledge (science), technology and society. We will address the following questions, among others:

• How does science create knowledge? How can a social science analysis of knowledge (science) practices look like?
• How are design, dissemination, application, and appropriation of technologies interconnected?
• What kinds of societies and politics do certain scientific knowledge, technology and technical infrastructures enable?
• What specific questions and problems arise for an STS that focuses on the global South?

This seminar will be taught in English. Some texts are available in both German and English.`,
  discussion: {
    tool: "E-learning",
    url: "https://moodle.example.edu/mod/forum/view.php?id=419",
    note: "All threaded discussion happens on the E-learning site. One post + one reply per week, due Sunday 23:59."
  },
  /* Right-rail "Important dates" — add, remove or reorder freely.
     date: "Sep 11" or "11 Sep". Edit here or in the site editor (Shift+E). */
  importantDates: [
    { date: "19 Oct", title: "First Meeting of Course" },
    { date: "16 Nov", title: "Visit to Markgräfliches Opernhaus" },
    { date: "21 Dec", title: "Reading week — no seminar" },
    { date: "1 Feb", title: "Final Discussion" },
    { date: "30 Mar", title: "Manifesto and Long-Form Essay Due - with feedback" },
    { date: "30 Apr", title: "Manifesto and Long-Form Essay Due - without feedback" }
  ],
  quickLinks: [
    { label: "Syllabus (PDF)", url: "files/syllabus.pdf" },
    { label: "Office Hours Booking", url: "https://calendly.example.com/office-hours" },
    { label: "E-learning site", url: "https://docs.google.com/spreadsheets/d/SIGNUP" }
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
      /* extraReadings — optional, shown under "Additional readings". Same shape as readings. */
      extraReadings: [],
      materials: [{ name: "Week 1 slides", kind: "slides", url: "files/w01-slides.pdf" }],
      assignment: null
    },
    {
      n: 2, date: "Sep 8", title: "Machines That Predict People",
      prompt: "Prediction is not explanation. Where does that distinction bite hardest in social science?",
      presenters: [],
      readings: [
        { title: "Prediction Policy Problems", author: "Kleinberg et al. (2015)", url: "" },
        { title: "To Explain or to Predict?", author: "Shmueli (2010)", url: "" }
      ],
      extraReadings: [],
      materials: [{ name: "Week 2 slides", kind: "slides", url: "files/w02-slides.pdf" }],
      assignment: { title: "Op-Ed #1 — What Is This Thing?", due: "Sep 11", url: "files/oped1-brief.pdf", note: "Op-ed + AI Process Log — publish on The Observatory if you choose" }
    },
    {
      n: 3, date: "Sep 15", title: "Could It Be Conscious?",
      prompt: "The hard question from three angles: the case for taking it seriously, the reason we may never be able to settle it, and the classic account of why experience resists outside description.",
      presenters: [],
      readings: [
        { title: "Could a large language model be conscious?", author: "Chalmers (2023)", url: "https://arxiv.org/abs/2303.07103" },
        { title: "The Edge of Sentience — read Ch. 16, Large Language Models and the Gaming Problem", author: "Birch (2024)", url: "" },
        { title: "What is it like to be a bat?", author: "Nagel (1974)", url: "" }
      ],
      extraReadings: [],
      materials: [
        { name: "Week 3 slides", kind: "slides", url: "files/w03-slides.pdf" },
        { name: "Seminar handout — three angles", kind: "handout", url: "files/w03-handout.pdf" }
      ],
      assignment: { title: "Op-Ed #2 — The Future of Social Science Research", due: "Oct 30", url: "files/oped2-brief.pdf", note: "Op-ed + AI Process Log. AI-free checkpoint in seminar." }
    },
    {
      n: 4, date: "Sep 22", title: "Bias Is Not a Bug Report",
      prompt: "If a model reproduces a society's inequalities faithfully, is it broken?",
      presenters: [],
      readings: [
        { title: "Machine Bias", author: "Angwin et al. (2016)", url: "" },
        { title: "Fairness and Abstraction in Sociotechnical Systems", author: "Selbst et al. (2019)", url: "" }
      ],
      materials: [], assignment: null
    },
    {
      n: 5, date: "Sep 29", title: "Labour Behind the Curtain",
      prompt: "Who does the invisible work that makes automation look automatic?",
      presenters: [],
      readings: [{ title: "Ghost Work — Introduction & Ch. 1", author: "Gray & Suri (2019)", url: "" }],
      materials: [], assignment: null
    },
    {
      n: 6, date: "Oct 6", title: "Simulated Subjects",
      prompt: "Can a language model stand in for a survey respondent? Argue the strongest version of both answers.",
      presenters: [],
      readings: [{ title: "Out of One, Many: Using Language Models to Simulate Human Samples", author: "Argyle et al. (2023)", url: "" }],
      materials: [], assignment: { title: "Research design memo", due: "Oct 9", url: "", note: "2 pages, no AI assistance." }
    },
    {
      n: 7, date: "Oct 13", title: "Measurement in the Age of Text",
      prompt: "What becomes measurable that was not before, and what quietly stops being measured?",
      presenters: [],
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
      presenters: [],
      readings: [{ title: "The EU AI Act — Titles I\u2013III (skim)", author: "European Parliament (2024)", url: "" }],
      materials: [], assignment: { title: "Op-Ed #2 due", due: "Oct 30", url: "", note: "Submit on E-learning with your AI Process Log." }
    },
    {
      n: 10, date: "Nov 3", title: "Persuasion at Scale",
      prompt: "If persuasion becomes cheap and personalised, what happens to public argument?",
      presenters: [],
      readings: [{ title: "On the Conversational Persuasiveness of LLMs", author: "Salvi et al. (2024)", url: "" }],
      materials: [], assignment: null
    },
    {
      n: 11, date: "Nov 10", title: "Work, Skill and the Middle",
      prompt: "Which tasks are being hollowed out here, in this city, this year?",
      presenters: [],
      readings: [{ title: "Experimental Evidence on the Productivity Effects of Generative AI", author: "Noy & Zhang (2023)", url: "" }],
      materials: [], assignment: null
    },
    {
      n: 12, date: "Nov 17", title: "Field Methods with a Machine in the Room",
      prompt: "Bring one method from your own project and stress-test it.",
      presenters: [],
      readings: [], materials: [], assignment: { title: "Final project proposal", due: "Nov 20", url: "", note: "One page + reading list." }
    },
    {
      n: 13, date: "Nov 24", title: "Student Symposium I",
      prompt: "Six presentations, twelve minutes each, hard stop.",
      presenters: [],
      readings: [], materials: [], assignment: null
    },
    {
      n: 14, date: "Dec 1", title: "Student Symposium II & Close",
      prompt: "Remaining presentations, then what we would teach differently next year.",
      presenters: [],
      readings: [], materials: [],
      assignment: { title: "Final project", due: "Dec 12", url: "", note: "Paper or op-ed portfolio + process log." }
    }
  ]
};
