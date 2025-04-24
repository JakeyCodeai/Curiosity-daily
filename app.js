
const topics = {
  "Culture": ["North Indian customs", "South Indian food rituals", "Mexican Día de los Muertos"],
  "Architecture": ["Brutalism", "Why cities are walkable", "Skyscraper engineering"],
  "Psychology": ["Cognitive biases", "Why people procrastinate", "Attachment theory"],
  "UX/UI": ["Dark patterns", "Good onboarding flows", "Mobile-first design"],
  "Film & Storytelling": ["The hero’s journey", "Why horror works", "Symbolism in Wes Anderson films"]
};

function getRandomTopic() {
  const categories = Object.keys(topics);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomTopic = topics[randomCategory][Math.floor(Math.random() * topics[randomCategory].length)];
  return `${randomCategory}: ${randomTopic}`;
}

function showTopic() {
  const topic = getRandomTopic();
  document.getElementById('topic-box').innerText = topic;
  localStorage.setItem("currentTopic", topic);
}

function saveJournal() {
  const entry = document.getElementById('journal').value;
  const date = new Date().toLocaleDateString();
  const key = `journal-${date}`;
  localStorage.setItem(key, entry);
  alert("Saved!");
  updateHistory();
}

function updateHistory() {
  const historyBox = document.getElementById('history');
  historyBox.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("journal-")) {
      const li = document.createElement('li');
      li.innerText = `${key.replace("journal-", "")}: ${localStorage.getItem(key).slice(0, 50)}...`;
      historyBox.appendChild(li);
    }
  }
}

window.onload = function () {
  const savedTopic = localStorage.getItem("currentTopic");
  if (savedTopic) {
    document.getElementById('topic-box').innerText = savedTopic;
  }
  updateHistory();
};
