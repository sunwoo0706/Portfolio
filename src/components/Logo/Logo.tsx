import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

const yellow = pallete.scheme.yellow;

const fadeOutAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) scale(8);
  }
  to {
    transform: translate(-50%, -50%) scale(0);
    display: none;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: StarWars, sans-serif;
  text-align: center;
  font-size: 50px;
  // 글자 테두리
  text-shadow: -2px -2px 0 ${yellow}, -2px -1px 0 ${yellow}, -2px 0 0 ${yellow},
    -2px 1px 0 ${yellow}, -2px 2px 0 ${yellow}, -1px -2px 0 ${yellow},
    -1px -1px 0 ${yellow}, -1px 0 0 ${yellow}, -1px 1px 0 ${yellow},
    -1px 2px 0 ${yellow}, 0 -2px 0 ${yellow}, 0 -1px 0 ${yellow},
    0 0 0 ${yellow}, 0 1px 0 ${yellow}, 0 2px 0 ${yellow}, 1px -2px 0 ${yellow},
    1px -1px 0 ${yellow}, 1px 0 0 ${yellow}, 1px 1px 0 ${yellow},
    1px 2px 0 ${yellow}, 2px -2px 0 ${yellow}, 2px -1px 0 ${yellow},
    2px 0 0 ${yellow}, 2px 1px 0 ${yellow}, 2px 2px 0 ${yellow};
  line-height: 86%;
  letter-spacing: initial;
  animation: ${fadeOutAnimation} 7s forwards;
`;

export const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      SUNW
      <br />
      WARS
    </LogoWrapper>
  );
};
