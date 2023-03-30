const Abouts = ({ about }) => {
  return (
    <div>
      <h2>article about</h2>
      <p>{about.title}</p>
      <p>{about.description}</p>
    </div>
  );
};

export default Abouts;
