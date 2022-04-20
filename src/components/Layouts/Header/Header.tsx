import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  width: 100%;
  margin-top: 10em;
  h1 {
    font-size: 2em;
    text-align: center;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <h1>Sunwoo's portfolio</h1>
    </HeaderWrapper>
  );
};
