import { Link } from "react-router-dom";

export default function FooterAuth({type}) {
  return (
    <div>
      <p className="text-lg text-black mt-5 text-center">
        {type === "login"
          ? "Don't have account? "
          : "Already have an account? "}

        {type === "login" && (
            <Link to="/register" className="font-semibold text-blue-600">
                Register
            </Link>
        )}      

        {type === "register" && (
            <Link to="/login" className="font-semibold text-blue-600">
                Login
            </Link>
        )}   
      </p>
    </div>
  );
}
