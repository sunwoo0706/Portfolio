import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';

import pallete from 'shared/Pallete';

interface IntroParagraphProps {
  play: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
}

const IntroParagraphWrapper = styled.p`
  font-size: 4vw;
  font-weight: 400;
  line-height: 5.6vw;
  letter-spacing: 0.2vw;
  color: ${pallete.scheme.mint};
`;

const StartButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 0.2rem solid ${pallete.scheme.mint};
  color: ${pallete.scheme.mint};
  background: ${pallete.scheme.black};
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const IntroWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

export const IntroParagraph: React.FC<IntroParagraphProps> = ({
  play,
  setPlay,
}) => {
  return play ? (
    <IntroWrapper>
      <IntroParagraphWrapper>
        A long time ago in a galaxy far,
        <br />
        far away....
      </IntroParagraphWrapper>
    </IntroWrapper>
  ) : (
    <StartButton onClick={() => setPlay(true)}>⭐️ click to play</StartButton>
  );
};
