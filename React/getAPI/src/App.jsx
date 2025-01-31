import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";

// VERSI SEDERHANA
export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList().then(setMovies).catch(console.error);
  }, []);

  const search = async (q) => {
    if (q.length > 3) setMovies(await searchMovie(q));
  };

  return (
    <div className="bg-slate-800 min-w-full mx-auto text-center">
      <input className="px-6 py-2 rounded-md"
        type="text"
        placeholder="Cari Film..."
        onChange={(e) => search(e.target.value)}
      />
      <div className=" rounded-lg">
        <div className="grid grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div className="Movie-wrapper bg-white" key={movie.id}>
              <h3 className="Movie-title">{movie.title}</h3>
              <img
                src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="Movie-rate">{movie.release_date}</p>
              <p className="Movie-rate">{movie.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function App() {
//   const [popularMovies, setPopularMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const result = await getMovieList();
//         setPopularMovies(result);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const PopularMovieList = () => {
//     return popularMovies.map((movie, i) => {
//       return(
//         <div className="Movie-wrapper w-full bg-white text-black text-center"key={i}>
//           <div className="Movie-title">{movie.title}</div>
//           <img src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`} alt={movie.title} />
//           <div className="Movie-rate">{movie.release_date}</div>
//           <div className="Movie-rate">{movie.vote_average}</div>
//         </div>
//       )
//     })
//   }

//   const search = async (q) => {
//     if (q.length > 3) {
//         const query = await searchMovie(q);
//         setPopularMovies(query);
//     }
//   };

//   return (
//     <div>
//       <header className="App-header w-screen bg-slate-900 min-h-[100vh] flex flex-col items-center justify-center text-white">
//         <h1 className="text-3xl mb-5">MOVIE</h1>
//         <input
//           type="text"
//           placeholder="Cari Film..."
//           className="h-12 text-xl mb-8 p-4 font-bold text-black"
//           onChange={({target}) => search(target.value)}
//         />
//         <div className="Movie-container w-full justify-center items-center grid grid-cols-4 gap-6">
//             <PopularMovieList/>
//         </div>
//       </header>
//     </div>
//   );
// }
