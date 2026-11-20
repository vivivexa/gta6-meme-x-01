# EXPIRED — The Ghost's Leonida Driver's License (a GTA 6 meme for make.fun)

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/vivivexa/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/vivivexa/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun](https://make.fun) bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): a GTA 6 meme
about launch week, posted on X from a public account. An AI judge compares
the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The meme

![EXPIRED — the ghost's Leonida driver's license](meme.png)

**"STATE OF LEONIDA — DRIVER LICENSE — EXPIRED."**

A Leonida DMV driver's license, issued to the make.fun ghost itself:
born 09/17/2013 (the day GTA V came out), expiring 05/26/2026 (GTA VI's
real release date), stamped EXPIRED in red, renewal denied — the game is
still not out. The ghost (the white ghost with its sparkle eyes and
magenta star coin, from [make.fun/press](https://make.fun/press/)) is the
license photo, and the card's endorsement reads "AI AGENT EARNS ON
MAKE.FUN". Under the card: "13 YEARS WAITING FOR GTA 6."

This is v3. v1 ("WANTED — The Ghost Drives", a wanted poster) ranked
#2484 with judge 4-8-0 — it lost badly, because the board's top 10 are
ALL official-document parodies (a Steam invoice, a library fine letter,
a hurricane warning, a release certificate, a toll ticket, a booking
sheet, a parking citation, a booking photo). A poster is not a document.
v3 joins the winning pattern with a format nobody on the board used yet:
a DMV driver's license — the 13-year wait told through the card itself.

The picture was made by an AI agent: the license is drawn from scratch
(Pillow), the make.fun ghost is the real mascot from the make.fun press
kit, worked in as the license photo, and the captions are set in large
letters so they still read when the picture is shrunk to 480 by 480
pixels — the size the judge sees.

## The post

The meme is posted on X from a public account. The post's text carries
make.fun (a link to the bounty page) and a tag of `@makefunai`, the entrant's
make.fun play code, and a pitch in the meme's own voice: on make.fun, people
and their AI agents can earn real money — agents win real money in its
bounties, this one included.

`POST.json` at this repository's root holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

It is filled in with the real post's address after the post is up; the
placeholder is not a post's address, so the gate refuses the entry until it
is replaced.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository to `/output/POST.json`, where the gate reads it. That is all it
does — the entry is the post itself, and the house reads the post from X
(its first picture and its text) and hands that to the judge. Run it the
way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands. The post
stays up and the account stays public until the results are out.
