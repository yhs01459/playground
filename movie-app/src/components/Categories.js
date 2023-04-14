import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";
const category = [
  {
    name: "Action",
    text: "액션 영화",
  },
  {
    name: "Comedy",
    text: "코미디 영화",
  },
  {
    name: "Drama",
    text: "감동 영화",
  },
];

const CategoriesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: black;
  padding: 1rem;
`;

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  width: 100%;
`;
const Category = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 800;
    text-decoration-line: underline;
  }
  & + & {
    margin-left: 3rem;
  }
`;

const HomeBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  font-size: 2rem;
`;

const Categories = () => {
  return (
    <CategoriesBox>
      <HomeBlock>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Poland Flex
        </Link>
      </HomeBlock>
      <CategoriesBlock>
        {category.map((c) => {
          return (
            <Category
              key={c.name}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={`${c.name}`}
            >
              {c.text}
            </Category>
          );
        })}
      </CategoriesBlock>
    </CategoriesBox>
  );
};

export default Categories;
