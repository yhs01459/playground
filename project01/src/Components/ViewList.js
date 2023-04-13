import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 0.1rem solid blue;
  p {
    border: 0.1rem solid red;
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
