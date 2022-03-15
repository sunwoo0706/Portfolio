import styled from '@emotion/styled';

import { StarElementProps, generateStar } from './container';
import { displayType } from 'shared/Type';
import { useEffect, useState } from 'react';

const StarLayer = styled.div<StarElementProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: transparent;
  ${({ n, display }) => generateStar(n, display)};
  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: transparent;
    ${({ n, display }) => generateStar(n, display)};
  }
`;

export const Star: React.FC = () => {
  const [display, setDisplay] = useState<displayType>();

  useEffect(() => {
    setDisplay({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <>
      <StarLayer n={100} size={1} display={display!} />
      <StarLayer n={100} size={2} display={display!} />
    </>
  );
};
