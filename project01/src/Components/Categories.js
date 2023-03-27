import styled, { css } from "styled-components";
const categories = [
  {
    name: "one",
    text: "카테고리1",
  },
  {
    name: "two",
    text: "카테고리2",
  },
  {
    name: "three",
    text: "카테고리3",
  },
  {
    name: "four",
    text: "카테고리4",
  },
];

const Box = styled.div`
  background-color: black;
  color: red;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    width: 100%; //화면이 768px보다 작으면 width 100프로 설정, 넘칠경우 필요에따라 스크롤이 생김
    overflow-x: auto;
  }
  padding: 1rem;
`;

const Category = styled.div`
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 40px;
  }
`;

const Categories = () => {
  return (
    <Box>
      {categories.map((c) => (
        <Category>{c.text}</Category>
      ))}
    </Box>
  );
};

export default Categories;
