import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1280px] ">
      <div>
        <div className="relative border-l-4 ml-10 border-gray-300">
          <div className="timeline-item mb-8">
            <div className="cursor-pointer absolute w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center -left-12">
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
              onClick={() => navigate("/pages2")}
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
              onClick={() => navigate("/pages3")}
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
              onClick={() => navigate("/pages4")}
              className="cursor-pointer absolute w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center -left-12"
            >
              4
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-semibold">Overview</h2>
            </div>
          </div>

          <div className="timeline-item mb-8">
            <div
              onClick={() => navigate("/pages5")}
              className="cursor-pointer absolute w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center -left-12"
            >
              5
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-semibold">Next page</h2>
            </div>
          </div>

          <div className="timeline-item mb-8">
            <div
              onClick={() => navigate("/pages6")}
              className="cursor-pointer absolute w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center -left-12"
            >
              6
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-semibold">The last step</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;