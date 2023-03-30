import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Abouts from "../components/abouts";
const About = () => {
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState([]);

  const { id } = useParams();
  console.log(id);

  const getAbout = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=8cdb9a227dd546538b1a5b716f5f0cd5?id=${id}`
    );
    const json = await response.json();
    setAbout(json.about);
    setLoading(false);
  };

  useEffect(() => {
    getAbout();
  });

  return (
    <div>
      {loading ? (
        <strong>"loading..."</strong>
      ) : (
        <Abouts about={about}></Abouts>
      )}
    </div>
  );
};

export default About;
