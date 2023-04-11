import styled from "styled-components";
const Box = styled.div`
  background-image: none;
`;

const About = ({ item }) => {
  return (
    <div>
      <img src={item.medium_cover_image}></img>
      <img src={item.background_image}></img>
      <a href={item.url}>
        <h2>{item.title_long}</h2>
      </a>

      <ul>
        <li>Rating {item.rating}</li>
        <li>Download {item.download_count}</li>
        <li>{item.description_full}</li>
      </ul>
    </div>
  );
};

export default About;
