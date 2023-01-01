import { Box } from '../../components/Box/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import catAPI from '../../utils/catAPI';
import { SelectedBar } from './SelectedBar/SelectedBar';
import { SelectedView } from './SelectedView/SelectedView';
import { Spinner } from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';

export const Selected = () => {
  const { id } = useParams<string>();
  const [currentImg, setCurrentImg] = useState<{
    id?: string;
    favorit: boolean;
    url?: string;
  } | null>(null);

  useEffect(() => {
    if (id)
      catAPI.getOneImageByID(id).then(resp => {
        console.log('resp', resp);
        const currentImg = resp;
        setCurrentImg(currentImg);
      });
  }, [id]);

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
      <Box position="relative" flexGrow={1}>
        {currentImg ? (
          <Box position="relative">
            <SelectedView currentImg={currentImg} />
          </Box>
        ) : (
          <Spinner />
        )}
      </Box>
      {/* {logs.length > 0 && ( */}
      {/* // <Box mt={52} flexGrow={2} minHeight={280}></Box> */}
      {/* )} */}
    </>
  );
};
