import { Box } from 'components/Box/Box';
import { IBreedByBreedsID } from 'interfaces/interfaces';
import {
  StyledDecs,
  StyledInfo,
  StyledTitle,
} from './SelectedInfoBox.styled';

interface IProps {
  breed: IBreedByBreedsID | null;
}

export const SelectedInfoBox = ({ breed }: IProps) => {
  console.log('SelectedInfoBox breed', breed);
  return (
    <>
      {breed && (
        <Box
          p="26px 40px 40px 40px"
          position="relative"
          display="flex"
          alignItems="center"
          flexDirection="column"
          border="2px solid #FBE0DC"
          borderRadius={20}
        >
          <StyledDecs>Family companion cat</StyledDecs>
          <Box display="flex" mt={20}>
            <Box width={1 / 2}>
              <StyledTitle>
                Temperament:
                <StyledInfo>
                  <br />
                  {breed?.breeds[0].temperament}
                </StyledInfo>
              </StyledTitle>
            </Box>
            <Box width={1 / 2}>
              <StyledTitle>
                Origin:&nbsp;
                <StyledInfo>
                  {breed?.breeds[0].origin}
                </StyledInfo>
              </StyledTitle>
              <StyledTitle>
                Weight:&nbsp;
                <StyledInfo>
                  {breed?.breeds[0].weight.imperial} kgs
                </StyledInfo>
              </StyledTitle>
              <StyledTitle>
                Life span:&nbsp;
                <StyledInfo>
                  {breed?.breeds[0].life_span} years
                </StyledInfo>
              </StyledTitle>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
