import { Link } from "react-router-dom";
import styled from "styled-components";

const ThumbnailBox = styled.div`
  display: flex;
  border-radius: 1%;
  width: 150px;
  height: 320px;
  margin-left: 1rem;
  padding: 0;
`;
const ShortView = styled.div`
  width: 150px;
  background-color: white;
  height: 300px;
  margin-top: 1rem;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  box-shadow: 0.3rem 0.5rem 1rem 0rem gray;
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0.3rem 0.5rem 3rem 0rem black;
  }
`;

const ShortView_img = styled.div`
  img {
    width: 100%;
    max-width: 150px;
  }
`;
const ShortView_letters = styled.div`
  text-decoration-line: none;
  display: grid;
  grid-template-columns: 120px 1fr;
  color: black;
  padding: 0;

  .title {
    display: flex;
    max-width: 120px;
    margin-left: 0.3rem;
    margin-top: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 700;
  }
  .rating {
    margin-top: 0;

    display: flex;
    justify-content: center;
    font-size: 0.5rem;
    color: gray;
    font-weight: 700;
  }
`;

const Thumbnail = ({ item }) => {
  return (
    <ThumbnailBox>
      <Link to={`/about/${item.id}`} style={{ textDecoration: "none" }}>
        <ShortView>
          <ShortView_img>
            <img src={item.medium_cover_image} url={item.url}></img>
          </ShortView_img>
          <ShortView_letters>
            <p className="title">
              {item.title.length > 30
                ? `${item.title.slice(0, 30)}...`
                : item.title}
            </p>
            <p className="rating">{item.rating}</p>
          </ShortView_letters>
        </ShortView>
      </Link>
    </ThumbnailBox>
  );
};

export default Thumbnail;
