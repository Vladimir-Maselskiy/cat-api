import { Box } from '../../components/Box/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import catAPI from '../../utils/catAPI';
import { SelectedBar } from './SelectedBar/SelectedBar';
import { SelectedView } from './SelectedView/SelectedView';
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

  const { id } = useParams<string>();
  const [currentBreed, setCurrentBreed] =
    useState<IBreedByBreedsID | null>(null);

  useEffect(() => {
    if (id)
      catAPI.getOneImageByID(id).then(resp => {
        const currentBreed = resp;
        const breedID = resp.breeds[0].id;
        setCurrentBreed(currentBreed);
        setBreedID(breedID);
        console.log('currentBreed', currentBreed);
      });
  }, [id]);

  useEffect(() => {
    if (breedID) {
      catAPI.getBreedsByBreedID(breedID).then(setBreed);
    }
  }, [breed]);

  useEffect(() => {
    if (visibleBreeds && currentBreed) {
      const filteredBreeds = visibleBreeds.filter(
        breed => currentBreed.id !== breed.id
      );
      setVisibleBreeds([currentBreed, ...filteredBreeds]);
    }
  }, [currentBreed, visibleBreeds]);

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
      {id && <SelectedBar id={id} />}
      <Box
        position="relative"
        maxHeight={360}
        mt={20}
        flexGrow={1}
      >
        {currentBreed ? (
          <Box position="relative">
            <SelectedView currentImg={currentBreed} />
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
