import BorderButton from "./BorderButton";

export default function ButtonMain() {
  return (
    <div className="flex gap-x-3">
      <BorderButton text="Login" variant="bg-red-700" />
      <BorderButton text="Register" variant="bg-slate-700" />
    </div>
  );
}
