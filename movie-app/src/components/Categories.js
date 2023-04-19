import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  const [toggle, setToggle] = useState(false);

  const switchOn = () => {
    setToggle(true);
  };
  const switchOff = () => {
    console.log("스위치 off");
    setToggle(false);
  };
  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <CategoriesBlock>
      <CategoriesList toggle={toggle}>
        <div className="categories-home">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            홈
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
      </CategoriesList>
      <MoblieCategoriesList>
        <div className="m-categories-menu-btn">
          <button onClick={switchOn}>&#9776;</button>
        </div>
        <div className="m-categories-home">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            홈
          </Link>
        </div>
        <div></div>
      </MoblieCategoriesList>
      <MenuList toggle={toggle}>
        <div className="list-item-btn">
          <button onClick={switchOff}>x</button>
        </div>
        <div className="list-item-home">
          <Link to={"/"} style={{ textDecoration: "none" }} onClick={switchOff}>
            홈
          </Link>
        </div>
        <div className="list-item-categories">
          {category.map((c) => {
            return (
              <MenuCategory
                key={c.name}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to={`${c.name}`}
                onClick={switchOff}
              >
                {c.text}
              </MenuCategory>
            );
          })}
        </div>
      </MenuList>
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
  justify-content: space-between;
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

    width: 80%;
  }

  @media screen and (max-width: 800px) {
    & {
      display: none;
    }
  }
`;
const MoblieCategoriesList = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    height: 100%;
    width: 100vw;
    max-width: 1024px;
    box-sizing: border-box;
    button {
      border: none;
      background-color: inherit;
    }
    .m-categories-menu {
      width: 2rem;
    }
    .m-categories-home {
      width: 2rem;
    }
    .m-categories-end {
      width: 2rem;
    }
  }
`;
const MenuList = styled.div`
  display: none;
  ${(props) =>
    props.toggle &&
    ` z-index: 4;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  padding-left: 2rem;
  .list-item-btn {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 10%;
    box-sizing: border-box;
    button {
      font-size: 2rem;
      border: none;
      background-color: white;
    }
  }
  .list-item-home {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 10%;
    width: 100%;
    font-size: 2rem;
    box-sizing: border-box;
  }
  .list-item-categories {
    font-size: 2rem;
    width: 100%;
    height: 70%;

    box-sizing: border-box;
  }`}
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
`;
const MenuCategory = styled(NavLink)`
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
    margin-top: 2rem;
  }
`;
