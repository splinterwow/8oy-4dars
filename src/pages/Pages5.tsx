import { Link } from "react-router-dom";
import { useState } from "react";

function Pages5() {
  const [securityMethod, setSecurityMethod] = useState("");

  const handleChange = (e) => {
    setSecurityMethod(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    localStorage.setItem('securityMethod', JSON.stringify(securityMethod));
  };

  return (
    <div>
      <div className="max-w-[410px]">
        <h1 className="text-xl font-bold mb-4">Keep your account secure</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Security Method</label>
            <input
              type="radio"
              name="security"
              value="sms"
              onChange={handleChange}
              className="mr-2"
            />
            <label className="mr-4">Use SMS</label>
            <input
              type="radio"
              name="security"
              value="authenticator"
              onChange={handleChange}
              className="mr-2"
            />
            <label>Use an authenticator app</label>
          </div>
          <Link to="/pages6">
            <button type="submit" className="bg-purple-500 text-white rounded p-2 w-full">Continue →</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Pages5;