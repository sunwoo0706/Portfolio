import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  left: 12.5vw;
  width: 75vw;
  height: 150vw;
  color: ${pallete.scheme.yellow};
  transform-origin: 50% 100%;
  transform: perspective(30rem) rotateX(20deg);
  overflow: scroll;
  font-size: 6rem;
  opacity: 0;
  animation: ${fadein} 1s linear forwards;
  animation-delay: 7s;
`;

export const ScrollContainer: React.FC = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};
