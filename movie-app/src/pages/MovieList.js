import { useEffect } from "react";
import Movie from "../components/movie";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Load from "../components/load";

const MovieListPageBox = styled.div`
  position: absolute;
  left: 25%;
  top: 25%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
`;

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
          <MovieListPageBox>
            {movies.map((item) => {
              return <Movie item={item} key={item.id}></Movie>;
            })}
          </MovieListPageBox>
        )}
      </div>
    </>
  );
};

export default MovieList;
