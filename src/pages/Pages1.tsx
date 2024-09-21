import { Link } from "react-router-dom";

function Pages1() {
  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = {
      address: e.target[0].value,
      type: e.target[1].value,
      line1: e.target[2].value,
      line2: e.target[3].value,
      city: e.target[4].value,
      zip: e.target[5].value,
    };
    localStorage.setItem('businessInfo', JSON.stringify(formData)); 
  };

  return (
    <div className="max-w-[410px]">
      <h1 className="text-xl font-bold mb-4">Business Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Business address</label>
          <select className="border rounded p-2 w-full">
            <option>Registered business address</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select className="border rounded p-2 w-full">
            <option>Type of business</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input type="text" placeholder="Address line 1" className="border rounded p-2 w-full mb-2" />
          <input type="text" placeholder="Address line 2" className="border rounded p-2 w-full mb-2" />
          <input type="text" placeholder="City" className="border rounded p-2 w-full mb-2" />
          <input type="text" placeholder="Zip" className="border rounded p-2 w-full" />
        </div>
        <Link to="/pages2">
          <button type="submit" className="bg-purple-500 text-white rounded p-2 w-full">Continue →</button>
        </Link>
      </form>
    </div>
  );
}

export default Pages1;