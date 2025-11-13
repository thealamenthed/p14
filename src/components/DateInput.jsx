/**
 * Composant DateInput pour les champs de date
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.id - L'identifiant unique de l'input
 * @param {string} props.name - Le nom de l'input (utilisé pour le formulaire)
 * @param {string} props.value - La valeur de la date au format YYYY-MM-DD
 * @param {Function} props.onChange - Fonction appelée lors du changement de valeur
 * @param {string} [props.className=""] - Classes CSS supplémentaires
 * @returns {JSX.Element} Un élément input de type date stylisé avec Tailwind CSS
 */
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
