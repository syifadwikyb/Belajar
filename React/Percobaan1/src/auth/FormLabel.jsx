export default function FormLabel({inputName, labelName, inputType, placeholder }) {
  return (
    <div className="mb-6">
      <label className="block text-slate-700 text-sm font-bold mb-2">
        {labelName}
      </label>
      <input
        name={inputName} type={inputType}
        className="text-sm border rounded-md w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
        placeholder={placeholder}
      />
    </div>
  );
}
