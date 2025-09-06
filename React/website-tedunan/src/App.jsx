import Header from "./components/Header";
import React from "react";
import "./App.css"; // Pastikan ini ada untuk mengimpor Tailwind CSS

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="home" className="h-screen bg-green-50">
          <h2 className="text-center pt-10 text-3xl font-bold">Home Page</h2>
        </section>
      </main>
    </>
  );
}
