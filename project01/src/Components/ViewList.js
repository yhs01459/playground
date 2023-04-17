import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 30px;
  width: 200px;
  height: 200px;
  p {
    border: 1rem solid red;
    margin: 0;
    padding: 0;
  }
`;
const ViewList = () => {
  const a = ["1", "2", "3"];
  return (
    <Box>
      {a.map((b) => {
        return <p>{b}</p>;
      })}
    </Box>
  );
};

export default ViewList;
