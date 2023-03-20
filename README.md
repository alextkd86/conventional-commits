# conventional-commits
How to make professional commits

We are going to use several tools, like:
  - HUSKY
  - LINT-STAGED

Steps to following (Only once when we create the project):
1. Execute `npm init` to create a new project
2. Execute `git init` to create a git repository, otherwise we cannot install Husky.
3. Execute `npm install -D husky lint-staged` to install as devDependencies those 2 libraries.
    * Husky is based on GitHooks. It is several scripts that executes before or after some git commands, like a commit or push.
    * Lint-Staged is able to know what files have been modify, so only pass the linter for those files.

Configuramos todo lo necesario para sacarle provecho a estas dos librerías:
1. Nos ceramos un archivo llamado `lintstagedrc` en la raiz del proyecto. 
    * Es un archivo `json` en el que indicamos a qué tipos de archivos se va a ejecutar `eslint`
2. Ejecutamos `npx eslint --init` para instalar y configurar `eslint`. Seguimos las instrucciones que nos van apareciendo en la consola y finalmente nos creará un archivo `.eslintrc.json` o `.eslintrc.yml` dependiendo de la opción que elijamos. 
3. Ahora añadimos un script que se llame `prepare` y que llame a `husky-install` a nuestro proyecto ejecutando el siguiente comando: 
    * 2.1. Si npm < 9   -->   `npm set-script prepare 'husky install'`.
    * 2.2. Si npm >= 9  -->   `npm pkg set scripts.prepare='husky install'`
        * Este comando lo que hace es añadir en el `package.json` un nuevo script que quedaría así: `"prepare": "husky install"`
4. Ejecutamos el script que hemos cerado anteriormente: `npm run prepare`
    * Este comando lo que hace es instalar los GitHooks dentro de la carpeta .husky que la crea a la misma vez.
5. Vamos a añadir un GitHook, concretamente el de precommit, para que antes de hacer un commit se ejecute lo que nosotros queramos, en nuestro caso, haremos que se ejecute `lint-staged`:
    * --> `npx husky add .husky/pre-commit "npx lint-staged"`
    * Una vez lo ejecutemos podemos ver dentro de la carpeta .husky, el GitHook de pre-commit.
6. Vamos a añadir el GitHook de pre-push, para que antes de hacer push se ejecuten los tests:
    * --> `npx husky add .husky/pre-push "npm run test"`
7. Para asegurarnos que no nos falla eslint en los archivos donde no queremos que se pase, nos creamos el archivo `.eslintignore` e incluimos las rutas y archivos donde no queremos que se pase `eslint`


- Install en VSCode
  - Download the extension: `Conventional Commits` --> To use, `cmd + shift + p` and search `Conventional Commits``º