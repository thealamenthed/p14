/**
 * Composant FormField qui encapsule un label et un champ de formulaire
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.id - L'identifiant unique du champ (lié au label)
 * @param {string} props.label - Le texte du label
 * @param {boolean} [props.required=false] - Indique si le champ est requis (affiche un astérisque rouge)
 * @param {React.ReactNode} props.children - Le composant input/select à afficher
 * @param {string} [props.className=""] - Classes CSS supplémentaires pour le conteneur
 * @returns {JSX.Element} Un conteneur avec label et champ de formulaire
 */
export default function FormField({id, label, required = false, children, className = ""}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
