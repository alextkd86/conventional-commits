# conventional-commits
> How to make professional commits

> If you want to use this project, you only try to execute the following command:
```sh
$ npm run prepare:husky
```

We are going to use several tools, like:
  - HUSKY
  - LINT-STAGED

Steps to follow for create this project from scratch (Only once when we create the project):
1. Execute `npm init` to create a new project
2. Execute `git init` to create a git repository, otherwise we cannot install Husky.
3. Execute `npm install -D husky lint-staged` to install as devDependencies those 2 libraries.
    * Husky is based on GitHooks. It is several scripts that executes before or after some git commands, like a commit or push.
    * Lint-Staged is able to know what files have been modify, so only pass the linter for those files.

We set up everything necessary to make the most of these two libraries:
1. We create a file called `lintstagedrc` in the project's root directory. 
    * "It is a JSON file where we specify which types of files will run `eslint`"
2. We run `npx eslint --init` to install and configure `eslint`. We follow the instructions that appear in the console, and it will eventually create a `.eslintrc.json` or `.eslintrc.yml` file depending on the option we choose. 
3. Now we add a script called `prepare` that calls `husky-install` to our project by executing the following command: 
    * 2.1. If npm < 9   -->   `npm set-script prepare 'husky install'`.
    * 2.2. If npm >= 9  -->   `npm pkg set scripts.prepare='husky install'`
        * "This command adds a new script in the `package.json` file that would look like this: "prepare": "husky install"."
4. We execute the script we created earlier by running: `npm run prepare`
    * "This command installs the GitHooks inside the .husky folder, which is created at the same time.
5. "Let's add a GitHook, specifically the pre-commit hook, so that before making a commit, it executes what we want. In our case, we will make it execute the following: `lint-staged`:
    * --> `npx husky add .husky/pre-commit "npx lint-staged"`
    * Once we execute it, we can see the pre-commit GitHook inside the .husky folder.
6. Let's add the pre-push GitHook so that before pushing, the tests are executed. You can do the following:
    * --> `npx husky add .husky/pre-push "npm run test"`
7. To ensure that ESLint doesn't fail on files where we don't want it to run, we create the `.eslintignore` file and include the paths and files where we don't want `eslint` to be applied.


- Install en VSCode
  - Download the extension: `Conventional Commits` --> To use, `cmd + shift + p` and search `Conventional Commits`

- Install 2 new dev dependencies:
    - `@commitlint/cli`
    - `@commitlint/config-conventional`
    - As follows --> `npm install --D @commitlint/cli @commitlint/config-conventional`
    - Now, we have to create a new file named `commitlint.config.js` in the root directory
    - We must execute --> `npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"` (only once)

- Install `conventional-changelog` to view the changes we are making
    - --> `npm install -g conventional-changelog-cli` (only once)
        - We need to do only once --> `conventional-changelog -i CHANGELOG.md -s -r 0`

- To increment the version number:
    - `npm version major|minor|patch`

Neccessary dependencies to work in TS:
  - --> `npm i @types/node`
  - --> `npm install -D ts-node-dev ts-standard tsx typescript`