// import Main from "./components/Main"
// import Navbar from "./components/Navbar"
// import Pages1 from "./pages/Pages1"

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Pages1 />
//       <Main />
//     </div>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Pages1 from "./pages/Pages1";
import Pages2 from "./pages/Pages2";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pages1" element={<Pages1 />} />
        <Route path="/pages2" element={<Pages2 />} />
      </Routes>
    </div>
  );
}

export default App;
