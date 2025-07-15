const Words = [
  "your",
  "camp",
  "seat",
  "join",
  "wash",
  "high",
  "belt",
  "feel",
  "path",
  "flow",
  "list",
  "used",
  "task",
  "vote",
  "cold",
  "palm",
  "huge",
  "ball",
  "wore",
  "chip",
  "date",
  "bend",
  "role",
  "sick",
  "rank",
  "rice",
  "glad",
  "give",
  "some",
  "film",
  "copy",
  "show",
  "call",
  "gift",
  "deck",
  "snow",
  "burn",
  "sell",
  "form",
  "thin",
  "risk",
  "cool",
  "fine",
  "draw",
  "shot",
  "fail",
  "full",
  "note",
  "earn",
  "hint",
  "left",
  "lack",
  "card",
  "heat",
  "club",
  "rare",
  "hour",
  "move",
  "tone",
  "knew",
  "fall",
  "ever",
  "dark",
  "play",
  "mood",
  "wave",
  "area",
  "wire",
  "fold",
  "lamp",
  "plug",
  "mean",
  "list",
  "rear",
  "send",
  "else",
  "mile",
  "hook",
  "love",
  "chat",
  "game",
  "care",
  "fill",
  "bush",
  "gate",
  "vote",
  "note",
  "read",
  "zero",
  "must",
  "suit",
  "easy",
  "late",
  "wing",
  "meal",
  "line",
  "much",
  "cost",
  "past",
  "feet",
  "like",
  "when",
  "mail",
  "wake",
  "slow",
  "fact",
  "golf",
  "cold",
  "folk",
  "past",
  "soul",
  "both",
  "tone",
  "trip",
  "main",
  "melt",
  "blue",
  "luck",
  "roof",
  "fear",
  "self",
  "luck",
  "holy",
  "wait",
  "tool",
  "rich",
  "size",
  "rest",
  "mile",
  "held",
  "base",
  "true",
  "fail",
  "army",
  "sent",
  "page",
  "told",
  "roof",
  "gulf",
  "cute",
  "once",
  "fish",
  "feel",
  "tear",
  "bank",
  "knee",
  "duck",
  "pipe",
  "swim",
  "line",
  "type",
  "text",
  "stay",
  "port",
  "word",
  "kill",
  "lock",
  "pile",
  "gone",
  "walk",
  "note",
  "salt",
  "unit",
  "disk",
  "iron",
  "deny",
  "hair",
  "boss",
  "hill",
  "pull",
  "more",
  "rock",
  "huge",
  "coat",
  "user",
  "from",
  "debt",
  "cook",
  "load",
  "area",
  "sign",
  "coat",
  "main",
  "yard",
  "fair",
  "jump",
  "loan",
  "bowl",
  "vest",
  "rule",
  "neck",
  "rear",
  "find",
  "gift",
  "rate",
  "room",
  "ward",
  "just",
  "hint",
  "hide",
  "many",
  "girl",
  "cell",
  "luck",
  "hard",
  "news",
  "trap",
  "deck",
  "fuel",
  "long",
  "sake",
  "song",
  "barn",
  "ride",
  "fell",
  "yarn",
  "fool",
  "wife",
  "else",
  "role",
  "hang",
  "test",
  "coat",
  "draw",
  "race",
  "come",
  "town",
  "cost",
  "slow",
  "face",
  "hard",
  "area",
  "side",
  "park",
  "four",
  "them",
  "pipe",
  "does",
  "open",
  "army",
  "tale",
  "safe",
  "task",
  "blue",
  "type",
  "west",
  "tied",
  "down",
  "site",
  "rank",
  "gave",
  "live",
  "navy",
  "tree",
  "pass",
  "holy",
  "neck",
  "pair",
  "rain",
  "seed",
  "yarn",
  "data",
  "disk",
  "port",
  "ball",
  "page",
  "home",
  "seat",
  "gave",
  "been",
  "idea",
  "vest",
  "read",
  "cook",
  "rule",
  "want",
  "duty",
  "code",
  "bank",
  "past",
  "zone",
  "hill",
  "term",
  "bush",
  "park",
  "mood",
  "host",
  "ride",
  "club",
  "fail",
  "twin",
  "bury",
  "look",
  "game",
  "much",
  "heat",
  "tank",
  "tiny",
  "menu",
  "pull",
  "hard",
  "firm",
  "test",
  "legs",
  "four",
  "near",
  "wear",
  "thin",
  "push",
  "lamp",
  "lens",
  "coat",
  "kiss",
  "deny",
  "jury",
  "unit",
  "camp",
  "help",
  "mine",
  "like",
  "sing",
  "rear",
  "bell",
  "hype",
  "wall",
  "form",
  "rank",
  "fold",
  "your",
  "mass",
  "hero",
  "best",
  "hang",
  "rose",
  "info",
  "walk",
  "wide",
  "beat",
  "gone",
  "port",
  "wise",
  "road",
  "deal",
  "read",
  "boat",
  "kill",
  "bike",
  "feet",
  "song",
  "size",
];

let maxtime = 1200;
let countdown = maxtime;
let randomWord;
let score = 0;

const timerElement = document.getElementById("timer");
timerElement.innerText = maxtime;

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("resetButton").addEventListener("click", resetGame);
document.getElementById("submitButton").addEventListener("click", Submit);
document.addEventListener("keydown", handleKeyPress);

function startGame() {
  document.getElementById("startButton").disabled = true;
  document.getElementById("resetButton").disabled = false;
  document.getElementById("userInput").disabled = false;
  document.getElementById("submitButton").disabled = false;
  document.getElementById("message").innerText = "Guess the Correct word..";
  startTimer();
  play();
}

function startTimer() {
  const interval = setInterval(() => {
    countdown--;
    timerElement.innerText = countdown;

    if (countdown <= 0) {
      clearInterval(interval);
      document.getElementById("message").innerHTML = "Time's Up...";
      document.getElementById("message").style.color = "blue";
      document.getElementById("startButton").disabled = false;
      document.getElementById("resetButton").disabled = true;
      document.getElementById("userInput").disabled = true;
      document.getElementById("submitButton").disabled = true;
    }
  }, 1000);
}

function resetGame() {
  location.reload();
}

function play() {
  document.getElementById("userInput").value = "";
  document.getElementById("userInput").focus();
  document.getElementById("message").innerText = "Guess the Correct word..";
  document.getElementById("message").style.color = "black";
  randomWord = Words[Math.floor(Math.random() * 350)];
  let currentWord = randomWord.split("");

  for (let i = currentWord.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [currentWord[i], currentWord[j]] = [currentWord[j], currentWord[i]];
  }

  document.getElementById("letter1").innerText = currentWord[0].toUpperCase();
  document.getElementById("letter2").innerText = currentWord[1].toUpperCase();
  document.getElementById("letter3").innerText = currentWord[2].toUpperCase();
  document.getElementById("letter4").innerText = currentWord[3].toUpperCase();
}

function handleKeyPress(event) {
  const key = event.key;
  if (key === "Enter") {
    Submit();
  }
}

function Submit() {
  if (countdown <= 0 || countdown >= maxtime) {
    return;
  }

  if (document.getElementById("userInput").value === randomWord) {
    score++;
    document.getElementById("score").innerText = score;
    document.getElementById("message").innerText = "Correct Guess";
    document.getElementById("message").style.color = "Green";
    setTimeout(play, 500);
  } else {
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();
    document.getElementById("message").innerText = "Incorrect Guess";
    document.getElementById("message").style.color = "red";
  }
}



