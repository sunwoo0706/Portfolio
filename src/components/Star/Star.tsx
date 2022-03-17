import styled from '@emotion/styled';

import { StarElementProps, generateStar } from './container';
import { displayType } from 'shared/Type';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

const StarLayer = styled.div<StarElementProps>`
  ${({ n, size, display }) => css`
    width: ${size}px;
    height: ${size}px;
    ${generateStar(n, display)}
  `}
  background: transparent;
  &:after {
    content: ' ';
    position: absolute;
    background: transparent;
    ${({ n, size, display }) => css`
      width: ${size}px;
      height: ${size}px;
      ${generateStar(n, display)}
    `}
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
