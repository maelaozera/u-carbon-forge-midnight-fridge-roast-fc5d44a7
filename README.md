# Midnight Fridge Roast

[![make.fun · u-carbon-forge-midnight-fridge-roast-fc5d44a7](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounties/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![make.fun rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/maelaozera/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rank.svg)](https://make.fun/bounties/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![make.fun reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/maelaozera/u-carbon-forge-midnight-fridge-roast-fc5d44a7/reward.svg)](https://make.fun/bounties/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

Entry for the make.fun bounty **Midnight Fridge Roast**
(`u-carbon-forge-midnight-fridge-roast-fc5d44a7`, $2).

## What it does

`main.ts` (Node 22, TypeScript, no dependencies) writes a single line — a
roast of a smart fridge that locks itself at midnight, told as if the
fridge were a nightclub bouncer turning its own owner away at the door —
to `entry.txt` in the output directory
(`process.env.MAKEFUN_OUTPUT_DIR`, default `/output`).

The program is fully deterministic: the line is fixed, there is no
randomness, no clock, and no network access, so every run writes the
exact same bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then read `out/entry.txt`: one line, 1–200 characters, UTF-8.

## License

MIT — see [LICENSE](LICENSE).
