Creating a branch:

git checkout -b **branch name**

What local branch am I currently working on?

git branch

Switch from one branch to another:

git checkout <**branch name**

Delete a local branch:

git branch -d **branch name**

While working in a group on a project, follow the process (a) at the beginning of each day,
(b) any time a branch was merged to the master branch through a pull request:

Navigate to master branch (local computer) and pull the most up-to-date version of the master branch from github. Switch back to the branch you are working on and merge it with the master branch. Fix any merge conflicts. Add and commit your changes. Switch back to the master branch and repeat the process ( just in case anyone merge code with the master branch while you were fixing merge conflicts ).

Once your branch is up-to-date with the master, push your code to your branch. Go to your repository on github and create a pull request. Notify the lead dev that you created a pull request.

Example:

git checkout master <br />
git pull <br />
git checkout <branch name> <br />
git merge master <br />
** fix merge conflicts, if any ** <br />
git add . <br />
git commit -m 'fixed merge conflicts' <br />
git checkout master <br />
git pull <br />
git checkout **branch name** <br />
** code is now up-to-date with master branch ** <br />
git push origin -u **branch name** <br />
