import { Box } from 'components/Box/Box';
import { Spinner } from '../../components/Spinner/Spinner';
import { GalleryBar } from './GalleryBar/GalleryBar';
// import { StyledGallery } from './StyledGallery.styled';

export const Gallery = ({ children }) => {
  return (
    <>
      <Box width={640}>
        <GalleryBar
        // setBreeds={setBreeds}
        // onChangeLimit={onChangeLimit}
        // sortBreeds={sortBreeds}
        />
        {/* <Box mt={20}>{breeds && <BreedsGallery breeds={visibleBreeds} />}</Box> */}
      </Box>
      <Spinner />
    </>
  );
};
