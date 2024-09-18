import { useState } from "react";

function Pages6() {
  const [error, setError] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const businessDetails = {
      error: error,
    };
    localStorage.setItem('businessDetails', JSON.stringify(businessDetails));
  };

  return (
    <div>
      <div className="max-w-[410px]">
        <h1 className="text-xl font-bold mb-4">Business details</h1>
        {error && (
          <div className="rounded-lg border-red-500 bg-red-100 text-red-500 p-2 mb-4 flex justify-between items-center">
            <span>Missing required business information</span>
            <button className="ml-2 bg-white border border-black text-black rounded px-2">+ Add</button>
          </div>
        )}
        <form onSubmit={handleSubmit}> 
          <button type="submit" className="bg-purple-500 text-white rounded p-2 w-full">Submit →</button>
        </form>
      </div>
    </div>
  );
}

export default Pages6;