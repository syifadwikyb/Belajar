import BorderButton from "../../component/BorderButton";
import FormLabel from "../FormLabel";

export default function RegisterMain() {
  return (
    <div>
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

        <FormLabe
          inputName="email"
          labelName="Email"
          inputType="text"
          placeholder="example@gmail.com"
        />

        <FormLabe
          inputName="password"
          labelName="Password"
          inputType="password"
          placeholder="********"
        />

        <FormLabe
          inputName="confirmPassword"
          labelName="Confirm Password"
          inputType="password"
          placeholder="********"
        />
      </form>

      <BorderButton text="Login" />
    </div>
  );
}
