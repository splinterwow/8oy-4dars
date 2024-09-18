import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  function handleNavigatePages1() {
    navigate("/pages1");
  }
  
  function handleNavigatePages2() {
    navigate("/pages2");
  }
  
  function handleNavigatePages3() {
    navigate("/pages3");
  }
  
  function handleNavigatePages4() {
    navigate("/pages4");
  }

  return (
    <div className="container mx-auto">
      <div className="ml-24">
        <div className="relative border-l-4 mt-11 border-gray-300 ml-4">
          <div className="timeline-item mb-8">
            <div
              onClick={handleNavigatePages1}
              className="cursor-pointer absolute w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center -left-12"
            >
              1
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-semibold">Business structure</h2>
              <p className="text-gray-600">Business representative</p>
              <p className="text-gray-600">Business details</p>
            </div>
          </div>

          <div className="timeline-item mb-8">
            <div
              onClick={handleNavigatePages2}
              className="cursor-pointer absolute w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center -left-12"
            >
              2
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-semibold">Bank details</h2>
            </div>
          </div>

          <div className="timeline-item mb-8">
            <div
              onClick={handleNavigatePages3}
              className="cursor-pointer absolute w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center -left-12"
            >
              3
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-semibold">2 step authentication</h2>
            </div>
          </div>

          <div className="timeline-item mb-8">
            <div
              onClick={handleNavigatePages4}
              className="cursor-pointer absolute w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center -left-12"
            >
              4
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-semibold">Overview</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;