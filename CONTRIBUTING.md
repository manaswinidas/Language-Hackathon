# Contributing to Sonores
Thanks for taking interest in Sonores. The main aim of this project is to translate the labels of a form from English to Hindi and also enable text-to-speech and speech-to-text features using specific API.
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Getting Started
Go to the [project repo](https://github.com/manaswinidas/Sonores-project) and fork it. And then go through the [README file](https://github.com/manaswinidas/Sonores-project/blob/develop/README.md) which has all the instructions to setup and run the project. Before making the changes run the following command to add remote repository:
```git
git remote add upstream https://github.com/manaswinidas/Sonores-project
```
Once you are done with the setup, you can move forward to development.

### Starting Development

#### Finding issue
Go through the [issue tracker](https://github.com/manaswinidas/Sonores-project/issues) to contribute. In case the issue that you want to solve is not there in the list, you can create one. Please remember to claim the issue and start working after you have been assigned the issue by any of the maintainers.

#### Creating a new branch 
Before you start making the changes, create a new branch using the following command:
```git
git checkout -b <branch-name>
```

#### Create your patch
Make necessary changes according to the issue.

#### View your changes
After making the required fix, you can view the effects of your changes by reloading the extension in your local [chrome://extensions/](chrome://extensions/). Also, reload the mock web and click on the extension.

#### Pull Request Process
Once you have made the changes push it to the repo using the following process.
1. Add all the files that have the required changes.
```git
git add .
```
2. Now you need to commit the changes. Please use an appropriate commit message and follow this [git commit message guidelines](https://udacity.github.io/git-styleguide/).
```git
git commit
```
3. Rebase the PR.
It may happen that during development, someone else has submitted a PR and that is merged. You need to rebase with current upstream/develop.
```git
git fetch upstream
git rebase upstream/develop
```

4. Push the changes to your fork.
```git
git push <remote> <branch>
```
5. Please create a Pull Request from GitHub to Sonores-project: develop. Please provide a very brief Title and description of PR. Link the PR to issue by adding #issueNumber at the end of the description. Also, add keywords like "Fixes" or "Resolves" in case the PR closes the issue and "Addresses" in case the PR doesn't fully solve the issue. For example: "Fixes: #12".

#### PR Review
Your PR will be reviewed soon from the maintainers of the project. If they suggest changes, do all the changes, commit the changes, rebase the branch, squash the commits and push the changes. If all will be fine, your PR will be merged.

That's it! Thank you for your contribution!

### Note
Contributions can be small or big, it does not matter. We even love to receive a typo fix PR. Adding feature or fixing a bug is not the only way to contribute. You can send us PR for adding documentation, fixing typos or adding tests.


