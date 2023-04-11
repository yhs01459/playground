import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about/:id" element={<Abouts />}></Route>
    </Routes>
  );
};

export default App;
