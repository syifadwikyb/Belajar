# 🌟 Create React + Vite Project with Tailwind CSS

### Create New Project React.js
```
npm create vite@latest (project-name) -- --template react
cd (project-name)
npm install
npm run dev
```

### Install Tailwind.css
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### App.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Open Terminal
```
npm run dev
```

### Documentations
- 📖 [Dokumentasi Vite](https://vitejs.dev/guide/)
- 📖 [Dokumentasi React](https://reactjs.org/)
- 📖 [Dokumentasi Tailwind CSS](https://tailwindcss.com/docs)
