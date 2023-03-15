# conventional-commits
How to make professional commits

We are going to use several tools, like:
  - HUSKY
  - LINT-STAGED

Steps to following:
1. Execute `npm init` to create a new project
2. Execute `git init` to create a git repository, otherwise we cannot install Husky.
3. Execute `npm install -D husky lint-staged` to install as devDependencies those 2 libraries.
    * Husky is based on GitHooks. It is several scripts that executes before or after some git commands, like a commit or push.
    * Lint-Staged is able to know what files have been modify, so only pass the linter for those files.
