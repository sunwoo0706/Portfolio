import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f13d22;
  display: grid;
  place-items: center;
  width: fit-content;
  padding: 2rem;
  border-radius: 0.8rem;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Home: NextPage = () => {
  return <Box>designed by sunwoo in californium</Box>;
};

export default Home;
