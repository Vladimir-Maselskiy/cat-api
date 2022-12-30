import { StyledHome } from './Home.styled';

interface IProp {
  children: JSX.Element;
}

export const Home = ({ children }: IProp) => {
  return <StyledHome>{children}</StyledHome>;
};
