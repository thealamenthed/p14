/**
 * Composant EmptyState pour afficher un état vide avec icône, message et action optionnelle
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} [props.icon] - Icône SVG ou composant à afficher
 * @param {string} [props.title] - Titre de l'état vide
 * @param {string} [props.message] - Message descriptif
 * @param {React.ReactNode} [props.action] - Bouton ou action à afficher (optionnel)
 * @returns {JSX.Element} Un composant d'état vide stylisé
 */
export default function EmptyState({icon, title, message, action}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
      {icon && <div className="flex justify-center mb-4">{icon}</div>}
      {title && <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>}
      {message && <p className="mt-2 text-sm text-gray-500">{message}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
