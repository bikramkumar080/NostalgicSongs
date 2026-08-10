// ── Song catalogue ────────────────────────────────────────────────────────────
const songs = [
  { id: "song-01", title: "Kuchh Na Kaho",                      artist: "R. D. Burman",                                    audioUrl: "assets/songs/song-01.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-02", title: "Ek Ladki Ko Dekha",                   artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-02.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-03", title: "Dil Ne Yeh Kaha Hain Dil Se",         artist: "Udit Narayan, Alka Yagnik",                       audioUrl: "assets/songs/song-03.mp3", moods: ["falling-love", "after-midnight", "take-me-back"] },
  { id: "song-04", title: "Tum Dil Ki Dhadkan Mein",             artist: "Abhijeet, Alka Yagnik",                           audioUrl: "assets/songs/song-04.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-05", title: "Tum Dil Ki Dhadkan Mein",             artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-05.mp3", moods: ["falling-love", "after-midnight", "take-me-back"] },
  { id: "song-06", title: "Aksar Is Duniya Mein",                artist: "Alka Yagnik",                                     audioUrl: "assets/songs/song-06.mp3", moods: ["after-midnight", "rainy-window", "take-me-back"] },
  { id: "song-07", title: "Aankhon Se Tune Kya Keh Diya",        artist: "Kumar Sanu, Alka Yagnik",                         audioUrl: "assets/songs/song-07.mp3", moods: ["falling-love", "long-road", "take-me-back"] },
  { id: "song-08", title: "Bahut Pyar Karte Hai",                artist: "S. P. Balasubrahmanyam",                          audioUrl: "assets/songs/song-08.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-09", title: "Do Dil Mil Rahe Hai",                 artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-09.mp3", moods: ["falling-love", "long-road", "take-me-back"] },
  { id: "song-10", title: "Ghar Se Nikalte",                     artist: "Udit Narayan",                                    audioUrl: "assets/songs/song-10.mp3", moods: ["long-road", "rainy-window", "take-me-back", "after-midnight"] },
  { id: "song-11", title: "Ho Gaya Hai Tujhko To Pyar Sajna",   artist: "Lata Mangeshkar, Udit Narayan",                   audioUrl: "assets/songs/song-11.mp3", moods: ["falling-love", "take-me-back"] },
  { id: "song-12", title: "Jeeye To Jeeye Kaise",               artist: "Kumar Sanu, S. P. Balasubrahmanyam, Anuradha Paudwal", audioUrl: "assets/songs/song-12.mp3", moods: ["after-midnight", "rainy-window", "take-me-back"] },
  { id: "song-13", title: "Kuch Kuch Hota Hai",                  artist: "Udit Narayan",                                    audioUrl: "assets/songs/song-13.mp3", moods: ["falling-love", "take-me-back"] },
  { id: "song-14", title: "Ladki Badi Anjani Hai",               artist: "Alka Yagnik, Kumar Sanu",                         audioUrl: "assets/songs/song-14.mp3", moods: ["falling-love", "take-me-back"] },
  { id: "song-15", title: "Main Koi Aisa Geet Gaoon",            artist: "Abhijeet, Alka Yagnik",                           audioUrl: "assets/songs/song-15.mp3", moods: ["falling-love", "long-road", "take-me-back"] },
  { id: "song-16", title: "Mera Dil Bhi Kitna Pagal Hai",        artist: "Mamta Sharma",                                    audioUrl: "assets/songs/song-16.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-17", title: "Mere Khwabon Mein",                   artist: "Lata Mangeshkar",                                 audioUrl: "assets/songs/song-17.mp3", moods: ["falling-love", "take-me-back"] },
  { id: "song-18", title: "Raja Ko Rani Se",                     artist: "Udit Narayan, Alka Yagnik",                       audioUrl: "assets/songs/song-18.mp3", moods: ["falling-love", "take-me-back"] },
  { id: "song-19", title: "Saajanji Ghar Aaye",                  artist: "Alka Yagnik, Kumar Sanu",                         audioUrl: "assets/songs/song-19.mp3", moods: ["lets-party", "take-me-back", "falling-love"] },
  { id: "song-20", title: "Tujhe Dekha To",                      artist: "Lata Mangeshkar, Kumar Sanu",                     audioUrl: "assets/songs/song-20.mp3", moods: ["falling-love", "take-me-back", "long-road"] },
  { id: "song-21", title: "Ye Kaali Kaali Aankhen",              artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-21.mp3", moods: ["lets-party", "take-me-back", "city-lights"] },
  { id: "song-22", title: "Aankh Hai Bhari Bhari",               artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-22.mp3", moods: ["after-midnight", "rainy-window", "take-me-back"] },
  { id: "song-23", title: "Aankhon Mein Base Ho Tum",            artist: "Abhijeet, Alka Yagnik",                           audioUrl: "assets/songs/song-23.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-24", title: "Aaye Ho Meri Zindagi Mein",           artist: "Udit Narayan",                                    audioUrl: "assets/songs/song-24.mp3", moods: ["falling-love", "long-road", "take-me-back"] },
  { id: "song-25", title: "Ab Tere Bin",                         artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-25.mp3", moods: ["after-midnight", "rainy-window", "take-me-back"] },
  { id: "song-26", title: "Chand Se Parda Kijiye",               artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-26.mp3", moods: ["falling-love", "after-midnight", "take-me-back"] },
  { id: "song-27", title: "Chura Ke Dil Mera",                   artist: "Anu Malik, Alka Yagnik, Kumar Sanu",              audioUrl: "assets/songs/song-27.mp3", moods: ["falling-love", "lets-party", "take-me-back"] },
  { id: "song-28", title: "Dhak Dhak Karne Laga",                artist: "Udit Narayan, Anuradha Paudwal",                  audioUrl: "assets/songs/song-28.mp3", moods: ["falling-love", "lets-party", "take-me-back"] },
  { id: "song-29", title: "Dheere Dheere Se Meri Zindagi Mein Aana", artist: "Anuradha Paudwal, Kumar Sanu",               audioUrl: "assets/songs/song-29.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-30", title: "Jo Bhi Kasmein",                      artist: "Alka Yagnik, Udit Narayan",                       audioUrl: "assets/songs/song-30.mp3", moods: ["falling-love", "after-midnight", "take-me-back"] },
  { id: "song-31", title: "Kitna Haseen Chehra",                 artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-31.mp3", moods: ["falling-love", "long-road", "take-me-back"] },
  { id: "song-32", title: "Kya Karte They Sajna",                artist: "Udit Narayan, Anuradha Paudwal",                  audioUrl: "assets/songs/song-32.mp3", moods: ["falling-love", "take-me-back", "rainy-window"] },
  { id: "song-33", title: "Kya Mujhe Pyaar Hai",                 artist: "KK",                                              audioUrl: "assets/songs/song-33.mp3", moods: ["long-road", "city-lights", "falling-love", "take-me-back"] },
  { id: "song-34", title: "Mera Chand Mujhe Aaya Hai Nazar",     artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-34.mp3", moods: ["after-midnight", "falling-love", "long-road", "take-me-back"] },
  { id: "song-35", title: "Mera Mann",                           artist: "Udit Narayan, Alka Yagnik",                       audioUrl: "assets/songs/song-35.mp3", moods: ["falling-love", "long-road", "take-me-back"] },
  { id: "song-36", title: "Nazar Ke Samne",                      artist: "Anuradha Paudwal, Kumar Sanu",                    audioUrl: "assets/songs/song-36.mp3", moods: ["falling-love", "rainy-window", "take-me-back"] },
  { id: "song-37", title: "Odh Li Chunariya Tere Naam Ki",       artist: "Kumar Sanu, Alka Yagnik",                         audioUrl: "assets/songs/song-37.mp3", moods: ["falling-love", "lets-party", "take-me-back"] },
  { id: "song-38", title: "Sathiya Mujhe Neend Na Aaye Aajkal",  artist: "Suresh Wadkar, Anuradha Paudwal",                 audioUrl: "assets/songs/song-38.mp3", moods: ["after-midnight", "rainy-window", "take-me-back"] },
  { id: "song-39", title: "Tere Bin",                            artist: "Atif Aslam",                                      audioUrl: "assets/songs/song-39.mp3", moods: ["after-midnight", "rainy-window", "long-road"] },
  { id: "song-40", title: "Tu Mile Dil Khile",                   artist: "Kumar Sanu, Alka Yagnik",                         audioUrl: "assets/songs/song-40.mp3", moods: ["falling-love", "rainy-window", "long-road", "take-me-back"] },
  { id: "song-41", title: "Woh Ladki Bahut Yaad Aati",           artist: "Kumar Sanu, Alka Yagnik",                         audioUrl: "assets/songs/song-41.mp3", moods: ["after-midnight", "rainy-window", "long-road", "take-me-back"] },
  { id: "song-42", title: "Saat Samundar Paar",                  artist: "Sadhana Sargam",                                  audioUrl: "assets/songs/song-42.mp3", moods: ["lets-party"] },
  { id: "song-43", title: "Chikni Chameli",                      artist: "Shreya Ghoshal",                                  audioUrl: "assets/songs/song-43.mp3", moods: ["lets-party"] },
  { id: "song-44", title: "Gore Gore Mukhde Pe",                 artist: "Alka Yagnik, Abhijeet",                           audioUrl: "assets/songs/song-44.mp3", moods: ["lets-party"] },
  { id: "song-45", title: "Jalebi Bai",                          artist: "Vishal Dadlani, Sunidhi Chauhan",                 audioUrl: "assets/songs/song-45.mp3", moods: ["lets-party"] },
  { id: "song-46", title: "Beedi",                               artist: "Sukhwinder Singh, Sunidhi Chauhan, Clinton Cerejo", audioUrl: "assets/songs/song-46.mp3", moods: ["lets-party"] },
  { id: "song-47", title: "Munni Badnaam Hui",                   artist: "Mamta Sharma, Aishwarya Nigam",                   audioUrl: "assets/songs/song-47.mp3", moods: ["lets-party"] },
  { id: "song-48", title: "Fevicol Se",                          artist: "Mamta Sharma, Wajid",                             audioUrl: "assets/songs/song-48.mp3", moods: ["lets-party"] },
  { id: "song-49", title: "Shararat",                            artist: "Dhurandhar",                                      audioUrl: "assets/songs/song-49.mp3", moods: ["lets-party"] },
];

// ── Moods ─────────────────────────────────────────────────────────────────────
// Each mood is a journey. Songs are assigned to moods via each song's `moods`
// tag (see the catalogue above). A mood with no tagged songs falls back to the
// shared uncategorized library, so nothing is ever empty. `scene` is the CSS
// class painting the card background (gradient placeholder for now). `wallpaper`
// is the full-screen player background (null = shared kerala-bus scene).
const bus = { desktop: "assets/illustrations/illus-kerala-bus-desktop.png", mobile: "assets/illustrations/illus-kerala-bus-mobile.png" };

const moods = [
  { id: "rainy-window",  emoji: "🌧️", name: "Rainy Window",   tagline: "Songs for quiet moments",       scene: "scene-rain",     wallpaper: null },
  { id: "long-road",     emoji: "🛣️", name: "Long Road",      tagline: "For roads that don't need maps", scene: "scene-road",     wallpaper: null },
  { id: "take-me-back",  emoji: "📼", name: "Take Me Back",    tagline: "90s & early 2000s nostalgia",    scene: "scene-retro",    wallpaper: null },
  { id: "lets-party",    emoji: "🕺", name: "Let's Party",     tagline: "Turn it up",                     scene: "scene-party",    wallpaper: { desktop: "assets/illustrations/Party desktop.png", mobile: "assets/illustrations/Party mobile.png" } },
  { id: "falling-love",  emoji: "❤️", name: "Falling in Love", tagline: "Songs that feel like memories",  scene: "scene-love",     wallpaper: null },
  { id: "after-midnight",emoji: "🌙", name: "After Midnight",  tagline: "For thoughts that stay late",    scene: "scene-midnight", wallpaper: null },
  { id: "city-lights",   emoji: "🌆", name: "City Lights",     tagline: "English pop & night-drive vibes", scene: "scene-city",    wallpaper: null },
  { id: "surprise",      emoji: "🎲", name: "Surprise Me",     tagline: "I don't know what I want",       scene: "scene-surprise", wallpaper: null, surprise: true },
];

let activeMood = null;

// The wallpaper to show for the active mood (its own, or the shared bus scene).
function wallpaperForMood(mood) {
  return mood && mood.wallpaper ? mood.wallpaper : bus;
}

// Resolve a mood's song list.
// A song belongs to a mood if its `moods` array includes the mood id.
// Songs with no `moods` tag are "uncategorized" — they play in any mood that
// has no curated songs of its own yet, so nothing is ever empty.
function songsForMood(mood) {
  const tagged = songs.filter((s) => Array.isArray(s.moods) && s.moods.includes(mood.id));
  if (tagged.length > 0) return tagged;
  // fallback: uncategorized songs (the shared nostalgic library)
  return songs.filter((s) => !Array.isArray(s.moods) || s.moods.length === 0);
}

// ── Illustration pool ─────────────────────────────────────────────────────────
// Each entry has `desktop` and `mobile` src. For images that work on both,
// both fields point to the same file.
const illustrationPool = [
  { desktop: "assets/illustrations/illus-kerala-bus-desktop.png", mobile: "assets/illustrations/illus-kerala-bus-mobile.png" },
];

// Shuffle once on page load so every visit is different
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const shuffledIllustrations = shuffleArray([...illustrationPool]);
let illustrationCursor = 0;

function nextIllustration() {
  const illus = shuffledIllustrations[illustrationCursor % shuffledIllustrations.length];
  illustrationCursor++;
  return illus;
}

// ── Player state ──────────────────────────────────────────────────────────────
const state = {
  history: [],      // each entry: { ...song, illustration: {desktop, mobile} }
  currentIndex: -1,
  isPlaying: false,
};

// ── DOM refs ──────────────────────────────────────────────────────────────────
const audio         = document.getElementById("audio");
let   wallpaperEl   = document.getElementById("wallpaper");
const landing       = document.getElementById("landing");
const moodGrid      = document.getElementById("mood-grid");
const stage         = document.getElementById("stage");
const elTitle       = document.getElementById("song-title");
const elArtist      = document.getElementById("artist-name");
const elFill        = document.getElementById("progress-fill");
const elThumb       = document.getElementById("progress-thumb");
const elTimeCurrent = document.getElementById("time-current");
const elTimeTotal   = document.getElementById("time-total");
const progressBar   = document.querySelector(".progress-bar");
const btnPlay       = document.getElementById("btn-play");
const btnPrev       = document.getElementById("btn-prev");
const btnNext       = document.getElementById("btn-next");
const btnBack       = document.getElementById("btn-back");
const backLabel     = document.getElementById("back-label");
const iconPlay      = btnPlay.querySelector(".icon-play");
const iconPause     = btnPlay.querySelector(".icon-pause");

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function isMobile() {
  return window.matchMedia("(max-width: 480px)").matches;
}

function illusSrc(illus) {
  return isMobile() ? illus.mobile : illus.desktop;
}

function selectRandomUnplayedSong() {
  const pool0 = activeMood ? songsForMood(activeMood) : songs;
  const playedIds = new Set(state.history.map((s) => s.id));
  let pool = pool0.filter((s) => !playedIds.has(s.id));

  if (pool.length === 0) {
    const lastId = state.history.length ? state.history[state.history.length - 1].id : null;
    pool = pool0.filter((s) => s.id !== lastId);
    if (pool.length === 0) pool = pool0;
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Landing / mood selection ──────────────────────────────────────────────────
function buildMoodGrid() {
  moods.forEach((mood) => {
    const card = document.createElement("button");
    card.className = `mood-card ${mood.scene}` + (mood.surprise ? " mood-card--surprise" : "");
    card.innerHTML = `
      <span class="mood-card-emoji">${mood.emoji}</span>
      <span class="mood-card-name">${mood.name}</span>
      <span class="mood-card-tagline">${mood.tagline}</span>
    `;
    card.addEventListener("click", () => enterMood(mood));
    moodGrid.appendChild(card);
  });
}

function enterMood(mood) {
  // Surprise Me → pick a random real mood
  let chosen = mood;
  if (mood.surprise) {
    const realMoods = moods.filter((m) => !m.surprise);
    chosen = realMoods[Math.floor(Math.random() * realMoods.length)];
  }

  activeMood = chosen;

  // Fresh journey each time a mood is entered
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  state.history = [];
  state.currentIndex = -1;
  state.isPlaying = false;

  backLabel.textContent = chosen.name;
  elTitle.textContent  = "Press play";
  elArtist.textContent = "to begin the journey";
  btnPrev.disabled = true;
  updateUI();

  // Show a background immediately so the player isn't blank before play
  wallpaperEl.style.backgroundImage = `url("${illusSrc(wallpaperForMood(chosen))}")`;

  landing.hidden = true;
  stage.hidden = false;
}

function backToLanding() {
  audio.pause();
  state.isPlaying = false;
  stage.hidden = true;
  landing.hidden = false;
}

// ── Wallpaper crossfade ───────────────────────────────────────────────────────
function setWallpaper(illus) {
  const src  = illusSrc(illus);
  const next = document.createElement("div");
  next.className = "wallpaper";
  next.style.cssText = `background-image:url("${src}");opacity:0;transition:opacity 0.9s ease`;
  document.body.prepend(next);

  next.getBoundingClientRect(); // force reflow
  next.style.opacity = "1";

  const old = wallpaperEl;
  setTimeout(() => {
    old.remove();
    next.id = "wallpaper";
    wallpaperEl = next;
  }, 950);
}

// ── Core playback ─────────────────────────────────────────────────────────────
function playSong(entry) {
  const changingTrack = audio.src !== new URL(entry.audioUrl, location.href).href;
  if (changingTrack) {
    setWallpaper(entry.illustration);
    audio.src = entry.audioUrl;
  }
  audio.play().catch(() => {});
  state.isPlaying = true;
  updateUI();
}

// ── Navigation ────────────────────────────────────────────────────────────────
function nextSong() {
  if (state.currentIndex < state.history.length - 1) {
    state.currentIndex++;
  } else {
    const song = selectRandomUnplayedSong();
    // Attach the mood's wallpaper at the moment the song enters history
    state.history.push({ ...song, illustration: wallpaperForMood(activeMood) });
    state.currentIndex++;
  }
  playSong(state.history[state.currentIndex]);
}

function previousSong() {
  if (state.currentIndex <= 0) return;
  state.currentIndex--;
  playSong(state.history[state.currentIndex]);
}

function togglePlayPause() {
  if (state.currentIndex === -1) { nextSong(); return; }
  if (state.isPlaying) {
    audio.pause();
    state.isPlaying = false;
  } else {
    audio.play();
    state.isPlaying = true;
  }
  updateUI();
}

// ── UI update ─────────────────────────────────────────────────────────────────
function updateUI() {
  iconPlay.style.display  = state.isPlaying ? "none"  : "block";
  iconPause.style.display = state.isPlaying ? "block" : "none";
  const entry = state.history[state.currentIndex];
  if (entry) {
    elTitle.textContent  = entry.title;
    elArtist.textContent = entry.artist;
  }
  btnPrev.disabled = state.currentIndex <= 0;
}

function updateProgress() {
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  elFill.style.width        = `${pct}%`;
  elThumb.style.left        = `${pct}%`;
  elTimeCurrent.textContent = formatTime(audio.currentTime);
  elTimeTotal.textContent   = formatTime(audio.duration);
}

// ── Seek ──────────────────────────────────────────────────────────────────────
function seekTo(clientX) {
  if (!audio.duration) return;
  const rect  = progressBar.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  audio.currentTime = ratio * audio.duration;
}

let seeking = false;
progressBar.addEventListener("mousedown",  (e) => { seeking = true; seekTo(e.clientX); });
document.addEventListener("mousemove",     (e) => { if (seeking) seekTo(e.clientX); });
document.addEventListener("mouseup",       ()  => { seeking = false; });
progressBar.addEventListener("touchstart", (e) => { seeking = true; seekTo(e.touches[0].clientX); }, { passive: true });
document.addEventListener("touchmove",     (e) => { if (seeking) seekTo(e.touches[0].clientX); }, { passive: true });
document.addEventListener("touchend",      ()  => { seeking = false; });

// ── Audio events ──────────────────────────────────────────────────────────────
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended",  nextSong);
audio.addEventListener("play",   () => { state.isPlaying = true;  updateUI(); });
audio.addEventListener("pause",  () => { state.isPlaying = false; updateUI(); });

// ── Button events ─────────────────────────────────────────────────────────────
btnPlay.addEventListener("click", togglePlayPause);
btnNext.addEventListener("click", nextSong);
btnPrev.addEventListener("click", previousSong);
btnBack.addEventListener("click", backToLanding);

// ── Keyboard shortcuts ────────────────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (stage.hidden) return; // only active on the player screen
  if (e.code === "Space")      { e.preventDefault(); togglePlayPause(); }
  if (e.code === "ArrowRight") nextSong();
  if (e.code === "ArrowLeft")  previousSong();
});

// ── Init ──────────────────────────────────────────────────────────────────────
(function init() {
  btnPrev.disabled = true;
  buildMoodGrid();
})();
