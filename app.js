// ── Song catalogue ────────────────────────────────────────────────────────────
const songs = [
  { id: "song-01", title: "Kuchh Na Kaho",                      artist: "R. D. Burman",                                    audioUrl: "assets/songs/song-01.mp3" },
  { id: "song-02", title: "Ek Ladki Ko Dekha",                   artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-02.mp3" },
  { id: "song-03", title: "Dil Ne Yeh Kaha Hain Dil Se",         artist: "Udit Narayan, Alka Yagnik",                       audioUrl: "assets/songs/song-03.mp3" },
  { id: "song-04", title: "Tum Dil Ki Dhadkan Mein",             artist: "Abhijeet, Alka Yagnik",                           audioUrl: "assets/songs/song-04.mp3" },
  { id: "song-05", title: "Tum Dil Ki Dhadkan Mein",             artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-05.mp3" },
  { id: "song-06", title: "Aksar Is Duniya Mein",                artist: "Alka Yagnik",                                     audioUrl: "assets/songs/song-06.mp3" },
  { id: "song-07", title: "Aankhon Se Tune Kya Keh Diya",        artist: "Kumar Sanu, Alka Yagnik",                         audioUrl: "assets/songs/song-07.mp3" },
  { id: "song-08", title: "Bahut Pyar Karte Hai",                artist: "S. P. Balasubrahmanyam",                          audioUrl: "assets/songs/song-08.mp3" },
  { id: "song-09", title: "Do Dil Mil Rahe Hai",                 artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-09.mp3" },
  { id: "song-10", title: "Ghar Se Nikalte",                     artist: "Udit Narayan",                                    audioUrl: "assets/songs/song-10.mp3" },
  { id: "song-11", title: "Ho Gaya Hai Tujhko To Pyar Sajna",   artist: "Lata Mangeshkar, Udit Narayan",                   audioUrl: "assets/songs/song-11.mp3" },
  { id: "song-12", title: "Jeeye To Jeeye Kaise",               artist: "Kumar Sanu, S. P. Balasubrahmanyam, Anuradha Paudwal", audioUrl: "assets/songs/song-12.mp3" },
  { id: "song-13", title: "Kuch Kuch Hota Hai",                  artist: "Udit Narayan",                                    audioUrl: "assets/songs/song-13.mp3" },
  { id: "song-14", title: "Ladki Badi Anjani Hai",               artist: "Alka Yagnik, Kumar Sanu",                         audioUrl: "assets/songs/song-14.mp3" },
  { id: "song-15", title: "Main Koi Aisa Geet Gaoon",            artist: "Abhijeet, Alka Yagnik",                           audioUrl: "assets/songs/song-15.mp3" },
  { id: "song-16", title: "Mera Dil Bhi Kitna Pagal Hai",        artist: "Mamta Sharma",                                    audioUrl: "assets/songs/song-16.mp3" },
  { id: "song-17", title: "Mere Khwabon Mein",                   artist: "Lata Mangeshkar",                                 audioUrl: "assets/songs/song-17.mp3" },
  { id: "song-18", title: "Raja Ko Rani Se",                     artist: "Udit Narayan, Alka Yagnik",                       audioUrl: "assets/songs/song-18.mp3" },
  { id: "song-19", title: "Saajanji Ghar Aaye",                  artist: "Alka Yagnik, Kumar Sanu",                         audioUrl: "assets/songs/song-19.mp3" },
  { id: "song-20", title: "Tujhe Dekha To",                      artist: "Lata Mangeshkar, Kumar Sanu",                     audioUrl: "assets/songs/song-20.mp3" },
  { id: "song-21", title: "Ye Kaali Kaali Aankhen",              artist: "Kumar Sanu",                                      audioUrl: "assets/songs/song-21.mp3" },
];

// ── Illustration pool ─────────────────────────────────────────────────────────
// Each entry has `desktop` and `mobile` src. For images that work on both,
// both fields point to the same file.
const illustrationPool = [
  { desktop: "assets/illustrations/illus-kerala-bus-desktop.png", mobile: "assets/illustrations/illus-kerala-bus-mobile.png" }
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
  const playedIds = new Set(state.history.map((s) => s.id));
  let pool = songs.filter((s) => !playedIds.has(s.id));

  if (pool.length === 0) {
    const lastId = state.history.length ? state.history[state.history.length - 1].id : null;
    pool = songs.filter((s) => s.id !== lastId);
    if (pool.length === 0) pool = songs;
  }

  return pool[Math.floor(Math.random() * pool.length)];
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
    // Attach a shuffled illustration at the moment the song enters history
    state.history.push({ ...song, illustration: nextIllustration() });
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

// ── Keyboard shortcuts ────────────────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (e.code === "Space")      { e.preventDefault(); togglePlayPause(); }
  if (e.code === "ArrowRight") nextSong();
  if (e.code === "ArrowLeft")  previousSong();
});

// ── Init ──────────────────────────────────────────────────────────────────────
(function init() {
  btnPrev.disabled = true;
  // Show a random illustration immediately so the page isn't blank on load
  const first = shuffledIllustrations[0];
  wallpaperEl.style.backgroundImage = `url("${illusSrc(first)}")`;
})();
