import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={`${item.medium_cover_image}`}></img>
      <p>{item.description_full}</p>
    </div>
  );
};

export default Movie;
