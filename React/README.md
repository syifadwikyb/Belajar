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
npm install -D tailwindcss@3 postcss autoprefixer
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

### Install React Router
```
npm install react-router-dom
```

### Penggunaan React Router
Masuk ke main.jsx
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Halaman yang dipilih/>,
    errorElement: <ErrorPage/> //Untuk memanggil Error Page
  },
  {
    path: "/",
    element: <Halaman yang dipilih/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
```

### Membuat Error Page
```
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {error && (
                <p>{error.statusText || error.message || "Unknown error occurred"}</p>
            )}
        </div>
    );
}
```

### Open Terminal
```
npm run dev
```

### Documentations
- 📖 [Dokumentasi Vite](https://vitejs.dev/guide/)
- 📖 [Dokumentasi React](https://reactjs.org/)
- 📖 [Dokumentasi Tailwind CSS](https://tailwindcss.com/docs)
