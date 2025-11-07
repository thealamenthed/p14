import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {addEmployee} from "./employeeSlice";
import {US_STATES} from "../../data/usStates";
import Input from "../../components/Input";
import DateInput from "../../components/DateInput";
import Select from "../../components/Select";
import FormField from "../../components/FormField";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const onChange = (e) => {
    const {name, value} = e.target;
    setForm((f) => ({...f, [name]: value}));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName) return;
    dispatch(addEmployee(form));
    // la Modal sera affichée plus tard ; pour l'instant on redirige
    navigate("/employees");
  };

  return (
    <section className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Create Employee</h2>
        <p className="mt-2 text-sm text-gray-600">Fill in the information to create a new employee record</p>
      </div>

      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField id="firstName" label="First Name" required>
            <Input id="firstName" name="firstName" value={form.firstName} onChange={onChange} required placeholder="John" />
          </FormField>

          <FormField id="lastName" label="Last Name" required>
            <Input id="lastName" name="lastName" value={form.lastName} onChange={onChange} required placeholder="Doe" />
          </FormField>

          <FormField id="dateOfBirth" label="Date of Birth">
            <DateInput id="dateOfBirth" name="dateOfBirth" value={form.dateOfBirth} onChange={onChange} />
          </FormField>

          <FormField id="startDate" label="Start Date">
            <DateInput id="startDate" name="startDate" value={form.startDate} onChange={onChange} />
          </FormField>
        </div>

        <fieldset className="mb-6 pt-6 border-t border-gray-200">
          <legend className="text-lg font-semibold text-gray-900 mb-4 px-2">Address</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField id="street" label="Street" className="md:col-span-2">
              <Input id="street" name="street" value={form.street} onChange={onChange} placeholder="123 Main Street" />
            </FormField>

            <FormField id="city" label="City">
              <Input id="city" name="city" value={form.city} onChange={onChange} placeholder="New York" />
            </FormField>

            <FormField id="state" label="State">
              <Select
                id="state"
                name="state"
                value={form.state}
                onChange={onChange}
                placeholder="Select a state…"
                options={US_STATES.map((s) => ({
                  value: s.abbreviation,
                  label: s.name
                }))}
              />
            </FormField>

            <FormField id="zipCode" label="Zip Code">
              <Input id="zipCode" name="zipCode" type="text" value={form.zipCode} onChange={onChange} placeholder="10001" />
            </FormField>
          </div>
        </fieldset>

        <FormField id="department" label="Department" className="mb-6">
          <Select
            id="department"
            name="department"
            value={form.department}
            onChange={onChange}
            placeholder="Select a department…"
            options={["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]}
          />
        </FormField>

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => navigate("/employees")}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            Save Employee
          </button>
        </div>
      </form>
    </section>
  );
}
