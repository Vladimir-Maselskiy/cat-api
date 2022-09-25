import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledkBotton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 20px;

  cursor: pointer;
  :hover {
    background-color: #fbe0dc;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active path {
    fill: #ffffff;
  }

  &.active div {
    background-color: #ff868e;
  }
`;
