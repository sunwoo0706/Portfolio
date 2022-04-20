import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import IntroParagraph from 'components/Intro/IntroParagraph';
import Logo from 'components/Intro/Logo';
import Star from 'components/Star';
import ScrollContainer from 'components/ScrollContainer';
import Header from 'components/Layouts/Header';

const Home: NextPage = () => {
  const [isIntro, setIntro] = useState<boolean>(true);
  const [play, setPlay] = useState<boolean>(false);

  const introTimeOut = () => {
    setTimeout(() => {
      const audio = new Audio('/audios/Star_Wars_Intro.mp3');
      audio.play();

      setIntro(false);
    }, 4000);
  };

  useEffect(() => {
    if (play) {
      introTimeOut();
    }
  }, [play]);

  return isIntro ? (
    <IntroParagraph play={play} setPlay={setPlay} />
  ) : (
    <>
      <Star />
      <Logo />
      <ScrollContainer>
        <Header />
      </ScrollContainer>
    </>
  );
};

export default Home;
