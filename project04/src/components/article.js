const Article = ({ item }) => {
  return (
    <div key={item.id}>
      <img src={item.urlToImage}></img>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default Article;
