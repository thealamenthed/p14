/**
 * Composant Input réutilisable pour les champs de formulaire
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.id - L'identifiant unique de l'input
 * @param {string} props.name - Le nom de l'input (utilisé pour le formulaire)
 * @param {string} [props.type="text"] - Le type d'input (text, email, number, etc.)
 * @param {string} props.value - La valeur de l'input (contrôlée)
 * @param {Function} props.onChange - Fonction appelée lors du changement de valeur
 * @param {string} [props.placeholder] - Texte d'aide affiché dans l'input
 * @param {boolean} [props.required=false] - Indique si le champ est requis
 * @param {string} [props.className=""] - Classes CSS supplémentaires
 * @returns {JSX.Element} Un élément input stylisé avec Tailwind CSS
 */
export default function Input({id, name, type = "text", value, onChange, placeholder, required = false, className = ""}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 bg-white ${className}`}
    />
  );
}
