const About = ({ item }) => {
  return (
    <div>
      <img src={item.medium_cover_image}></img>
      <img src={item.background_image}></img>
      <p>{item.title_long}</p>
      <p>Rating {item.rating}</p>
      <p>{item.description_full}</p>
    </div>
  );
};

export default About;
