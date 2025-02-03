import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL
});

// Fungsi untuk mengambil data dari API
const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// Ambil daftar film populer
export const getSurahList = () => fetchData("/api/surah");

// Contoh pemanggilan di dalam kode:
// getMovieList().then((data) => console.log("Popular Movies:", data));
// searchMovie("Inception").then((data) => console.log("Search Results:", data));
