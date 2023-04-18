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
              <div className="home-box">
                <div className="home-row">
                  <h3>별점 순</h3>
                  <div className="slider-box">
                    <Slider {...settings}>
                      {topRatingMovies.map((item) => {
                        return (
                          <Thumbnail key={item.id} item={item}></Thumbnail>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
                <div className="hone-row">
                  <h3>이름 순</h3>
                  <div className="slider-box">
                    <Slider {...settings}>
                      {titleMovies.map((item) => {
                        return (
                          <Thumbnail key={item.id} item={item}></Thumbnail>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
                <div className="hone-row">
                  <h3>좋아요 많은 순</h3>
                  <div className="slider-box">
                    <Slider {...settings}>
                      {popularMovies.map((item) => {
                        return (
                          <Thumbnail key={item.id} item={item}></Thumbnail>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </HomeBlock>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

const HomeBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  padding-left: 2rem;
  .home-box {
    box-sizing: border-box;
    max-width: 1024px;
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .home-row {
    width: 100%;
    height: 400px;
  }
  .slider-box {
    .slides .slick-prev {
      position: absolute;
      left: 2%;
      z-index: 3;
    }
    .slides .slick-next {
      position: absolute;
      right: 2%;
      z-index: 3;
    }
  }

  @media screen and (max-width: 800px) {
    .home-box {
      font-size: 0.9rem;
    }
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  className: "slides",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
