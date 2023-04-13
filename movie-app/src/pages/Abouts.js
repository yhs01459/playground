import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import About from "../components/about";
import Load from "../components/load";
import styled from "styled-components";

const Abouts = () => {
  const [Abouts, setAbouts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();

  const getAbouts = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();

    setAbouts(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getAbouts();
  });

  return (
    <AboutsBlock>
      {Loading ? (
        <Load />
      ) : (
        <div>
          <About item={Abouts}></About>
        </div>
      )}
    </AboutsBlock>
  );
};

export default Abouts;

const AboutsBlock = styled.div`
  z-index: 1;
`;
