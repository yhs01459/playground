import styled from "styled-components";
const AboutBlock = styled.div`
  z-index: -1;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Show = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  right: 25%;
  z-index: 3;
`;

const ShortView = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
`;

const ShortView_img = styled.div`
  float: left;
  width: 210px;
  height: 345px;
`;

const ShortView_letters = styled.div`
  width: 70%;
  margin: 20px 0 0 30px;
  a {
    color: #61dafb;
  }
  li {
    color: white;
    font-size: 1.25rem;
    list-style: square;
  }
`;

const Description = styled.div`
  color: white;
`;

const About = ({ item }) => {
  return (
    <AboutBlock background={item.background_image}>
      <Show>
        <ShortView>
          <ShortView_img>
            <img src={item.medium_cover_image}></img>
          </ShortView_img>
          <ShortView_letters>
            <a href={item.url}>
              <h2>{item.title_long}</h2>
            </a>
            <ul>
              <li>Rating {item.rating}</li>
              <li>Download {item.download_count}</li>
            </ul>
          </ShortView_letters>
        </ShortView>

        <Description>{item.description_full}</Description>
      </Show>
    </AboutBlock>
  );
};

export default About;
