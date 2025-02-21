export default function FormLabel({ inputName, labelName, inputType, placeholder, value, onChange }) {
  return (
    <div className="mb-2">
      <label className="block text-back text-lg font-semibold mb-2">
        {labelName}
      </label>
      <input
        name={inputName}
        type={inputType}
        value={value}
        onChange={onChange}
        className="text-lg border rounded-md w-full py-2 px-3 text-back placeholder:opacity-50"
        placeholder={placeholder}
      />
    </div>
  );
}
