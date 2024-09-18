import { Link } from "react-router-dom";
import { useState } from "react";

function Pages3() {
  const [formData, setFormData] = useState({
    vat: "",
    industry: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    localStorage.setItem('businessData', JSON.stringify(formData));
  };

  return (
    <div>
      <div className="max-w-[410px]">
        <h1 className="text-xl font-bold mb-4">Business Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">VAT</label>
            <input
              type="text"
              name="vat"
              placeholder="VAT number"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Industry</label>
            <select
              name="industry"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            >
              <option>Please select your industry...</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Retail</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Organization website</label>
            <input
              type="text"
              name="website"
              placeholder="www.example.com"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            />
          </div>
          <Link to="/pages4">
            <button type="submit" className="bg-purple-500 text-white rounded p-2 w-full">Continue →</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Pages3;