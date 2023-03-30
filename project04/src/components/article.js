import { Link } from "react-router-dom";

const Article = ({ index, item }) => {
  return (
    <div key={index}>
      <img src={item.urlToImage}></img>
      <h2>
        <Link to={`/about/${index}`}>{item.title}</Link>
      </h2>
      <p>{index}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Article;
