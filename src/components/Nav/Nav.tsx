import {
  StyledNav,
  StyledList,
  ListItem,
  ItemTitle,
  ItemIMG,
  StyledNavLink,
} from './StyledNav.styled';

const voting = require('../../img/vote-table.png');
const breeds = require('../../img/pet-breeds.png');
const gallery = require('../../img/images-search.png');

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
            <ItemIMG
              color="#FFD280"
              img={gallery}
            ></ItemIMG>
            <ItemTitle>GALLERY</ItemTitle>
          </StyledNavLink>
        </ListItem>
      </StyledList>
    </StyledNav>
  );
};
