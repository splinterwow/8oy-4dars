import { Link } from "react-router-dom";
import { useState } from "react";

function Pages2() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userInfo', JSON.stringify(formData)); 
  };

  return (
    <div>
      <div className="max-w-[410px]">
        <h1 className="text-xl font-bold mb-4">Business representative</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border rounded p-2 w-full"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="border rounded p-2 w-full"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address1"
              placeholder="Address line 1"
              className="border rounded p-2 w-full mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="address2"
              placeholder="Address line 2"
              className="border rounded p-2 w-full mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border rounded p-2 w-full mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip"
              className="border rounded p-2 w-full"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <div className="flex items-center">
              <select className="border rounded p-2 mr-2">
                <option value="+353">🇮🇪 +353</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <input
                type="text"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="border rounded p-2 w-full"
                onChange={handleChange}
              />
            </div>
          </div>
          <Link to="/pages3">
            <button type="submit" className="bg-purple-500 text-white rounded p-2 w-full">Continue →</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Pages2;