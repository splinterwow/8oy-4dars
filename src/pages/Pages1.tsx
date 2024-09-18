

function Pages1() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Business Information</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Business address</label>
          <select className="border rounded p-2 w-full">
            <option>Registered business address</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select className="border rounded p-2 w-full">
            <option>Type of business</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input type="text" placeholder="Address line 1" className="border rounded p-2 w-full mb-2" />
          <input type="text" placeholder="Address line 2" className="border rounded p-2 w-full mb-2" />
          <input type="text" placeholder="City" className="border rounded p-2 w-full mb-2" />
          <input type="text" placeholder="Zip" className="border rounded p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">Continue →</button>
      </form>
    </div>
  );
}

export default Pages1;