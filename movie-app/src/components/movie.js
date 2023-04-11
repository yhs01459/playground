import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  return (
    <div>
      <h3>{item.title_long}</h3>
      <img src={item.medium_cover_image} url={item.url}></img>
      <p></p>
      <Link to={`/about/${item.id}`}>
        {item.summary.length > 100
          ? `${item.summary.slice(0, 100)}...`
          : item.summary}
      </Link>
    </div>
  );
};

export default Movie;
