import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 300px;
      object-fit: cover;
    }
  }
  .contens {
  }

  & + & {
    margin-top: 3rem;
  }
`;
const Movie = ({ item }) => {
  return (
    <MovieBlock>
      <div className="thumbnail">
        <img src={item.medium_cover_image} url={item.url}></img>
      </div>
      <div className="contents">
        <h2>{item.title_long}</h2>
        <Link to={`/about/${item.id}`}>
          {item.summary.length > 100
            ? `${item.summary.slice(0, 100)}...`
            : item.summary}
        </Link>
      </div>
    </MovieBlock>
  );
};

export default Movie;
