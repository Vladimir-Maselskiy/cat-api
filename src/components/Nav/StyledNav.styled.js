import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.div`
  width: 665px;
  height: 1100px;
  padding-left: 147px;
`;

export const StyledList = styled.ul`
  margin-top: 340px;
  padding-left: 0;
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 138px;
  height: 244px;
  :not(:first-child) {
    margin-left: 16px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const ItemIMG = styled.div`
  height: 198px;
  width: 100%;
  background-color: ${p => p.color};
  background-image: url(${p => p.img});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 4px solid #ffffff99;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.div`
  width: 100%;
  height: 36px;
  background-color: #ffffff;
  border-radius: 10px;
  text-align: center;
  vertical-align: bottom;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  /* font-family: 'Jost'; */
  color: #ff868e;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 2px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  :hover div:last-child {
    background-color: #fbe0dc;
  }
  &.active div:last-child {
    background-color: #ff868e;
    color: #ffffff;
  }
`;
