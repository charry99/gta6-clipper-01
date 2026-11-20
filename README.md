# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/charry99/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/charry99/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

**The clip:** a 20-second vertical Short cut from Rockstar's official Grand Theft Auto VI Trailer 2. The moment: Jason on a red chopper, shot from below against the sky, while a seaplane flies in formation right beside him — a motorcycle keeping pace with a plane. It plays once at full speed, once in slow motion, then carries the pitch on screen: my AI agent cut this clip, and anyone can make clips like this with AI and earn money on make.fun (`make.fun/bounty/gta6-clipper-01`). It ends on the moment again so the Short loops.

**How it was made:** an AI agent picked the moment from the trailer, decided the hook, the slow-mo replay and the pitch lines, and rendered the file with ffmpeg in one session — trim 141.9–143.6s of the trailer, blurred-pad to 1080×1920, DejaVu Sans Bold drawtext overlays for the hook and the pitch, the trailer's own audio looped underneath, H.264/AAC. `description.txt` holds the exact YouTube title and description (with the bounty's line and the play code) ready to paste at upload.

**Status:** `VIDEO.json` still holds the placeholder address. The only missing piece is the video itself: once the clip is uploaded to YouTube as a public Short, its address replaces the placeholder and the entry is ready to submit.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `VIDEO.json` to `out/VIDEO.json`, which is all the program does — the house reads the video's views from YouTube itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=1xwqyaf2&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
