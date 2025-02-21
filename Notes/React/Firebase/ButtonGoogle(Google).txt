import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../Config/Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function ButtonGoogle() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onGoogleSignIn = async () => {
    setErrorMessage(""); // Reset error
    setLoading(true);
  
    try {
      const result = await signInWithPopup(auth, googleProvider);
  
      // 🔹 Cek apakah email sudah diverifikasi
      if (!result.user.emailVerified) {
        await signOut(auth); // Logout otomatis jika email belum terverifikasi
        setErrorMessage("Please verify your email before logging in.");
        setLoading(false);
        return;
      }
  
      console.log("Google Sign-In Success:", result.user);
      navigate("/products");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
  
      if (error.code === "auth/popup-closed-by-user") {
        setErrorMessage("Popup closed before completing sign-in. Please try again.");
      } else if (error.code === "auth/cancelled-popup-request") {
        setErrorMessage("Multiple popups blocked. Please try again.");
      } else {
        setErrorMessage("Failed to sign in with Google.");
      }
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div className="text-center">
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      {/* 🔹 Tombol Google Login dengan Desain yang Diminta */}
      <button
        className="py-2 px-6 font-semibold rounded-xl text-black text-lg bg-white w-full flex items-center justify-center gap-4 border border-gray-300 hover:bg-gray-100"
        type="button"
        onClick={onGoogleSignIn}
        disabled={loading}
      >
        <FcGoogle size={24} />
        {loading ? "Loading..." : "Sign in with Google"}
      </button>
    </div>
  );
}
