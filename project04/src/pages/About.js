import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Abouts from "../components/abouts";
const About = () => {
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState([]);

  const { id } = useParams();

  const getAbout = async () => {
    const response = await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=96c620953c4739e9cc8206f9da200112&targetDt=20230330`
    );
    const json = await response.json();
    setAbout(json.boxOfficeResult.dailyBoxOfficeList);

    setLoading(false);
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>"loading..."</strong>
      ) : (
        <div>
          {about.map((item) => {
            console.log(item);
            return item.movieCd === id ? (
              <Abouts item={item} key={item.rnum}></Abouts>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default About;
