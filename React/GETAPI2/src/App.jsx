import { useState } from "react";
import "./App.css";
import { getSurahList } from "./api";
import { useEffect } from "react";

export default function App() {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    getSurahList().then(setSurah).catch(console.error);
  }, []);

  useEffect(() => {
    const handlePlay = (event) => {
      document.querySelectorAll("audio").forEach((audio) => {
        if (audio !== event.target) {
          audio.pause();
        }
      });
    };

    document.addEventListener("play", handlePlay, true);

    return () => {
      document.removeEventListener("play", handlePlay, true);
    };
  }, []);

  return (
    <div className="bg-slate-800 min-w-full mx-auto text-center">
      <div className="rounded-lg">
        <div className="grid grid-cols-4 gap-6">
          {surah.map((surat) => (
            <div className="bg-white" key={surat.nomor}>
              <h3>{surat.nama}</h3>
              <h2>{surat.nama_latin}</h2>
              <p dangerouslySetInnerHTML={{ __html: surat.deskripsi }}></p>
              <audio controls>
                <source src={surat.audio} type="audio/mpeg" />
                Browser tidak mendukung audio.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
