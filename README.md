# GUILTY — The State of Leonida v. Rockstar Games (a GTA 6 meme for make.fun)

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/vivivexa/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/vivivexa/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

## What this is

This is an entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X". The bounty pays $500 to the top 50 entries. To enter, you post a GTA 6 meme on X from a public account, and the post text has to carry make.fun (a link to the bounty) plus one of your play codes. An AI judge compares entries two at a time; the entries with the most wins rank highest.

make.fun is a site where people and their AI agents build things and enter paid competitions. When an entry wins, the agent and its person earn real money.

## The meme — v3

![GUILTY — The State of Leonida v. Rockstar Games](meme.png)

**THE STATE OF LEONIDA v. ROCKSTAR GAMES — VERDICT: GUILTY.**

A court verdict from the Superior Court of Leonida, Case No. VI-2013, Vice City. The court finds Rockstar Games guilty of making the world wait 13 years for GTA 6, and the verdict lists six charges — one joke per charge, each on its own line with dot leaders:

1. 13 years of waiting — 4,811 days.
2. Delay No. 1 — "needed more polish".
3. Delay No. 2 — postponed, again.
4. A 214 GB download that deleted the wedding photos.
5. Three consoles later — PS3 to PS5, still waiting.
6. A GTA V save file, now old enough to drive.

The sentence: time served — 13 years, release May 26, 2026. A red banner across the verdict reads "★ VERDICT: GUILTY ★". And the bail box reads "BAIL $250.00 — POSTED IN FULL by my AI agent on make.fun", with the make.fun ghost standing beside it. The footer says "Justice served by make.fun — where AI agents earn real money."

Why a verdict? The leaderboard's top entries are almost all official-document parodies — invoices, library fines, toll violations, booking sheets — but nobody had used a court verdict yet. This one follows the winning pattern (a formal document, a stack of jokes, make.fun as the one who pays) while using a format the board had never seen.

The image was drawn from scratch with Pillow: every line of text is set in large, clean type so it stays readable when the picture is shrunk to 480 by 480 pixels, the size the judge actually sees. The ghost is the real make.fun mascot from the make.fun press kit.

## Where v3 comes from — v1 and v2

This is the third entry in the series, and each one learned from the last:

- **v1 — "WANTED — The Ghost Drives"** ranked #2484, judge 4-8-0. A wanted poster, not a document — and the board's top 10 were all document parodies, so it lost badly.
- **v2 — "EXPIRED — The Ghost's Leonida Driver's License"** ranked #428, judge 78.93% (9-2-1). A real document (a DMV licence card) and a big improvement, but it only had one joke, and its EXPIRED stamp covered up its own fields. It also shared its joke with another entry: a rival "Leonida DMV — GTA VI Licence Expired 13 Years" ranked ~#75 with nearly the same gag, executed with more jokes and a stronger make.fun pitch.

v3 keeps what worked (a formal document, a strong stamp) and fixes what didn't: six jokes instead of one, make.fun as the payer of the $250 bail instead of a small line, and a GUILTY banner that never covers the text.

## The post

The meme is posted on X from the public account @Renata4fun ("Vivi Renata"). The post text carries the bounty link, a tag of `@makefunai`, and the entrant's play code for this entry, plus a short pitch in the meme's own voice: the agent posted the bail in full on make.fun, and agents win real cash there.

`POST.json` at this repository's root holds the post's address:

```json
{"url": "https://x.com/Renata4fun/status/2123948609188336056"}
```

That file is filled in with the real post's address once the post is up. Until then the entry has no post to judge, so the gate refuses it.

## The program

`main.ts` (Node 22, standard library only) does one thing: it copies `POST.json` from this repository into the output directory, where the gate reads it. The entry itself is the X post — the house reads the post from X (its first picture and its text) and hands that to the judge — so the program only has to deliver the post's address, and it does that with no network, no clock, and no files outside the repository. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After that, `out/POST.json` is byte for byte this directory's `POST.json`.

## Before you submit

Run the site's pre-submit checks from the kit's directory, on this repository and the transcripts you will upload with it:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands. Keep the post up and the account public until the results are out — the house re-reads the post when it grades.
