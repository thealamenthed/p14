import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Table from "../../components/Table";
import TableCell from "../../components/TableCell";
import EmptyState from "../../components/EmptyState";

export default function EmployeeList() {
  const items = useSelector((s) => s.employees.items);
  const navigate = useNavigate();

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

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Current Employees</h2>
          <p className="mt-2 text-sm text-gray-600">
            {items.length === 0 ? "No employees registered yet" : `${items.length} ${items.length === 1 ? "employee" : "employees"} registered`}
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors text-sm font-medium">
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
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add Employee
            </button>
          }
        />
      ) : (
        <Table
          columns={["Name", "Department", "Start Date", "Date of Birth", "Address"]}
          data={items}
          emptyMessage="No employees registered yet"
          emptyIcon={
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
          renderRow={(e) => (
            <>
              <TableCell className="whitespace-nowrap">
                <div className="flex items-center">
                  <div className="shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium text-sm">
                        {e.firstName?.[0]?.toUpperCase() || ""}
                        {e.lastName?.[0]?.toUpperCase() || ""}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {e.firstName} {e.lastName}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {e.department ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {e.department}
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">-</span>
                )}
              </TableCell>
              <TableCell className="whitespace-nowrap text-sm text-gray-900">{formatDate(e.startDate)}</TableCell>
              <TableCell className="whitespace-nowrap text-sm text-gray-900">{formatDate(e.dateOfBirth)}</TableCell>
              <TableCell className="text-sm text-gray-500">
                {e.street || e.city || e.state || e.zipCode ? (
                  <div>
                    {e.street && <div>{e.street}</div>}
                    {(e.city || e.state || e.zipCode) && (
                      <div className="text-gray-400">{[e.city, e.state, e.zipCode].filter(Boolean).join(", ")}</div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </TableCell>
            </>
          )}
        />
      )}
    </section>
  );
}
