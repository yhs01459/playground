import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about/:id" element={<Abouts></Abouts>}></Route>
    </Routes>
  );
};

export default App;
