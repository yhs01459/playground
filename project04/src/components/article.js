import { Link } from "react-router-dom";

const Article = ({ item }) => {
  return (
    <div key={item.id}>
      <img src={item.urlToImage}></img>
      <h2>
        <Link to="/about">{item.title}</Link>
      </h2>
      <p>{item.description}</p>
    </div>
  );
};

export default Article;
