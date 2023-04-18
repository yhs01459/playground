import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const category = [
  {
    name: "Action",
    text: "액션",
  },
  {
    name: "Comedy",
    text: "코미디",
  },
  {
    name: "Drama",
    text: "감동",
  },
  {
    name: "Thriller",
    text: "스릴러",
  },
  {
    name: "Sci-fi",
    text: "SF",
  },
];

const Categories = () => {
  return (
    <CategoriesBlock>
      <CategoriesList>
        <div className="categories-home">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            홈{" "}
          </Link>
        </div>
        <div className="categories-categories">
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
        </div>
        <div className="categories-menu">
          <button>&#9776;</button>
        </div>
      </CategoriesList>
    </CategoriesBlock>
  );
};

export default Categories;

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 2rem;
  width: 100%;
  min-width: 320px;
  height: 44px;
  z-index: 9999;
`;
const CategoriesList = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  height: 100%;
  width: 100vw;
  max-width: 1024px;
  box-sizing: border-box;

  .categories-home {
    width: 20%;
  }
  .categories-categories {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  .categories-menu {
    display: flex;
    justify-content: end;
    width: 10%;
    padding-right: 2rem;
  }
  @media screen and (max-width: 800px) {
    & {
      justify-content: space-between;
    }
    .categories-home {
    }
    .categories-categories {
      display: none;
    }
    .categories-Menu {
      visibility: visible;
    }
  }
`;

const Category = styled(NavLink)`
  display: flex;
  align-items: center;
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
