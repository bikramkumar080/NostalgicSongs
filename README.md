# Nostalgic Feeling

A minimal web music experience inspired by riding a village bus through rural India while 90s songs play in the background. No login, no search, no playlists — just press play and go on a journey.

## Experience

Open the page. A full-screen atmospheric illustration appears. Press play. Songs shuffle randomly, each one accompanied by a different scene. Press next or let songs flow on their own. Press previous any time to go back exactly where you were.

## Features

- Full-screen wallpaper illustration that changes with each song
- History-based random queue — next is unpredictable, previous is always reliable
- No repeats until all 41 songs have played in a cycle
- Responsive: serves portrait illustration on mobile, landscape on desktop
- Keyboard shortcuts: `Space` play/pause, `←` previous, `→` next
- Progress bar with scrubbing (mouse and touch)
- No login, no backend, no database

## Project Structure

```
NostalgicSongs/
├── index.html
├── style.css
├── app.js
└── assets/
    ├── songs/
    │   ├── song-01.mp3  …  song-41.mp3
    │   └── README.md
    └── illustrations/
        ├── illus-kerala-bus-desktop.png   (1080×608, landscape)
        ├── illus-kerala-bus-mobile.png    (358×563, portrait)
        ├── illus-village-bus.jpeg
        ├── illus-village-path.jpeg
        ├── illus-red-truck.jpeg
        ├── illus-rain-truck.jpeg
        └── illus-green-bus.jpeg
```

## Song List (41 songs)

| # | Title | Artist |
|---|-------|--------|
| 01 | Kuchh Na Kaho | R. D. Burman |
| 02 | Ek Ladki Ko Dekha | Kumar Sanu |
| 03 | Dil Ne Yeh Kaha Hain Dil Se | Udit Narayan, Alka Yagnik |
| 04 | Tum Dil Ki Dhadkan Mein | Abhijeet, Alka Yagnik |
| 05 | Tum Dil Ki Dhadkan Mein | Kumar Sanu |
| 06 | Aksar Is Duniya Mein | Alka Yagnik |
| 07 | Aankhon Se Tune Kya Keh Diya | Kumar Sanu, Alka Yagnik |
| 08 | Bahut Pyar Karte Hai | S. P. Balasubrahmanyam |
| 09 | Do Dil Mil Rahe Hai | Kumar Sanu |
| 10 | Ghar Se Nikalte | Udit Narayan |
| 11 | Ho Gaya Hai Tujhko To Pyar Sajna | Lata Mangeshkar, Udit Narayan |
| 12 | Jeeye To Jeeye Kaise | Kumar Sanu, S. P. Balasubrahmanyam, Anuradha Paudwal |
| 13 | Kuch Kuch Hota Hai | Udit Narayan |
| 14 | Ladki Badi Anjani Hai | Alka Yagnik, Kumar Sanu |
| 15 | Main Koi Aisa Geet Gaoon | Abhijeet, Alka Yagnik |
| 16 | Mera Dil Bhi Kitna Pagal Hai | Mamta Sharma |
| 17 | Mere Khwabon Mein | Lata Mangeshkar |
| 18 | Raja Ko Rani Se | Udit Narayan, Alka Yagnik |
| 19 | Saajanji Ghar Aaye | Alka Yagnik, Kumar Sanu |
| 20 | Tujhe Dekha To | Lata Mangeshkar, Kumar Sanu |
| 21 | Ye Kaali Kaali Aankhen | Kumar Sanu |
| 22 | Aankh Hai Bhari Bhari | Kumar Sanu |
| 23 | Aankhon Mein Base Ho Tum | Abhijeet, Alka Yagnik |
| 24 | Aaye Ho Meri Zindagi Mein | Udit Narayan |
| 25 | Ab Tere Bin | Kumar Sanu |
| 26 | Chand Se Parda Kijiye | Kumar Sanu |
| 27 | Chura Ke Dil Mera | Anu Malik, Alka Yagnik, Kumar Sanu |
| 28 | Dhak Dhak Karne Laga | Udit Narayan, Anuradha Paudwal |
| 29 | Dheere Dheere Se Meri Zindagi Mein Aana | Anuradha Paudwal, Kumar Sanu |
| 30 | Jo Bhi Kasmein | Alka Yagnik, Udit Narayan |
| 31 | Kitna Haseen Chehra | Kumar Sanu |
| 32 | Kya Karte They Sajna | Udit Narayan, Anuradha Paudwal |
| 33 | Kya Mujhe Pyaar Hai | KK |
| 34 | Mera Chand Mujhe Aaya Hai Nazar | Kumar Sanu |
| 35 | Mera Mann | Udit Narayan, Alka Yagnik |
| 36 | Nazar Ke Samne | Anuradha Paudwal, Kumar Sanu |
| 37 | Odh Li Chunariya Tere Naam Ki | Kumar Sanu, Alka Yagnik |
| 38 | Sathiya Mujhe Neend Na Aaye Aajkal | Suresh Wadkar, Anuradha Paudwal |
| 39 | Tere Bin | Atif Aslam |
| 40 | Tu Mile Dil Khile | Kumar Sanu, Alka Yagnik |
| 41 | Woh Ladki Bahut Yaad Aati | Kumar Sanu, Alka Yagnik |

## Adding More Songs

1. Drop `.mp3` files into `assets/songs/` named `song-42.mp3`, `song-43.mp3`, etc.
2. Add an entry to the `songs` array at the top of `app.js`:

```js
{ id: "song-42", title: "Song Title", artist: "Artist Name", audioUrl: "assets/songs/song-42.mp3" },
```

## Adding More Illustrations

Drop image files into `assets/illustrations/` and add an entry to `illustrationPool` in `app.js`:

```js
{ desktop: "assets/illustrations/your-image.jpg", mobile: "assets/illustrations/your-image.jpg" },
```

If you have separate portrait/landscape versions, point `mobile` and `desktop` to different files. The pool is shuffled fresh on every page load.

## Deploy to Vercel

```bash
npx vercel
```

Select the project root, no build command, no output directory. Free Hobby plan. Done.

## Tech Stack

Plain HTML, CSS, and vanilla JavaScript. No framework, no build tool, no dependencies.
