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
  border: 1rem solid black;
  top: 25%;
  left: 25%;
  right: 25%;
  z-index: 2;
  background-color: black;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 1%;
  box-shadow: 0.15rem 0.15rem 0.5rem 0.3rem gray;
  opacity: 0.8;
  .Description {
    color: white;
  }
`;
const ShortView = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
`;
const ShortView_img = styled.div`
  float: left;
  width: 230px;
  height: 345px;
`;
const ShortView_letters = styled.div`
  width: 250%;
  margin: 1rem 0 0 3rem;
  a {
    color: #61dafb;
  }
  li {
    color: white;
    font-size: 1.25rem;
    list-style: square;
  }
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

        <div className="Description">{item.description_full}</div>
      </Show>
    </AboutBlock>
  );
};

export default About;
