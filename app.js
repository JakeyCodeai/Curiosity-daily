
const topics = {
  "Culture": [
    "North Indian customs",
    "South Indian food rituals",
    "Japanese tea ceremony",
    "Moroccan wedding traditions",
    "Chinese New Year",
    "Korean Chuseok festival",
    "Maasai traditions",
    "Scandinavian Christmas customs",
    "Native American powwows",
    "Brazilian Carnival",
    "French dining etiquette",
    "Nigerian naming ceremonies",
    "Ethiopian coffee ceremony",
    "Thai Songkran",
    "Filipino Bayanihan",
    "Turkish tea houses",
    "Persian Nowruz",
    "Egyptian wedding dances",
    "Polish harvest festival",
    "Inuit storytelling",
    "Scottish ceilidh",
    "Italian siesta culture",
    "Samoan tattoo tradition",
    "Vietnamese Tet",
    "Mongolian eagle hunting",
    "Cuban Santeria",
    "Greek Easter",
    "Russian dacha culture",
    "Irish folklore",
    "Lebanese hospitality",
    "Ukrainian embroidery",
    "Indonesian shadow puppets",
    "Haitian Vodou",
    "Hmong textiles",
    "Tibetan sky burials",
    "Georgian supra",
    "Pakistani mehndi",
    "Zulu beadwork",
    "Andean music",
    "Icelandic sagas"
  ],
  "Architecture": [
    "Brutalism",
    "Walkable cities",
    "Gothic cathedrals",
    "Skyscraper engineering",
    "Green architecture",
    "Tiny house movement",
    "Feng shui in design",
    "Bauhaus",
    "Colonial architecture",
    "Rammed earth buildings",
    "Modernism vs Postmodernism",
    "Baroque palaces",
    "Ancient Roman aqueducts",
    "Japanese temples",
    "Indian stepwells",
    "African mud architecture",
    "Nordic minimalism",
    "Neoclassical buildings",
    "Greek amphitheaters",
    "Islamic domes",
    "Frank Lloyd Wright homes",
    "Floating houses",
    "Cave dwellings",
    "Venetian palazzos",
    "Art Deco skyscrapers",
    "Chilean cliff homes",
    "Portuguese azulejo buildings",
    "Haussmann\u2019s Paris",
    "Utopian urban planning",
    "Underground cities",
    "Vertical forests",
    "Spanish courtyards",
    "Corbusier\u2019s Radiant City",
    "Sustainable bamboo design",
    "Circular villages",
    "Earthships",
    "South Korean apartments",
    "Chinese Hutongs",
    "Mayan pyramids",
    "Modular homes"
  ],
  "Psychology": [
    "Cognitive biases",
    "Procrastination",
    "Attachment theory",
    "Maslow\u2019s hierarchy",
    "Pavlov\u2019s conditioning",
    "Stockholm syndrome",
    "Confirmation bias",
    "Groupthink",
    "Fear of missing out",
    "Mirror neurons",
    "The Dunning-Kruger effect",
    "Decision fatigue",
    "Learned helplessness",
    "Neuroplasticity",
    "Sunk cost fallacy",
    "Social proof",
    "The spotlight effect",
    "Flow state",
    "Delayed gratification",
    "Fight or flight",
    "Personality types",
    "Implicit bias",
    "Cognitive dissonance",
    "Parasocial relationships",
    "Revenge psychology",
    "Empathy vs sympathy",
    "Memory encoding",
    "Emotional regulation",
    "Self-fulfilling prophecy",
    "Placebo effect",
    "Priming",
    "Grit and perseverance",
    "Gaslighting",
    "Lucid dreaming",
    "Sleep cycles",
    "Habit loops",
    "Peak-end rule",
    "Fear conditioning",
    "Addiction psychology",
    "Authority bias"
  ],
  "UX/UI": [
    "Dark patterns",
    "Onboarding design",
    "Mobile-first UI",
    "Microinteractions",
    "Accessibility principles",
    "Usability heuristics",
    "Typography in UX",
    "A/B testing",
    "User personas",
    "The fold myth",
    "Conversion funnels",
    "Heatmaps",
    "UX writing",
    "Progressive disclosure",
    "Gamification in UX",
    "Emotional design",
    "UX of forms",
    "Loading indicators",
    "Feedback cues",
    "Whitespace usage",
    "Design systems",
    "Color psychology",
    "Modal vs tooltip",
    "Call to action design",
    "Information architecture",
    "UX case studies",
    "Affordance in design",
    "UX patterns",
    "Responsive grids",
    "Skeuomorphic design",
    "Flat design principles",
    "Parallax scrolling",
    "Web accessibility laws",
    "User journey maps",
    "UX audit process",
    "Form validation UX",
    "Icon usability",
    "Hick\u2019s law",
    "Fitts\u2019s law",
    "Lazy loading"
  ],
  "Film & Storytelling": [
    "The hero\u2019s journey",
    "Nonlinear storytelling",
    "Symbolism in Wes Anderson",
    "Montage theory",
    "Chekhov\u2019s gun",
    "Visual metaphors",
    "Narrative foreshadowing",
    "Breaking the fourth wall",
    "Show vs tell",
    "Tragic flaw",
    "Tarantino\u2019s dialogue style",
    "Dream logic in film",
    "A24 storytelling",
    "Found footage horror",
    "Antiheroes in cinema",
    "Slow cinema",
    "The unreliable narrator",
    "Story beats",
    "The Save the Cat formula",
    "Villain origin arcs",
    "Voiceover narration",
    "Theme vs motif",
    "MacGuffin device",
    "Rashomon effect",
    "Exposition dumps",
    "Color symbolism",
    "Character archetypes",
    "Dystopian tropes",
    "Coming-of-age elements",
    "World-building techniques",
    "Adaptation differences",
    "Low-budget visual tricks",
    "Practical vs CGI",
    "Sound as a story element",
    "Editing for suspense",
    "Subverting expectations",
    "Narrative pacing",
    "Visual storytelling in silent film",
    "Flashback structure"
  ],
  "Wildcard Topics": [
    "Why we name hurricanes",
    "History of chewing gum",
    "How emojis evolved",
    "Invention of the zipper",
    "Why clocks go clockwise",
    "Origin of surnames",
    "How GPS works",
    "Why leaves change color",
    "How barcodes are scanned",
    "The science of yawning",
    "Why cats purr",
    "How neon lights work",
    "Origin of crossword puzzles",
    "Why time zones exist",
    "How radio works",
    "History of denim",
    "How instant ramen is made",
    "Why we hiccup",
    "Where sand comes from",
    "How do planes stay up",
    "Why we blush",
    "The smell of rain",
    "The sound of vinyl",
    "The rise of slime videos",
    "Why popcorn pops",
    "How boomerangs work",
    "Why we cry",
    "Why mirrors flip left-right but not up-down",
    "Origin of money",
    "Why the sky is blue",
    "Why some people are left-handed"
  ]
};

let usedTopics = [];

function getRandomTopic() {
  const categories = Object.keys(topics);

  while (true) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomTopic = topics[randomCategory][Math.floor(Math.random() * topics[randomCategory].length)];
    const fullTopic = `${randomCategory}: ${randomTopic}`;

    if (!usedTopics.includes(fullTopic)) {
      usedTopics.push(fullTopic);
      if (usedTopics.length >= 40) {
        usedTopics.shift(); // Keep recent history
      }
      return fullTopic;
    }
  }
}

function showTopic() {
  const topic = getRandomTopic();
  document.getElementById('topic-box').innerText = topic;
  localStorage.setItem("currentTopic", topic);
}

window.onload = function () {
  const savedTopic = localStorage.getItem("currentTopic");
  if (savedTopic) {
    document.getElementById('topic-box').innerText = savedTopic;
  }
};
