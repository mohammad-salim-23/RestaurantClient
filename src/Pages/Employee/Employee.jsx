import { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    shift: "All",
    sector: "All",
  });

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    shift: "Morning",
    sector: "Kitchen",
  });

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("https://www.royalcrowncafebd.com/employee");
      setEmployees(res.data);
    } catch (err) {
      console.error("Failed to fetch employees", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [employees, filters]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Apply filtering logic
  const applyFilters = () => {
    let filtered = [...employees];

    if (filters.shift !== "All") {
      filtered = filtered.filter((emp) => emp.shift === filters.shift);
    }
    if (filters.sector !== "All") {
      filtered = filtered.filter((emp) => emp.sector === filters.sector);
    }

    setFilteredEmployees(filtered);
  };

  // Create new employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://www.royalcrowncafebd.com/employee", formData);
      if (res.data.insertedId || res.data.acknowledged) {
        alert("Employee added successfully");
        setShowModal(false);
        setFormData({ name: "", position: "", shift: "Morning", sector: "Kitchen" });
        fetchEmployees();
      }
    } catch (err) {
      console.error("Failed to create employee", err);
      alert("Error adding employee");
    }
  };

  // Delete employee
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`https://www.royalcrowncafebd.com/employee/${id}`);
      if (res.data.deletedCount > 0) {
        alert("Employee deleted");
        fetchEmployees();
      }
    } catch (err) {
      console.error("Failed to delete", err);
      alert("Error deleting employee");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <p className="mb-4 font-semibold">Managing Director: Md Eahyea Chowdhury</p>

      <button
        onClick={() => setShowModal(true)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Employee
      </button>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          name="shift"
          value={filters.shift}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Shifts</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
        <select
          name="sector"
          value={filters.sector}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Sectors</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Service">Service</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Position</th>
              <th className="py-2 px-4 border">Shift</th>
              <th className="py-2 px-4 border">Sector</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp._id}>
                <td className="py-2 px-4 border">{emp.name}</td>
                <td className="py-2 px-4 border">{emp.position}</td>
                <td className="py-2 px-4 border">{emp.shift}</td>
                <td className="py-2 px-4 border">{emp.sector}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleDelete(emp._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Employee</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <select
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
              </select>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="Kitchen">Kitchen</option>
                <option value="Service">Service</option>
              </select>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
