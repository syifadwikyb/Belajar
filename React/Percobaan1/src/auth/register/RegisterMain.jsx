import BorderButton from "../../component/Button";
import FormLabel from "../FormLabel";
import "../../App.css";
import FooterAuth from "../FooterAuth";

export default function RegisterMain({type = "register"}) {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your detail
        </p>
        <form action="">
          <FormLabel
            inputName="name"
            labelName="Name"
            inputType="text"
            placeholder="Insert Your Name"
          />

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

          <FormLabel
            inputName="confirmPassword"
            labelName="Confirm Password"
            inputType="password"
            placeholder="********"
          />
        </form>

        <BorderButton text="Login" />
        <FooterAuth type={type}/>
      </div>
    </div>
  );
}
