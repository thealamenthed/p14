/**
 * Composant Select réutilisable pour les listes déroulantes
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.id - L'identifiant unique du select
 * @param {string} props.name - Le nom du select (utilisé pour le formulaire)
 * @param {string} props.value - La valeur sélectionnée
 * @param {Function} props.onChange - Fonction appelée lors du changement de sélection
 * @param {Array<string|Object>} [props.options=[]] - Liste des options. Peut être un tableau de strings ou d'objets {value, label}
 * @param {string} [props.placeholder="Select an option…"] - Texte affiché par défaut
 * @param {string} [props.className=""] - Classes CSS supplémentaires
 * @returns {JSX.Element} Un élément select stylisé avec Tailwind CSS
 */
export default function Select({id, name, value, onChange, options = [], placeholder = "Select an option…", className = ""}) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 bg-white ${className}`}>
      <option value="">{placeholder}</option>
      {options.map((option) => {
        if (typeof option === "string") {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        }
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
