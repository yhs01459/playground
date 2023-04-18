import { useEffect } from "react";
import Movie from "../components/movie";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Load from "../components/load";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const getMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?genre=${category}`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [category]);

  return (
    <>
      <div>
        {loading ? (
          <Load />
        ) : (
          <MovieListBlock>
            {console.log(category)}
            <MovieListBox>
              {movies.map((item) => {
                return <Movie item={item} key={item.id}></Movie>;
              })}
            </MovieListBox>
          </MovieListBlock>
        )}
      </div>
    </>
  );
};

export default MovieList;

const MovieListBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const MovieListBox = styled.div`
  max-width: 1024px;
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  margin-top: 5rem;

  @media screen and (max-width: 800px) {
    & {
      display: grid;
      grid-template-columns: 1fr;
      min-width: 320px;
      width: 80%;
    }
  }
`;
