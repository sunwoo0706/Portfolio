import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import IntroParagraph from 'components/IntroParagraph';
import Logo from 'components/Logo';
import Star from 'components/Star';

const Home: NextPage = () => {
  const [isIntro, setIntro] = useState<boolean>(true);
  const [play, setPlay] = useState<boolean>(false);

  const introTimeOut = () => {
    setTimeout(() => {
      const audio = new Audio('/audios/Star_Wars_Intro.mp3');
      setIntro(false);
      audio.play();
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
    </>
  );
};

export default Home;
