import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import pallete from 'shared/Pallete';

const IntroParagraph = styled.p`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4vw;
  font-weight: 400;
  line-height: 5.6vw;
  letter-spacing: 0.2vw;
  color: ${pallete.scheme.mint};
`;

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.push('/content'), 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <IntroParagraph>
      A long time ago in a galaxy far,
      <br />
      far away....
    </IntroParagraph>
  );
};

export default Home;
