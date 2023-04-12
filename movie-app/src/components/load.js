import styled from "styled-components";

const LoadBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  bottom: 0;
  &:before {
    content: "";

    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
  }
  &:after {
    content: "";

    width: 50px;
    height: 50px;
    background: #1a6844;
    animation: animate 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }

  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow {
    0%,
    100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
`;

const Loading_letter = styled.h1`
  position: absolute;
  top: 55%;
  left: 48%;
`;

const Load = () => {
  return (
    <div>
      <LoadBox />
      <Loading_letter>loading...</Loading_letter>
    </div>
  );
};

export default Load;
