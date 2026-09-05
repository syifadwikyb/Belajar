import React, { useState } from "react";
import { auth } from "../../Config/Firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import FormLabel from "../FormLabel";
import FooterAuth from "../FooterAuth";
import BorderButton from "../BorderButton";
import AuthLeft from "../AuthLeft";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function RegisterMain({ type = "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validateForm = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format.");
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!validateForm()) return;

    setLoading(true);

    try {
      // 1️⃣ Membuat akun di Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // 2️⃣ Mengirim email verifikasi
      await sendEmailVerification(user);

      // 3️⃣ Logout otomatis agar pengguna harus verifikasi dulu
      await signOut(auth);

      alert(
        "Registration successful! Please check your email and verify your account before logging in."
      );
      window.location.href = "/login";
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      setErrorMessage(
        error.code === "auth/email-already-in-use"
          ? "Email is already in use."
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div className="flex gap-6">
        <AuthLeft />
        <div className="bg-primary w-[500px] rounded-3xl p-12 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-10 text-black text-center">
              Register
            </h1>
            <p className="text-lg font-medium text-slate-800">
              Welcome, please enter your details
            </p>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {errorMessage}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <FormLabel
                inputName="email"
                labelName="Email"
                inputType="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <FormLabel
                  inputName="password"
                  labelName="Password"
                  inputType={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={handleChangeField}
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

              <div className="relative">
                <FormLabel
                  inputName="confirmPassword"
                  labelName="Confirm Password"
                  inputType={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  value={confirmPassword}
                  onChange={handleChangeField}
                />
                <button
                  type="button"
                  className="absolute right-3 top-11 text-gray-600 hover:text-black focus:outline-none"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <AiFillEyeInvisible size={24} className="text-black" />
                  ) : (
                    <AiFillEye size={24} />
                  )}
                </button>
              </div>
              <BorderButton text="Register" loading={loading} />
            </form>
          </div>
          <FooterAuth type={type} />
        </div>
      </div>
    </div>
  );
}
