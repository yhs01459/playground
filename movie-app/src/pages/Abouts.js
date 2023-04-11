import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import About from "../components/about";

const Abouts = () => {
  const [Abouts, setAbouts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();

  const getAbouts = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();

    setAbouts(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getAbouts();
  });

  return (
    <div>
      {Loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h1>About Page {}</h1>
          <About item={Abouts}></About>
        </div>
      )}
    </div>
  );
};

export default Abouts;
