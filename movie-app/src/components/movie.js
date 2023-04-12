import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieBlock = styled.div`
  display: flex;
  border-radius: 1%;

  width: 500px;

  & + & {
    margin-top: 3rem;
  }
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
  h2 {
  }
  p {
  }
`;
const Movie = ({ item }) => {
  return (
    <MovieBlock>
      <Link to={`/about/${item.id}`}>
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
          </ShortView_letters>
        </ShortView>
      </Link>
    </MovieBlock>
  );
};

export default Movie;
