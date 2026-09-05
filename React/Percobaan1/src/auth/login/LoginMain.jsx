import { useNavigate } from "react-router-dom";
import BorderButton from "../../component/Button";
import FormLabel from "../FormLabel";
import "../../App.css";
import FooterAuth from "../FooterAuth";
import { Container } from "postcss";

export default function LoginMain({ type = "login" }) {
  const navigate = useNavigate();

  const HandleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    console.log("Login");
    navigate("/products");
  }

  return (
    <Container>
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your detail
        </p>
        <form onSubmit={HandleLogin}>
          <FormLabel
            inputName="email"
            labelName="Email"
            inputType="text"
            placeholder="example@gmail.com"
          />

          <FormLabel
            inputName="password"
            labelName="Password"
            inputType="password"
            placeholder="********"
          />

          <BorderButton text="Login" type="submit"/>
        </form>

        <FooterAuth type={type} />
      </div>
    </div>
    </Container>
  );
}