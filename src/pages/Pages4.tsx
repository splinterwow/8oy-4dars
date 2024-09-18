import { Link } from "react-router-dom";
import { useState } from "react";

function Pages4() {
  const [formData, setFormData] = useState({
    currency: "",
    country: "",
    iban: "",
    confirmIban: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('bankInfo', JSON.stringify(formData));
  };

  return (
    <div>
      <div className="max-w-[410px]">
        <h1 className="text-xl font-bold mb-4">Bank Information</h1>
        <form onSubmit={handleSubmit}> 
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Currency</label>
            <select
              name="currency"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            >
              <option>Select your currency...</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Country of bank account</label>
            <select
              name="country"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            >
              <option>Country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">IBAN</label>
            <input
              type="text"
              name="iban"
              placeholder="Enter your IBAN"
              className="border rounded p-2 w-full mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="confirmIban"
              placeholder="Confirm IBAN"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            />
          </div>
          <Link to="/pages5">
            <button type="submit" className="bg-purple-500 text-white rounded p-2 w-full">Continue →</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Pages4;