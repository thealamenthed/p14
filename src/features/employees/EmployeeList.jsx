import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState, useMemo} from "react";
import DataTable from "react-data-table-component";
import EmptyState from "../../components/EmptyState";

/**
 * Composant EmployeeList - Liste des employés avec recherche et filtrage
 * Affiche tous les employés dans un tableau interactif avec pagination, tri et recherche
 * @returns {JSX.Element} Un tableau de données avec barre de recherche et pagination
 */
export default function EmployeeList() {
  const items = useSelector((s) => s.employees.items);
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState("");

  /**
   * Formate une date au format français (JJ/MM/AAAA)
   * @param {string} dateString - Date au format ISO (YYYY-MM-DD)
   * @returns {string} Date formatée ou "-" si la date est invalide
   */
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    } catch {
      return dateString;
    }
  };

  /**
   * Filtre les employés en fonction du texte de recherche
   * Recherche dans le nom complet, département, ville, état et rue
   * @type {Array<Object>}
   */
  const filteredItems = useMemo(() => {
    if (!filterText) return items;

    const searchText = filterText.toLowerCase();
    return items.filter((item) => {
      const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
      const department = (item.department || "").toLowerCase();
      const city = (item.city || "").toLowerCase();
      const state = (item.state || "").toLowerCase();
      const street = (item.street || "").toLowerCase();

      return (
        fullName.includes(searchText) ||
        department.includes(searchText) ||
        city.includes(searchText) ||
        state.includes(searchText) ||
        street.includes(searchText)
      );
    });
  }, [items, filterText]);

  /**
   * Composant de recherche personnalisé pour filtrer les employés
   * @param {Object} props - Les propriétés du composant
   * @param {string} props.filterText - Le texte de recherche actuel
   * @param {Function} props.onFilter - Fonction appelée lors du changement de texte
   * @param {Function} props.onClear - Fonction appelée pour effacer le filtre
   * @returns {JSX.Element} Une barre de recherche avec bouton de réinitialisation
   */
  const FilterComponent = ({filterText, onFilter, onClear}) => (
    <div className="mb-4">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            id="search"
            type="text"
            placeholder="Filter By Name"
            value={filterText}
            onChange={onFilter}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 bg-white"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        {filterText && (
          <button
            onClick={onClear}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors flex items-center justify-center min-w-[44px]"
            aria-label="Clear filter">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );

  /**
   * Configuration des colonnes du tableau DataTable
   * Définit les colonnes : Name, Department, Start Date, Date of Birth, Address
   * @type {Array<Object>}
   */
  const columns = [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
      cell: (row) => (
        <div className="flex items-center py-2">
          <div className="shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-medium text-sm">
                {row.firstName?.[0]?.toUpperCase() || ""}
                {row.lastName?.[0]?.toUpperCase() || ""}
              </span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {row.firstName} {row.lastName}
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Department",
      selector: (row) => row.department || "",
      sortable: true,
      cell: (row) =>
        row.department ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {row.department}
          </span>
        ) : (
          <span className="text-sm text-gray-500">-</span>
        )
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate || "",
      sortable: true,
      cell: (row) => <span className="text-sm text-gray-900">{formatDate(row.startDate)}</span>
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth || "",
      sortable: true,
      cell: (row) => <span className="text-sm text-gray-900">{formatDate(row.dateOfBirth)}</span>
    },
    {
      name: "Address",
      selector: (row) => [row.street, row.city, row.state, row.zipCode].filter(Boolean).join(", "),
      sortable: false,
      cell: (row) => (
        <div className="text-sm text-gray-500">
          {row.street || row.city || row.state || row.zipCode ? (
            <div>
              {row.street && <div>{row.street}</div>}
              {(row.city || row.state || row.zipCode) && (
                <div className="text-gray-400">{[row.city, row.state, row.zipCode].filter(Boolean).join(", ")}</div>
              )}
            </div>
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      )
    }
  ];

  /**
   * Styles personnalisés pour le composant DataTable
   * Personnalise l'apparence des en-têtes, cellules et lignes
   * @type {Object}
   */
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#f9fafb",
        borderBottomWidth: "1px",
        borderBottomColor: "#e5e7eb",
        borderBottomStyle: "solid"
      }
    },
    headCells: {
      style: {
        fontSize: "0.75rem",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "#6b7280",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem"
      }
    },
    cells: {
      style: {
        fontSize: "0.875rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }
    },
    rows: {
      style: {
        "&:hover": {
          backgroundColor: "#f9fafb"
        }
      }
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Current Employees</h2>
          <p className="mt-2 text-sm text-gray-600">
            {items.length === 0
              ? "No employees registered yet"
              : filterText
              ? `${filteredItems.length} of ${items.length} ${items.length === 1 ? "employee" : "employees"}`
              : `${items.length} ${items.length === 1 ? "employee" : "employees"} registered`}
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors text-sm font-medium cursor-pointer">
          Add Employee
        </button>
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon={
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
          title="No employees yet"
          message="Get started by creating a new employee record."
          action={
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
              Add Employee
            </button>
          }
        />
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden p-4">
          <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={() => setFilterText("")} filterText={filterText} />
          <DataTable
            columns={columns}
            data={filteredItems}
            customStyles={customStyles}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            noDataComponent={
              <div className="py-12 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="mt-4 text-sm text-gray-500">{filterText ? "No employees found matching your search" : "No employees registered yet"}</p>
                {filterText && (
                  <button onClick={() => setFilterText("")} className="mt-4 text-sm text-indigo-600 hover:text-indigo-700">
                    Clear filter
                  </button>
                )}
              </div>
            }
            highlightOnHover
            pointerOnHover
          />
        </div>
      )}
    </section>
  );
}
