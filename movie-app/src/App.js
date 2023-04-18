import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
import MovieList from "./pages/MovieList";
import Categories from "./components/Categories";
import Banner from "./components/banner";

const App = () => {
  return (
    <>
      <Categories />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:id" element={<Abouts />}></Route>
        <Route path="/:category" element={<MovieList />}></Route>
      </Routes>
    </>
  );
};

export default App;
