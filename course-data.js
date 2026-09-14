/* course-data.js — the whole course lives here.
   Edit by hand, or use the built-in editor (press Shift+E on the site) and hit
   "Export course-data.js", then commit the downloaded file over this one. */
window.COURSE_DATA = {
  /* Bump rev by 1 whenever you edit this file. Any browser holding older
     local edits then drops them and shows the published version. */
  rev: 13,
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
  description: `Mondays, 14–16h · Venue: S6 (GWII)

The seminar is an introduction to the field of Science and Technology Studies (STS). STS is dedicated to the social science analysis of the interplay between knowledge, technology and society. Technologies have not only made industrial society possible and shaped modernity, but are also closely linked to its excesses (e.g. environmental pollution, climate change, post-truth politics). Technologies also dominate and enrich our daily lives and social interactions.

This semester (Winter 2026/7), the course is co-taught by an anthropologist of technology and a cultural historian of sound. Across the semester, we will trace the dynamics between technology, society, and sound as much through the history and performance of sound as through computers and laboratories. We will ask how algorithms compute and shape musical taste; how instruments, recordings, and performance — from Bach’s solo violin works to the Edison phonograph’s pursuit of sonic “fidelity” — mediate what counts as musical authenticity. We explore the overlooked work of women in electronic music while examining science and technology themselves as staged and performative, from Latour’s laboratory theater to the Margravial Opera House here in Bayreuth. Finally, we consider how mechanical (re)production — in manuscript, print, photography, and code — has reshaped aesthetic judgment, authorship, and authenticity, from medieval scribes and early modern printing to Walter Benjamin’s reflections on art in the age of mechanical reproduction.

Based on empirical case studies we will examine different theoretical and methodological approaches to the relationship between knowledge (science), technology and society. We will address the following questions, among others:

• How does science create knowledge? How can a social science analysis of knowledge (science) practices look like?
• How are design, dissemination, application, and appropriation of technologies interconnected?
• What kinds of societies and politics do certain scientific knowledge, technology and technical infrastructures enable?
• What specific questions and problems arise for an STS that focuses on the global South?

This seminar will be taught in English. Some texts are available in both German and English.`,
  /* Assignments — free text shown on the Start page. Line breaks are kept. */
  assignments: `Exam (Hausarbeit)

As a textual form, manifestos have a long history of intervening in debates about technology and society — from technical communities issuing statements of principle, to critical and artistic responses like Donna Haraway's "A Cyborg Manifesto," which embraces the politics of technoscientific more-than-humans, to F.T. Marinetti’s “Manifesto of Futurism,” which calls for the embrace of the modern machine age. A manifesto declares an ethical, political, or social position. We encourage you to experiment with this genre in the final exam.
• Section 1 should be maximum 3 pages.
• Section 2 can be between 3–15 pages.
• Your manifesto can be written in German or English. You are encouraged to write your reflection in English, and you are allowed to use large language models (LLM) for translation (with acknowledgement).
• Due 30 March with feedback. Due 30 April without feedback.

Section 1 (max. 3 pages): Write a manifesto on the student use of A.I. at the University of Bayreuth. Please take a clear position. You may take any position:
• In favor — arguing for AI's expansion, adoption, or a particular use of it
• Against — arguing for resistance, restriction, or rejection
• Neither — refusing the binary, reframing the question, or making a different kind of argument (e.g. about who should control AI, or on what terms, rather than whether it should be used)

Section 2 (3–15 pages): Reflect on the manifesto you just wrote, linking your reflections to readings and discussions from the course. Do not summarize — it is an analysis of why you wrote the manifesto the way you did and how it relates to what we've read and discussed this semester. Address some of these points:
• Position and its sources. Where does your stance on AI come from? Which course readings, concepts, or class discussions influenced, inspired or informed your position, including the ones you disagreed with?
• Genre and rhetoric. What choices did you make in writing the manifesto (tone, structure, imagery, audience) and why? Who is its target audience? What did the manifesto form let you say, or force you to leave out, that a more conventional essay would not?
• Conceptual framing. Situate your manifesto within the theoretical vocabulary of the course — does it treat technology as autonomous and deterministic, or as socially shaped and contested? Does it invoke specific actors, infrastructures, or histories we've discussed? Is it an example of a pattern we've studied (automation, authenticity, equality, nation-building, humanity)?
• A moment of friction. Do you think your manifesto is persuasive? Why or why not? Identify at least one course reading or discussion that complicates or unsettles your position, and engage with it seriously rather than dismissing it.

Essays and the cumulative mark for the module will be graded according to §16 of the Prüfungs- und Studienordnung für den Bachelorstudiengang Sozial- und Kulturanthropologie an der Universität Bayreuth (consult the latest version where available).`,
  discussion: {
    tool: "E-learning",
    url: "https://elearning.uni-bayreuth.de/course/view.php?id=48964",
    note: "All threaded discussion happens on the E-learning site. One post + one reply per week, due Sunday 23:59."
  },
  /* Right-rail "Important dates" — add, remove or reorder freely.
     date: "Sep 11" or "11 Sep". Edit here or in the site editor (Shift+E). */
  importantDates: [
    { date: "19 Oct", title: "First Meeting of Course" },
    { date: "16 Nov", title: "Visit to Markgräfliches Opernhaus" },
    { date: "21 Dec", title: "No class — time to work on your essay" },
    { date: "1 Feb", title: "Final Discussion" },
    { date: "30 Mar", title: "Manifesto and Long-Form Essay Due - with feedback" },
    { date: "30 Apr", title: "Manifesto and Long-Form Essay Due - without feedback" }
  ],
  quickLinks: [
    { label: "Syllabus (PDF)", url: "files/Technologies_Syllabus_WiSe20262027.pdf" },
    { label: "E-learning site", url: "https://elearning.uni-bayreuth.de/course/view.php?id=48964" }
  ],
  weeks: [
    {
      n: 1, label: "1", date: "19 Oct", title: "What is Technology?",
      note: "Introduction to the course and syllabus.",
      prompt: "", presenters: [],
      readings: [],
      extraReadings: []
    },
    {
      n: 2, label: "2", date: "26 Oct", title: "The Moveable Type Press",
      prompt: "", presenters: [],
      readings: [
        { title: "Guda, a Sinful Woman: A Multi-Scalar Portrait of a Medieval Scribe and Illuminator, Historical Research 99 (284): 204–34", author: "Beach, Kwakkel, Vandenabeele, Vermeersch & Andrade (2026)" },
        { title: "The Beginnings of Printing in the Ottoman Capital: Book Production and Circulation in Early Modern Constantinople, Studies in Ottoman Science 16 (2): 3–32", author: "Palabıyık (2015)" }
      ],
      extraReadings: [
        { title: "“Technology”: The Emergence of a Hazardous Concept, Social Research 64 (3): 965–88", author: "Marx (1997)" },
        { title: "Social Anthropology of Technology, Annual Review of Anthropology 21: 491–516", author: "Pfaffenberger (1992)" }
      ]
    },
    {
      n: 3, label: "3", date: "2 Nov", title: "Computing Music Taste",
      prompt: "", presenters: [],
      readings: [
        { title: "Introduction: Technology with Humanity, in Computing Taste: Algorithms and the Makers of Music Recommendation, pp. 1–21", author: "Seaver (2022)" },
        { title: "How Music Takes Place: Excerpts from “The Post-Digital Manifesto”, in The Internet Does Not Exist, 132–49", author: "Fleischer (2015)" }
      ],
      extraReadings: [
        { title: "A Taste of Science: Making the Subjective Objective in the California Wine World, Social Studies of Science 46 (3): 436–60", author: "Shapin (2016)" },
        { title: "Objectivity", author: "Daston & Galison (2007)" }
      ]
    },
    {
      n: 4, label: "4", date: "9 Nov", title: "Technologies of Music",
      prompt: "", presenters: [],
      readings: [
        { title: "[Selections] Noise: The Political Economy of Music", author: "Attali (1985)" },
        { title: "[Selections] Bach Senza Basso: About the Solo Works for Violin of Joh. Seb. Bach", author: "Bijlsma (2012)" }
      ],
      extraReadings: [
        { title: "The Soundscape of Modernity: Architectural Acoustics and the Culture of Listening in America, 1900–1933", author: "Thompson (2002)" },
        { title: "Seashell Sound, Cabinet no. 48: 23–29", author: "Helmreich (2013)" }
      ]
    },
    {
      n: 5, label: "5", date: "16 Nov", title: "Staging Science",
      note: "Visit to the Margravial Opera House.",
      prompt: "", presenters: [],
      readings: [
        { title: "Give Me a Laboratory and I Will Raise the World, in Science Observed, 141–170", author: "Latour (1983)" },
        { title: "Gebt mir ein Laboratorium und ich werde die Welt aus den Angeln heben, in ANThology, 103–34", author: "Latour (2006)" },
        { title: "Opera as Social Showcase: Rituals of “Magic Mirrors” at the Margravial Opera House in Mid-Eighteenth-Century Bayreuth, Issues in Ethnology and Anthropology 11: 19–45", author: "Kotnik (2016)" }
      ],
      extraReadings: [
        { title: "Laborstudien, in Science and Technology Studies. Eine sozialanthropologische Einführung, 145–71", author: "Amelang (2012)" }
      ]
    },
    {
      n: 6, label: "6", date: "23 Nov", title: "Mechanical Production",
      prompt: "", presenters: [],
      readings: [
        { title: "The Pencil of Nature (1844–46)", author: "Fox Talbot" },
        { title: "Tentacular Faces: Race and the Return of the Phenotype in Forensic Identification, American Anthropologist 122 (2): 369–80", author: "M’charek (2020)" }
      ],
      extraReadings: [
        { title: "On Photography", author: "Sontag (2020)" },
        { title: "The Problem of Mechanization: Craft, Machines, and “Centering” in a Japanese Mingei Pottery Village, Journal of Material Culture 23 (2): 133–50", author: "Paredes (2018)" }
      ]
    },
    {
      n: 7, label: "7", date: "30 Nov", title: "Does Technology Have Politics?",
      prompt: "", presenters: [],
      readings: [
        { title: "Do Artifacts Have Politics?, Daedalus 109 (1): 121–36", author: "Winner (1980)" },
        { title: "(Watch) Frank Uekötter im Interview zu seinem Buch „Atomare Demokratie“ (6:52)", author: "Franz Steiner Verlag (2022)" }
      ],
      extraReadings: [
        { title: "How a Popular Medical Device Encodes Racial Bias, Boston Review, 2 Aug 2020", author: "Moran-Thomas (2020)" }
      ]
    },
    {
      n: 8, label: "8", date: "7 Dec", title: "Technology, Users, and Design",
      prompt: "", presenters: [],
      readings: [
        { title: "The Berlin Key or How to Do Words with Things, in Matter, Materiality, and Modern Culture", author: "Latour (2000)" },
        { title: "Der Berliner Schlüssel: Erkundungen eines Liebhabers der Wissenschaften", author: "Latour (1996)" },
        { title: "Machines, Music, and the Quest for Fidelity: Marketing the Edison Phonograph in America, 1877–1925, The Musical Quarterly 79 (1): 131–71", author: "Thompson (1995)" }
      ],
      extraReadings: [
        { title: "The De-Scription of Technical Objects, in Shaping Technology/Building Society, 205–24", author: "Akrich (1992)" },
        { title: "How Users Matter: The Co-Construction of Users and Technology", author: "Oudshoorn & Pinch (2003)" }
      ]
    },
    {
      n: 9, label: "9", date: "14 Dec", title: "Mechanical Reproduction",
      prompt: "", presenters: [],
      readings: [
        { title: "The Work of Art in the Age of Mechanical Reproduction, in Illuminations, 217–251", author: "Benjamin (1935/1969)" }
      ],
      extraReadings: []
    },
    {
      n: 10, label: "10", date: "11 Jan", title: "Decolonizing Technology",
      prompt: "", presenters: [],
      readings: [
        { title: "The Problem with Annotation. Human Labour and Outsourcing between France and Madagascar, Big Data & Society 10 (2)", author: "Le Ludec, Cornet & Casilli (2023)" },
        { title: "From Hoping to Expecting: Cochlear Implantation and Habilitation in India, Cultural Anthropology 37 (1): 125–49", author: "Friedner (2022)" }
      ],
      extraReadings: [
        { title: "Feminism, Postcolonialism, Technoscience, in The Handbook of Science and Technology Studies, 407–33", author: "Subramaniam, Foster, Harding, Roy & TallBear (2017)" },
        { title: "Einführung: Postkoloniale STS, in Science and Technology Studies, 471–94", author: "Schramm (2017)" },
        { title: "Postcolonial and Feminist Philosophies of Science and Technology: Convergences and Dissonances, Postcolonial Studies 12 (4): 401–21", author: "Harding (2009)" },
        { title: "Provincializing STS: Postcoloniality, Symmetry, and Method, East Asian Science, Technology and Society 11 (2): 211–27", author: "Law & Lin (2017)" }
      ]
    },
    {
      n: 11, label: "11", date: "18 Jan", title: "Gender and Musical Production in the Atomic Age",
      prompt: "", presenters: [],
      readings: [
        { title: "Toward a Feminist Historiography of Electronic Music, in The Sound Studies Reader, 475–89", author: "Rodgers (2012)" }
        { title: "Sexism Is a Feature, Not a Bug. In Your Computer Is on Fire, edited by Thomas S. Mullaney, Benjamin Peters, Mar Hicks, and Kavita Philip, 135–158. Cambridge, MA: MIT Press", author: "Hicks (2021)" } 
      ],
      extraReadings: [
         { title: "When Computers Were Women. Technology and Culture 40 (3): 455–83", author: "Light (1999)"} 
      ]
    },
    {
      n: 12, label: "12", date: "25 Jan", title: "(Artificially?) Intelligent Futures & Manifesto",
      prompt: "", presenters: [],
      readings: [
        { title: "Virtually Shamans: An Anthropological Perspective on AI Chatbots, Anthropology of Consciousness 36 (2)", author: "Hau & Krause-Jensen (2025)" },
        { title: "AI Decolonial Manyfesto", author: "Mohamed, Png, Isaac et al." }
      ],
      extraReadings: [
        { title: "A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late Twentieth Century, in Simians, Cyborgs, and Women", author: "Haraway (1991)" },
        { title: "Declaration of Futurism, Poesia 5 (6)", author: "Marinetti (1909)" },
        { title: "Crip Technoscience Manifesto. Catalyst: Feminism, Theory, Technoscience 5 (1): 1–33", author: "Hamraie and Fritsch (2019)" },
        { title: "AI as Pharmakon, American Ethnologist 53 (2): 128–31", author: "Su (2026)" },
        { title: "Enacting AI Disclosure in Scholarly Publishing, American Ethnologist 53 (2): 132–35", author: "LaFlamme & Meyers (2026)" },
        { title: "Appropriation, Indigenous Knowledge, and Generative AI, American Ethnologist 53 (2): 125–27", author: "Menzies (hagwil hayetsk) (2026)" },
        { title: "AI as Guru or Conjurer?, American Ethnologist 53 (2): 136–41", author: "Timmer & Hermkens (2026)" },
        { title: "On Recognizing the Handiwork of AI, American Ethnologist 53 (2): 142–47", author: "Seaver (2026)" }
      ]
    },
    {
      n: 13, label: "13", date: "1 Feb", title: "Conclusions and Feedback",
      prompt: "", presenters: [],
      readings: [],
      extraReadings: []
    }
  ]
};
