import { Box } from '../../components/Box/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import catAPI from '../../utils/catAPI';
import { SelectedBar } from './SelectedBar/SelectedBar';
import { ImageSlider } from './ImageSlider/ImageSlider';
import { Spinner } from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { SelectedInfoBox } from './SelectedInfoBox/SelectedInfoBox';
import { IBreedByBreedsID } from 'interfaces/interfaces';

export const Selected = () => {
  const [breedID, setBreedID] = useState(null);
  const [breed, setBreed] = useState<any[] | null>(null);
  const [visibleBreeds, setVisibleBreeds] = useState<
    IBreedByBreedsID[] | null
  >(null);
  const [currentBreed, setCurrentBreed] =
    useState<IBreedByBreedsID | null>(null);

  const [idOnButton, setIdOnButton] = useState('');

  const { id } = useParams<string>();

  useEffect(() => {
    if (id)
      catAPI.getOneImageByID(id).then(resp => {
        console.log('resp in Selected', resp);
        const currentBreed = resp;
        const breedID = resp.breeds[0].id;
        setCurrentBreed(currentBreed);
        setBreedID(breedID);
      });
  }, [id]);

  useEffect(() => {
    if (breedID) {
      catAPI.getBreedsByBreedID(breedID).then(setBreed);
    }
  }, [breedID]);

  useEffect(() => {
    if (breed && currentBreed) {
      let filteredBreeds = breed.filter(
        breed => currentBreed.id !== breed.id
      );
      if (filteredBreeds.length > 4) {
        filteredBreeds = filteredBreeds.slice(0, 4);
      }
      setVisibleBreeds([currentBreed, ...filteredBreeds]);
    }
  }, [currentBreed, breed]);

  const setIdOfVisibleBreed = (index: number) => {
    if (visibleBreeds) {
      const currentBreed = visibleBreeds[index];
      setIdOnButton(currentBreed.id);
      return;
    }
    if (currentBreed) {
      setIdOnButton(currentBreed.id);
    }
  };

  // const handleVotingButtonsClick = (
  //   type: 'likes' | 'favourites' | 'dislikes',
  //   icon: JSX.Element | null,
  //   action: boolean
  // ) => {
  //   const date = moment().format('HH:mm');
  //   setLogs(p => [
  //     ...p,
  //     { type, action, id: currentImg?.id, date, icon },
  //   ]);
  //   if (type !== 'favourites') {
  //     catAPI.getBreeds({}).then(resp => {
  //       const currentImg = resp[0];
  //       setCurrentImg(currentImg);
  //     });
  //   }
  //   if (type === 'favourites') {
  //     toggleFavoritStatus();
  //   }
  // };

  return (
    <>
      {id && <SelectedBar id={idOnButton} />}
      <Box
        position="relative"
        maxHeight={360}
        mt={20}
        flexGrow={1}
      >
        {currentBreed ? (
          <Box position="relative">
            <ImageSlider
              visibleBreeds={visibleBreeds}
              setIdOfVisibleBreed={setIdOfVisibleBreed}
            />
          </Box>
        ) : (
          <Spinner />
        )}
      </Box>

      <Box mt={52} flexGrow={2} minHeight={280}>
        <SelectedInfoBox breed={currentBreed} />
      </Box>
    </>
  );
};
