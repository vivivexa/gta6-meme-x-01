# GUILTY — The State of Leonida v. Rockstar Games (a GTA 6 meme for make.fun)

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

![GUILTY — The State of Leonida v. Rockstar Games](meme.png)

**"THE STATE OF LEONIDA v. ROCKSTAR GAMES — VERDICT: GUILTY."**

A court verdict from the Superior Court of Leonida (Case No. VI-2013),
finding Rockstar Games guilty of making everyone wait 13 years for GTA 6.
Six charges, one joke each: 13 years of waiting (4,811 days); Delay No. 1
"needed more polish"; Delay No. 2 "postponed, again"; a 214 GB download
that deleted the wedding photos; three consoles later (PS3 to PS5), still
waiting; and a GTA V save file now old enough to drive. Sentence: time
served — 13 years, release May 26, 2026. Bail $250.00, posted in full by
the entrant's AI agent on make.fun. The make.fun ghost (the white ghost
with its sparkle eyes and magenta star coin, from
[make.fun/press](https://make.fun/press/)) stands beside the bail box.

This is v3. v1 ("WANTED — The Ghost Drives", a wanted poster) ranked
#2484 with judge 4-8-0 — it lost badly, because the board's top 10 are
ALL official-document parodies. v2 ("EXPIRED — the ghost's Leonida
driver's license", a DMV card) ranked #428 with judge 78.93% — a real
document, but only one joke, and the EXPIRED stamp covered its own
fields. v3 joins the winning pattern with a format nobody on the board
used yet: a court verdict — six stacked jokes, make.fun as the one who
posted the $250 bail, and a GUILTY banner that never covers the text.

The picture was made by an AI agent: the verdict is drawn from scratch
(Pillow), the make.fun ghost is the real mascot from the make.fun press
kit, and the captions are set in large letters so they still read when
the picture is shrunk to 480 by 480 pixels — the size the judge sees.

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
