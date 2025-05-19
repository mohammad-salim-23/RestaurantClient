import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeAll = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [filters, setFilters] = useState({
    shift: "All",
    sector: "All",
  });
  const [shifts, setShifts] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch employees from API
  const fetchEmployees = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://api.royalcrowncafebd.com/employee");
      const data = res.data;
      setEmployees(data);
      extractUniqueFilters(data);
    } catch (err) {
      console.error("Failed to fetch employees", err);
      setError("Failed to load employees. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Extract unique values for filters
  const extractUniqueFilters = (data) => {
    const shiftSet = new Set();
    const sectorSet = new Set();

    data.forEach((emp) => {
      shiftSet.add(emp.shift);
      sectorSet.add(emp.sector);
    });

    setShifts([...shiftSet]);
    setSectors([...sectorSet]);
  };

  // Filter logic
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

  // Effects
  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [employees, filters]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Employee List</h1>
      <p className="mb-4 font-semibold">Managing Director: Md Eahyea Chowdhury</p>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          name="shift"
          value={filters.shift}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Shifts</option>
          {shifts.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          name="sector"
          value={filters.sector}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Sectors</option>
          {sectors.map((sec, idx) => (
            <option key={idx} value={sec}>
              {sec}
            </option>
          ))}
        </select>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

  

      {/* Table */} 
      <div className="overflow-x-auto">
        {loading ? (
          <p>Loading employees...</p>
        ) : (
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Position</th>
                <th className="py-2 px-4 border">Shift</th>
                <th className="py-2 px-4 border">Sector</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <tr key={emp._id}>
                    <td className="py-2 px-4 border">{emp.name}</td>
                    <td className="py-2 px-4 border">{emp.position}</td>
                    <td className="py-2 px-4 border">{emp.shift}</td>
                    <td className="py-2 px-4 border">{emp.sector}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
};

export default EmployeeAll;
