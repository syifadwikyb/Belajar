import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Config/Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import BorderButton from "../BorderButton";
import FormLabel from "../FormLabel";
import FooterAuth from "../FooterAuth";
import "../../App.css";
import AuthLeft from "../AuthLeft";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function LoginMain({ type = "login" }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // 🔍 Cek apakah email sudah diverifikasi
      if (!user.emailVerified) {
        await signOut(auth); // Langsung logout jika belum diverifikasi
        setErrorMessage("Please verify your email before logging in.");
        setLoading(false);
        return;
      }

      console.log("Login Success:", user);
      navigate("/products");
    } catch (error) {
      console.error("Login Error:", error.code, error.message);
      setErrorMessage("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div className="flex gap-6">
        <AuthLeft />

        <div className="bg-primary w-[500px] rounded-3xl p-12 flex flex-col justify-between">
          <div className="">
            <h1 className="text-4xl font-bold mb-10 text-black text-center">
              Login
            </h1>
            <p className="text-lg font-medium text-slate-800">
              Welcome, please enter your details
            </p>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {errorMessage}
              </p>
            )}

            <form onSubmit={handleLogin}>
              <FormLabel
                inputName="email"
                labelName="Email"
                inputType="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* 🔹 Password Field with Show/Hide Feature */}
              <div className="relative">
                <FormLabel
                  inputName="password"
                  labelName="Password"
                  inputType={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-11 text-gray-600 hover:text-black focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible size={24} className="text-black" />
                  ) : (
                    <AiFillEye size={24} />
                  )}
                </button>
              </div>

              <BorderButton text="Login" type="submit" loading={loading} />
            </form>
          </div>

          <FooterAuth type={type} />
        </div>
      </div>
    </div>
  );
}
