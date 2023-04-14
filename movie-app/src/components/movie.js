import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieBlock = styled.div`
  display: flex;
  border-radius: 1%;
  width: 500px;
`;
const ShortView = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  box-shadow: 0.3rem 0.5rem 1rem 0rem gray;
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0.3rem 0.5rem 3rem 0rem black;
  }
`;

const ShortView_img = styled.div`
  img {
    position: relative;
    top: -3rem;
    max-width: 150px;
    width: 100%;
    box-shadow: 0.3rem 0.5rem 1rem -0.5rem gray;
    transition: all 0.4s ease;
    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0.3rem 0.5rem 2rem -1.5rem black;
    }
  }
`;
const ShortView_letters = styled.div`
  text-decoration-line: none;

  color: black;

  h2 {
  }
  p {
  }
`;

const ShortView_gernes = styled.div`
  display: flex;
  justify-content: flex-start;

  p {
    width: 2.5rem;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.2rem;
    border: 0.2rem solid gray;

    border-radius: 45%;
    font-size: 0.15rem;
    & + & {
      margin-left: 1rem;
    }
  }
`;

const Movie = ({ item }) => {
  const genres = item.genres.slice(0, item.genres.length);

  return (
    <MovieBlock>
      <Link to={`/about/${item.id}`} style={{ textDecoration: "none" }}>
        <ShortView>
          <ShortView_img>
            <img src={item.medium_cover_image} url={item.url}></img>
          </ShortView_img>
          <ShortView_letters>
            <h2>{item.title}</h2>
            <p>rating : {item.rating} / 10</p>
            <p>
              {item.summary.length > 100
                ? `${item.summary.slice(0, 100)}...`
                : item.summary}
            </p>
            <ShortView_gernes>
              {genres.map((g) => {
                return <p key={g}>{g.toLowerCase()}</p>;
              })}
            </ShortView_gernes>
          </ShortView_letters>
        </ShortView>
      </Link>
    </MovieBlock>
  );
};

export default Movie;
