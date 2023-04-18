import styled from "styled-components";

const About = ({ item }) => {
  return (
    <AboutBlock background={item.background_image}>
      <AboutBox>
        <div className="shortView">
          <div className="shortView-img">
            <img src={item.medium_cover_image}></img>
          </div>
          <div className="shortView-letters">
            <a href={item.url}>
              <h2>{item.title_long}</h2>
            </a>
            <ul>
              <li>Rating {item.rating}</li>
              <li>Download {item.download_count}</li>
            </ul>
          </div>
        </div>

        <div className="description">{item.description_full}</div>
      </AboutBox>
    </AboutBlock>
  );
};

export default About;

const AboutBlock = styled.div`
  display: flex;
  justify-content: center;
  z-index: -1;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  min-width: 320px;
  width: 100vw;
  max-height: 768px;
  min-height: 240px;
  margin: 2rem;
  height: auto;
  border: 1rem solid black;
  z-index: 2;
  background-color: black;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 1%;
  box-shadow: 0.15rem 0.15rem 0.5rem 0.3rem gray;
  opacity: 0.8;

  .shortView {
    display: flex;
    flex-direction: row;
  }

  .shortView-img {
    width: 240px;
    height: 320px;
  }
  .shortView-letters {
    width: 100%;
    height: 100%;
    margin-left: 2rem;

    a {
      color: #61dafb;
    }
    li {
      color: white;
      list-style: square;
    }
  }
  .description {
    margin-top: 2rem;

    color: white;
  }
  @media screen and (max-width: 800px) {
    & {
      font-size: 10px;
    }
    .shortView-img {
      border: 1rem solid blue;
      display: none;
    }
  }
`;
