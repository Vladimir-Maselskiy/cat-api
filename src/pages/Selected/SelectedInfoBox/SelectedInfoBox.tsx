import { Box } from 'components/Box/Box';
import { IBreedByBreedsID } from 'interfaces/interfaces';
import {
  StyledBreedName,
  StyledDecs,
  StyledInfo,
  StyledTitle,
} from './SelectedInfoBox.styled';

interface IProps {
  breed: IBreedByBreedsID | null;
}

export const SelectedInfoBox = ({ breed }: IProps) => {
  return (
    <>
      {breed && (
        <Box
          p="26px 60px 40px 60px"
          position="relative"
          display="flex"
          alignItems="center"
          flexDirection="column"
          border="2px solid #FBE0DC"
          borderRadius={20}
        >
          <StyledBreedName>
            {breed?.breeds[0].name}
          </StyledBreedName>
          <StyledDecs>Family companion cat</StyledDecs>
          <Box
            display="flex"
            mt={20}
            width="100%"
            justifyContent="space-between"
          >
            <Box width={0.45}>
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
