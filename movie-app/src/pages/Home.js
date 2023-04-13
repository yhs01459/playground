import { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/movie";
import Load from "../components/load";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const Header = styled.div`
  background-color: #b179fc;
`;
const Footer = styled.div`
  background-color: #b179fc;
  margin-bottom: 0;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const Home = () => {
  const [Movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=15`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        {Loading ? (
          <Load />
        ) : (
          <>
            <Header>요긴 헤더랑꼐</Header>
            <HomeBlock>
              <h2>별점 순</h2>
              <Slider {...settings}>
                {Movies.map((item) => {
                  return <Movie key={item.id} item={item}></Movie>;
                })}
              </Slider>
              <h2>이름 순</h2>
              <Slider {...settings}>
                {Movies.map((item) => {
                  return <Movie key={item.id} item={item}></Movie>;
                })}
              </Slider>
              <h2>좋아요 많은 순</h2>
              <Slider {...settings}>
                {Movies.map((item) => {
                  return <Movie key={item.id} item={item}></Movie>;
                })}
              </Slider>
            </HomeBlock>
            <Footer>요긴 마지막</Footer>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
