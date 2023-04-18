import Slider from "react-slick";
import styled from "styled-components";

const banner = ["sample01", "sample02", "sample03", "sample04", "sample05"];

const Banner = () => {
  return (
    <BannerBlock>
      <BannerBox>
        <Slider {...settings}>
          {banner.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </Slider>
      </BannerBox>
    </BannerBlock>
  );
};

export default Banner;

const BannerBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  height: 44px;
  background-color: white;
  margin: 0;
  padding-left: 2rem;
`;
const BannerBox = styled.div`
  min-width: 320px;
  max-width: 1024px;
  box-sizing: border-box;

  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
};
