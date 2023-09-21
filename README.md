# Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Setup/Implementation](#setup/implementation)
- [Available Scripts](#available-scripts)
  - [pnpm cypress:open](#pnpm-cypress:open)
  - [pnpm cypress:test:e2e](#pnpm-cypress:test:e2e)
  - [pnpm local](#pnpm-local)
- [Instructions]

# General Info

The purpose of this project is to test your knowledge and abilities with Cypress.

### Technologies

- React v18.2.0
- Typescript v5
- Zod
- [MUI](https://github.com/mui-org/material-ui)
- pnpm
- Emotion
- date-fns
- cypress

This project utilizes pnpm as a package manager. You may use either npm or pnpm to run this project. To install pnpm, run the following command:

# Setup/Implementation

Currently, development is using `node` and `pnpm`. You can find the current version utilized in this project in the `.tool-versions` file. If you have `asdf` installed, you can run `asdf install` to install the correct version of `node` and/or `pnpm`.

**If you don't have node installed, then install it locally: [nodejs](https://nodejs.org/en/download/) or via asdf [website](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)**
**If you don't have node installed, then install it locally: [nodejs](https://nodejs.org/en/download/) or via asdf [website](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)**

- If you're using asdf to control your node version for other projects, you may need to install nodejs version 19.2.0 and pnpm version 8.4.0:

  ```bash
  asdf install nodejs 19.2.0
  asdf install pnpm 8.4.0
  ```

  the .tool_versions file should default to this version but if you run into errors you can set your shell version via:

  ```bash
  asdf shell nodejs 19.2.0
  asdf shell pnpm 8.4.0
  ```

  Because our project has a .tool_versions file, asdf will automatically set your shell version to the version specified in the .tool_versions file. If you don't have a .tool_versions file, you can set your shell version via the above command.

1. Install dependencies

- pnpm

  ```bash
   pnpm install
  ```

- npm
  ```bash
   npm install
  ```

2. Run Cypress or run tests

- npm

  ```bash
  npm run cypress:open
  or
  npm run cypress:test:e2e
  ```

  This will run the project on port 5173 (http://localhost:5173/signin) & open the Cypress runner.

- pnpm

  ```bash
  pnpm cypress:test:e2e
  or
  pnpm cypress:test:e2e
  ```

  Runs all of the e2e tests in headed mode without opening cypress runner.

# Available Scripts

### `pnpm cypress:open`

### `npm run cypress:open`

Launches the cypress runner in the interactive mode.<br>

### `pnpm cypress:test:e2e`

### `npm run cypress:test:e2e`

Runs all of the e2e tests in headed mode without opening cypress runner.<br>

# Instructions

Please provide the following test cases:

1. Should mount the SignIn without the header
2. The user login process <br>
   - The user should be able to login with email and password (any username and password is valid)
   - The user should not be able to login without entering an email and password
   - The user should be redirected to the users page after login
   - The user should be able to logout(found in the header menu)
3. The user should be redirected if not authenticated
   - The user should be redirected to the signin page if not authenticated and attempts to visit /users
4. The user should be able to edit an item in the list
   - User should be able to click on an existing item and have the drawer open
   - The user should be able to edit any of the fields
   - The user should be able to save the changes.
   - Click on the currently edited item to ensure the changes were saved
5. The user should be able to edit an item in the list
   - Item should not save if the name already exists in the list (case sensitive)
   - Submit button should be disabled if the name is empty
   - Should be able to add an item to the list
