import {
  StyledNav,
  StyledList,
  ListItem,
  ItemTitle,
  ItemIMG,
  StyledNavLink,
} from './StyledNav.styled';

import voting from '../../img/vote-table.png';
import breeds from '../../img/pet-breeds.png';
import gallery from '../../img/images-search.png';

export const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <ListItem>
          <StyledNavLink to="./nav-bar/voting">
            <ItemIMG color="#B4B7FF" img={voting}></ItemIMG>
            <ItemTitle>VOTING</ItemTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="./nav-bar/breeds">
            <ItemIMG color="#97EAB9" img={breeds}></ItemIMG>
            <ItemTitle>BREEDS</ItemTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="./nav-bar/gallery">
            <ItemIMG color="#FFD280" img={gallery}></ItemIMG>
            <ItemTitle>GALLERY</ItemTitle>
          </StyledNavLink>
        </ListItem>
      </StyledList>
    </StyledNav>
  );
};
