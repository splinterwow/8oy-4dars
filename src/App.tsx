import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Pages1 from "./pages/Pages1";
import Pages2 from "./pages/Pages2";
import Pages3 from "./pages/Pages3";
import './App.css'
import Pages4 from "./pages/Pages4";
import Pages5 from "./pages/Pages5";
import Pages6 from "./pages/Pages6";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" box max-w-[1280px] mx-auto mt-10">
        <Main />
        <Routes>
          <Route path="/" element={<Pages1 />} />
          <Route path="/pages2" element={<Pages2 />} />
          <Route path="/pages3" element={<Pages3 />} />
          <Route path="/pages4" element={<Pages4 />} />
          <Route path="/pages5" element={<Pages5 />} />
          <Route path="/pages6" element={<Pages6 />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
