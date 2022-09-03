import {
  StyledNav,
  StyledList,
  ListItem,
  ItemTitle,
  ItemIMG,
} from './StyledNav.styled';

import voting from '../../img/vote-table.png';
import breeds from '../../img/pet-breeds.png';
import gallery from '../../img/images-search.png';

export const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <ListItem>
          <ItemIMG color="#B4B7FF" img={voting}></ItemIMG>
          <ItemTitle>VOTING</ItemTitle>
        </ListItem>
        <ListItem>
          <ItemIMG color="#97EAB9" img={breeds}></ItemIMG>
          <ItemTitle>BREEDS</ItemTitle>
        </ListItem>
        <ListItem>
          <ItemIMG color="#FFD280" img={gallery}></ItemIMG>
          <ItemTitle>GALLERY</ItemTitle>
        </ListItem>
      </StyledList>
    </StyledNav>
  );
};
