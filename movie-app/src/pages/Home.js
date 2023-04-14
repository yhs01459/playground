import { useState, useEffect } from "react";
import styled from "styled-components";
import Load from "../components/load";
import Slider from "react-slick";
import Thumbnail from "../components/thumbnail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [titleMovies, setTitleMovies] = useState([]);
  const [topRatingMovies, setTopRatingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [Loading, setLoading] = useState(true);

  const topRatingGetMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10`
    );
    const json = await response.json();
    setTopRatingMovies(json.data.movies);
    setLoading(false);
  };

  const titleGetMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=title&order_by=desc&limit=10`
    );
    const json = await response.json();
    setTitleMovies(json.data.movies);
    setLoading(false);
  };

  const popularGetMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=10`
    );
    const json = await response.json();
    setPopularMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    topRatingGetMovies();
    titleGetMovies();
    popularGetMovies();
  }, []);

  return (
    <>
      <div>
        {Loading ? (
          <Load />
        ) : (
          <>
            <HomeBlock>
              <h2>별점 순</h2>
              <Slider {...settings}>
                {topRatingMovies.map((item) => {
                  return <Thumbnail key={item.id} item={item}></Thumbnail>;
                })}
              </Slider>
              <h2>이름 순</h2>
              <Slider {...settings}>
                {titleMovies.map((item) => {
                  return <Thumbnail key={item.id} item={item}></Thumbnail>;
                })}
              </Slider>
              <h2>좋아요 많은 순</h2>
              <Slider {...settings}>
                {popularMovies.map((item) => {
                  return <Thumbnail key={item.id} item={item}></Thumbnail>;
                })}
              </Slider>
            </HomeBlock>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

const HomeBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 2100px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 4,
};
