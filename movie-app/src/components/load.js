import styled from "styled-components";

const LoadBox = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
`;

const Load = () => {
  return (
    <LoadBox>
      <h1>Loading...</h1>
    </LoadBox>
  );
};

export default Load;
