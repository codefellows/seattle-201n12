###Understanding Git and GitHub

####What is Git? 
It's a way of storing and controlling versions of files on your computer.

####What is GitHub?
A cloud service where you can 'store' your versions online.

####How to save versions on your computer:
	1. Make or move into the directory you want to 'save'.
	2. Initialize Git - in the terminal.

			$git init

		This will initialize git in a hidden .git folder (you can check this with ls -a)
		This hidden folder will allow you to track and save versions of files in this folder

	3. Check the status of git in that directory.

			$git status

		The output from terminal should read "On branch master" and then list Untracked files
		it will also prompt you to git add to track

	4. Add files to be tracked.

			$git add <filename>

		This will tell git that you want to 'track'	that file and the changes made to it

	5. Commit track snapshot to memory.

			$git commit -m "add a message here"

		Here you are telling git to actually take the snapshot, be sure to add -m and a message in quotes
		This message you be a human readable note about what has been changed since the last snapshot

		At this point, your computer has taken a picture of the code at this moment and you are free to modify your files and repeat the cycle.

####How to add a commit to GitHub:

	1. Log on to your account on GitHub, in the upper right hand corner select the *+* sign, from the drop down menu select NEW REPOSITORY.

	2. Enter in a repository name.

	3. Select Public or Private. GitHub allows each user to have several free private files, however as new developers it is great to beef up your public repos for potential employers to see how you code

	4. Click the create repository button.

	5.  You will be directed to a new page that will tell you how to create a repo locally. If you have already saved a version on your computer (see How to save version on your computer), skip to the line that reads

			git remote add origin https://github.com/<yourUserName>/<yourRepoName>.git

		Copy this line and add it in your terminal. This tells your computer where to 'push' files to online

	6. Push your commits up to GitHub
		Once you have successfully committed files in terminal run

			$git push -u origin master

		This will push your commits to your master branch on GitHub.

	7. Refresh your page on GitHub, you should now see a repo with the files you pushed up from your computer.

		Now you are free to continue working (and taking more snapshots) on your computer

		The next time you want to take a snapshot, these are the commands:

			$git status
			$git add <filename>
			$git status
			$git commit -m "your message here"
			$git status
			$git push origin master
