# Svelte Installation Guide

This guide will help you set up a Svelte project from scratch.

## Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)

## Install Degit in Local Computer

Degit is used to clone repositories without their history. Install it globally:

```sh
npm install -g degit
```

## Install Svelte in a New Project Folder

To create a new Svelte project using Degit, run:

```sh
npx degit sveltejs/template project_name
cd project_name
npm install
npm run dev
```

After running the last command, open [http://localhost:5173](http://localhost:5173) in your browser to see your Svelte app in action.

## Building for Production

To create an optimized production build, run:

```sh
npm run build  # or yarn build / pnpm build
```

The output will be available in the `public/` folder.

## Running in Preview Mode

To preview the built application:

```sh
npm run preview  # or yarn preview / pnpm preview
```

## Additional Resources
- [Svelte Official Documentation](https://svelte.dev/docs)
- [Degit](https://github.com/Rich-Harris/degit)
