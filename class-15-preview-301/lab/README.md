## Friday afternoon lab:

  1. With your project team, do the "Bob, Carol, Ted, and Alice" merge conflict exercise at the bottom of this document
  2. Discuss project possibilities with your team, going over existing ideas and coming up with new ones. We'll discuss each team's project thoughts in class tomorrow. You don't need to be finalized by then, but let's talk about where you are.
  3. Make a plan to make a plan for how you'll do planning over the weekend.
  4. Set up a Slack group for your team.
  5. Design and order swag for your team: t-shirts, coffee mugs, bumper stickers, etc. Just kidding. You're not a startup blowing through its funding!
  6. Do any mop-up and catch-up on your Bus Mall project (and your Salmon Cookie project, too). Let's get into new week with those things totally put to bed so that we can focus on the next steps.

###What we need to see in your Project Plans on Monday morning

- Every single little bit of planning you have: be able to explain your problem domain and share as much detail as possible on your approach to solving it.
- User stories!
- Flowcharts or other evidence of algorithmic approach as appropriate
- Details on any resources you're planning on using (APIs, libraries, etc.)
- Any of these if you've thought about them: Image assets? Color palettes? Typographic ideas?
   - Wireframe sketches of your pages
   - Anything else you have...

### Team Workflow

  - GitHub Issues, Trello, waffl.io, etc.
  - It is good to have a Git plan on paper (or a whiteboard) that everyone must follow
  - Each team will be expected to do a 5-10 minute standup meeting with at least one member of the instructional staff at the beginning of each day and at some point in the afternoon. Those will begin on Monday afternoon. No set time, just when your team is assembled and the instructional staff are free.
  - Look over and discuss the document on GitHub workflow for teams that is in this repo.


## Merge Conflict Exercise

Merge conflicts occur when files get out of sync between GitHub and a user's local codebase, and Git becomes unsure of where `HEAD` really is.

Let's describe how a pretend team would get into that situation and then extricate themselves from it.

Assign a member of your team to each character, and then do what they do. And do ONLY what they do.

One person should create a repository called `merge-conflict-exercise` and add all other teammates as Collaborators from the menu on the left of the Settings tab. Each member then clones (not forks) that repo.

Our sample team has four members: Bob, Carol, Ted, and Alice. One member adds a file called `FUBAR.md` to the `master` branch, pushes it to GitHub, and then everyone does a `git pull origin master`.

When we start, everyone is totally in sync and freshly pulled from `master` on their individual laptops, and has `FUBAR.md`. Bob and Carol are pair-programming one feature in `FUBAR.md` on Carol's laptop in a new feature branch, and Ted and Alice are working on another feature in a different non-master feature branch on Ted's laptop, also in `FUBAR.md`.

***Do this exercise four times: once with each team member in each role.***

For the purposes of this exercise, the work you're doing on a feature, always in `FUBAR.md`, consists of adding a sentence or two of "This is what Bob & Carol did on Bob's computer when working on the first feature" and maybe a joke or something to keep your teammates amused.

Bob and Carol get their feature finished and do a A-C-P of their branch from Carol's laptop and create a PR. Ted & Alice review the feature, deem that it is good and subsequently merge it. Ted & Alice then do a `git pull origin master` into their feature branch on Ted's laptop ONLY and continue working on that feature.

In the meantime, Bob & Carol have switched to Bob's laptop, started a new feature branch in `FUBAR.md`, and started working on it. They did not do a `git pull origin master` and will live to regret it. They finish that feature at the same time that Ted & Alice finish their feature. Each team does an A-C-P and makes a PR. They review each other's PRs and attempt to merge them.

Chaos ensues. Try to get it sorted out, referring to the instructions on the Git workflow document in the class repo. Get everyone's individual laptop back in sync by doing a `git pull origin master` into `master` until Git stops complaining.

Then they switch partners, of course. Bob & Alice start a quick new feature on her laptop in the `master` branch and Ted & Carol start another new feature of their own, also in `master`. They finish these quick features, and attempt to A-C-P and create/merge PRs.

**MERGE CONFLICTS** erupt like a horde of screaming sugar-filled children in a Chuck-E-Cheese.

It's time to get them sorted out.

---

How could these problems have been prevented?

Review the workflow on Bob & Carol & Ted & Alice and try to identify all of the individual things that they did wrong **AND** all of the things that they should have done but failed to do.

Take a look at the network graph, too. That can be enlightening.

For today's lab assignment in Canvas, submit your individual thoughts on this exercise and what you learned from it.
