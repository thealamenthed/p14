export default function DateInput({id, name, value, onChange, className = ""}) {
  return (
    <input
      id={id}
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 bg-white ${className}`}
    />
  );
}
