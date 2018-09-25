# Setting Up A New 201 Code Project

1. Go to your profile page on GitHub, and in the upper right, click on the **+** and select "New repository".
1. Give the repository a name and a description in the provided form fields.
1. Check the box next to ***"Initialize this repository with a README"***.
1. In the ***Add .gitignore*** menu, make no selection. We will manually add a .gitingnore in a later step.
1. In the ***Add a license*** menu, you have multiple options. Feel free to read about them and make a choice; for general open-source use, we recommend the MIT license.
1. Click the green ***Create repository*** button.
1. On the next screen, click the green ***Clone or download*** button on the right side of the screen. Copy the HTTPS link to clone the repository.
1. In your terminal, navigate to  where you want to create this project, and `git clone <the-link-you-copied>`.
1. `cd <project-name>` to navigate into the directory that was created.
1. Next, using the `mkdir` and `touch` commands in your terminal, add in the directories and files needed to complete the following file tree:

```sh
project-directory
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── css/
│   ├── reset.css
│   └── style.css
├── img/
├── index.html
└── js/
    └── app.js
```

The code for the project exists in these files: `index.html`, `app.js`, `style.css`. A note on these names: `index.html` should always be used for the home page of a project because web browsers will look for an `index.html` file when navigating to a directory. In contrast, the names of the `app.js` and `style.css` files are merely convention.

Note that the JS and CSS files are stored in their own directories. This reduces clutter at the root level of the project, especially when more of these files are added. For instance, by the time you get to the end of Code 301, you'll commonly see 5 or 6 CSS files for a given project, and a dozen or more JS files.

When a project has more than a handful of HTML files, it can be helpful to put all of them except `index.html` into a separate directory, such as `pages/`.

What about all of those other files and directories in the project? Following is an explanation of each of those.

## .eslintrc.json

This file holds the project-specific rules for the JavaScript linter. Depending upon the tools used in the process, and the stylistic preferences of a given organization, these rules can vary. It is good practice to include in a project the rules you used when creating it. That way, someone looking at your code will see it with the rules you used, rather than the default rules on their system, which might be different and thus create a lot of needless code editor errors and warnings.

Because the `.eslintrc.json` file name starts with a period, it is a hidden file in the operating system. Recall that hidden files can be viewed in your terminal by adding the `-a` flag to an `ls` command.

There is an `.eslintrc.json` file at the root level of our class repository that you can copy/paste into your project.

## .gitignore

A `.gitignore` file is used to manage what parts of a project will **not** be tracked by Git. This is particularly useful in preventing certain kinds of files from being pushed to a repository on GitHub.

- `.DS_Store` files created by the Mac operating system, which are just unnecessary clutter when found inside a code project
- Any files containing information (such as personal data, access keys, or authentication tokens) that you want to keep private
- Other kinds of files that should only be maintained locally and not pushed to a project's repository (you'll learn more about these in Code 301)

Because the `.gitignore` file name starts with a period, it is a hidden file in the operating sytem. Recall that hidden files can be viewed in your terminal by adding the `-a` flag to an `ls` command.

Following is a sample `.gitignore`; note that lines that start with a `#` are comment lines. Feel free to use this `.gitignore` content for your own projects. Note that when you get to Code 301, you will need a much larger `.gitignore` file, and a sample will be provided for you then.

```sh
# Mac OS files
.DS_Store

# Logs
logs
*.log

# Optional eslint cache
.eslintcache
```

## LICENSE

It is good practice to include a license in all of your code projects to ensure that anyone who uses your code knows the rights and limitations of that use. For general use, the broad open-source MIT license works well.

Read through the license file once you have cloned your repo, and if you are interested, look at and read the other ones that GitHub offers when initializing a new repository.

## README.md

### The purpose of a README

The README document is the first point of entry into a code project, and the fundamental source of documentation. When viewing a project on GitHub, the README appears on the entry page immediately beneath the list of files and directories in the project. You will learn in the coming months that working with code with poor documentation can be a pain, so strive to provide good documentation for your work!

What kind of content should be in the README?

- General project information (what does it do, who wrote it, who collaborated, which tools are used)
- Instructions for installation and use
- Information on the license
- Acknowledgements, etc.

Take a look at the following suggested structures. Note the similarities and differences; there is no absolute right/wrong approach. Consider the information that would be helpful to users of your project, and then set one up that is appropriate to your project:

* [README-Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) by GitHub user [PurpleBooth](https://gist.github.com/PurpleBooth)
* [README](https://gist.github.com/jxson/1784669) by GitHub user [jxson](https://gist.github.com/jxson)
* [Stack Overflow Q/A on "How to write a good README"](https://stackoverflow.com/questions/2304863/how-to-write-a-good-readme)
* [A Beginner's Guide to Writing a Kickass README](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

Lastly, remember to keep your README up to date! Don't just create it and then neglect it!

### Markdown

README files are written in a language called Markdown. It is a quick and easy way to add formatting to your documentation, and all developers should know Markdown. More than anything else, you'll get to know it by just using it a lot. This document is in Markdown, for instance, so view the Raw version of this document in GitHub to see how the headings, lists, code blocks, etc. were created.

If you'd like to do a tutorial on Markdown, [this is a good one](https://www.markdowntutorial.com/).

## reset.css

All browsers come with default settings for things like font sizes, padding, borders, and other visual components. This can be frustrating for web developers because when our work created in one environment is viewed in another environment, there may be differences due to varying values of these default settings.

We recommend using [Eric Meyer's reset.css file](https://meyerweb.com/eric/tools/css/reset/) to "zero-out" all of those values so that you are developing from a clean slate.

## `img/` directory

As we all know, images are a big part of the web. To help contain file-tree clutter with multiple images in a project, it is wise to create an `img/` directory, and potentially subdirectories within there, to store and organize your images.
