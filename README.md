# Cognac

Farm cognac for fun and profit.

## About

Welcome to the `cognac` repo!

Cognac is a script that will automatically try and [Dive for treasure](https://kol.coldfront.net/thekolwiki/index.php/I_Refuse!). The script should work regardless of your loadout. However, it _really_ likes non-combat skills and equipment. It is up to you to determine whether or not the script is right for you.

To squeeze the most juice out of this script, run the script with as many clanmates as you can! By yourself, `cognac` averages one [I Refuse](https://kol.coldfront.net/thekolwiki/index.php/I_Refuse!) for every 30 adventures spent. With three clanmates, you will dive about once every _10_ adventures. That means _three times as much cognac_!

## Install

```bash
git checkout https://github.com/tigerinanenet/cognac.git release
```

## Customization

Properties you can set in KoLMafia to customize the way `cognac` runs.

### cognac_clan

Required - Set the clan in which cognac will run.

<pre>set cognac_clan = Stony's Shack</pre>

You must be whitelisted to the clan, and must have permissions to access hobopolis, as well as write on the clan whiteboard.

### cognac_skipGarbo

Optional - Set this flag if you want to be prompted when you try to run `cognac` without first running [garbo](https://github.com/Loathing-Associates-Scripting-Society/garbage-collector).

<pre>set cognac_skipGarbo = true</pre>

### cognac_useAsdon

Optional - Set this flag if you want `cognac` to automatically put your asdon in your workshed.

<pre>set cognac_useAsdon = true</pre>

### A day in the life

Cognac will perform the following tasks to the best of its ability:

- Navigate your sewers, getting a cagebot if possible.
- Churn through your townsquare (Assumes you're already buffed up to overkill). Stops after Purple Light District is unlocked.
- Dive in the heap until the heatdeath of the universe, or you run out of adventures.

Cognac does its best not to hurt any hobos in PLD/The heap in its quest for hobos. That way, you will only ever need to open up one instance of hobopolis for all your cognac needs.

Cognac will also

- Set the ballroom song using free resources
- Deploy your fallbot
- Handle your wanderers
  - Voters
  - Kramco
  - Proto ghost
  - Digitized embezzlers

### How to make cognac happy

Cognac will work for any loadout. However, there are a few star items that really shine in this script.

- Greatest american pants
  - It's basically a free +20% adventures, since we are running all the time.
- Mafia thumb ring
  - It triggers on free run aways. It's free adventures.
- June Cleaver
  - More free adventures
- Bowling ball
  - We like free runs that don't cost anything
- Asdon
  - 10% NC
  - More free runs

### How to make cognac sad

Please reserve a hobopolis clan for use by `cognac`. The script keeps track of the stench level in the heap. If someone changes the stench level manually, say by adventuring in the heap, `cognac` will stop behaving.
