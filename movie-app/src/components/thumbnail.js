import { Link } from "react-router-dom";
import styled from "styled-components";
import empty from "../empty001.png";

const Thumbnail = ({ item }) => {
  return (
    <ThumbnailBox>
      <Link to={`/about/${item.id}`} style={{ textDecoration: "none" }}>
        <ShortView>
          <ShortView_img>
            <img src={item.medium_cover_image} alt="" url={item.url}></img>
          </ShortView_img>
          <ShortView_letters>
            <p className="title">
              {item.title.length > 30
                ? `${item.title.slice(0, 30)}...`
                : item.title}
            </p>
            <div className="rating">
              <i class="bi bi-star-fill"></i>
              <span>{item.rating}</span>
            </div>
          </ShortView_letters>
        </ShortView>
      </Link>
    </ThumbnailBox>
  );
};

export default Thumbnail;

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

  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0.3rem 0.5rem 0.2rem 0.1rem black;
  }
`;

const ShortView_img = styled.div`
  width: 100%;
  max-width: 150px;
  height: 230px;
  background-image: url(${empty});
  img {
    max-width: 150px;
  }
`;
const ShortView_letters = styled.div`
  text-decoration-line: none;
  display: grid;
  grid-template-columns: 100px 1fr;
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
    display: flex;
    height: 2rem;
    .bi-star-fill {
      display: flex;
      justify-content: center;
      margin-left: 1rem;
      padding: 0.1rem;
      color: gray;

      font-size: 0.5rem;
    }
    span {
      margin-top: 0;
      font-size: 0.5rem;
      padding-left: 0.1rem;
      font-weight: 700;
      color: gray;
    }
  }
`;
