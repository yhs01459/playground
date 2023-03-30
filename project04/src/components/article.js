import { Link } from "react-router-dom";

const Article = ({ item }) => {
  return (
    <div key={item.rnum}>
      <h2>
        <Link to={`/about/${item.movieCd}`}>{item.movieNm}</Link>
      </h2>
    </div>
  );
};

export default Article;
