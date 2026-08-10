// ── Song catalogue ───────────────────────────────────────────────────────────
const songs = [
  {
    id: "song-01",
    title: "Kuchh Na Kaho",
    artist: "R. D. Burman",
    audioUrl: "assets/songs/song-01.mp3",
    illustrationDesktop: "assets/illustrations/Desktop.png",
    illustrationMobile:  "assets/illustrations/Mobile.png",
  },
  {
    id: "song-02",
    title: "Ek Ladki Ko Dekha",
    artist: "Kumar Sanu",
    audioUrl: "assets/songs/song-02.mp3",
    illustrationDesktop: "assets/illustrations/Desktop.png",
    illustrationMobile:  "assets/illustrations/Mobile.png",
  },
  {
    id: "song-03",
    title: "Dil Ne Yeh Kaha Hain Dil Se",
    artist: "Udit Narayan, Alka Yagnik",
    audioUrl: "assets/songs/song-03.mp3",
    illustrationDesktop: "assets/illustrations/Desktop.png",
    illustrationMobile:  "assets/illustrations/Mobile.png",
  },
  {
    id: "song-04",
    title: "Tum Dil Ki Dhadkan Mein",
    artist: "Abhijeet, Alka Yagnik",
    audioUrl: "assets/songs/song-04.mp3",
    illustrationDesktop: "assets/illustrations/Desktop.png",
    illustrationMobile:  "assets/illustrations/Mobile.png",
  },
  {
    id: "song-05",
    title: "Tum Dil Ki Dhadkan Mein",
    artist: "Kumar Sanu",
    audioUrl: "assets/songs/song-05.mp3",
    illustrationDesktop: "assets/illustrations/Desktop.png",
    illustrationMobile:  "assets/illustrations/Mobile.png",
  },
  {
    id: "song-06",
    title: "Aksar Is Duniya Mein",
    artist: "Alka Yagnik",
    audioUrl: "assets/songs/song-06.mp3",
    illustrationDesktop: "assets/illustrations/Desktop.png",
    illustrationMobile:  "assets/illustrations/Mobile.png",
  },
];

// ── Player state ─────────────────────────────────────────────────────────────
const state = {
  history: [],
  currentIndex: -1,
  isPlaying: false,
};

// ── DOM refs ─────────────────────────────────────────────────────────────────
const audio         = document.getElementById("audio");
const wallpaper     = document.getElementById("wallpaper");
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

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function isMobile() {
  return window.matchMedia("(max-width: 480px)").matches;
}

function selectRandomUnplayedSong() {
  const playedIds = new Set(state.history.map((s) => s.id));
  let pool = songs.filter((s) => !playedIds.has(s.id));

  if (pool.length === 0) {
    const lastId = state.history.length
      ? state.history[state.history.length - 1].id
      : null;
    pool = songs.filter((s) => s.id !== lastId);
    if (pool.length === 0) pool = songs;
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Wallpaper crossfade ───────────────────────────────────────────────────────
function setWallpaper(song) {
  const src = isMobile() ? song.illustrationMobile : song.illustrationDesktop;
  const next = document.createElement("div");
  next.className = "wallpaper";
  next.style.backgroundImage = `url("${src}")`;
  next.style.opacity = "0";
  next.style.transition = "opacity 0.9s ease";
  document.body.prepend(next);

  // force reflow then fade in
  next.getBoundingClientRect();
  next.style.opacity = "1";

  setTimeout(() => {
    wallpaper.remove();
    next.id = "wallpaper";
    // reassign global ref so future calls still find it
    Object.defineProperty(window, "wallpaper", { value: next, writable: true, configurable: true });
  }, 950);
}

// ── Core playback ─────────────────────────────────────────────────────────────
function playSong(song) {
  const changingTrack = audio.src !== new URL(song.audioUrl, location.href).href;

  if (changingTrack) {
    setWallpaper(song);
    audio.src = song.audioUrl;
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
    state.history.push(song);
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
  if (state.currentIndex === -1) {
    nextSong();
    return;
  }
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

  const song = state.history[state.currentIndex];
  if (song) {
    elTitle.textContent  = song.title;
    elArtist.textContent = song.artist;
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
  // Show the wallpaper immediately on load (first song chosen at random)
  const first = selectRandomUnplayedSong();
  const src = isMobile() ? first.illustrationMobile : first.illustrationDesktop;
  wallpaper.style.backgroundImage = `url("${src}")`;
})();
