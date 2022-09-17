import { Box } from 'components/Box/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import catAPI from 'utils/catAPI';
import { VotingBar } from './VotingBar/VotingBar';
import { VotingButtons } from './VotingButtons/VotingButtons';
import { VotingView } from './VotingView/VotingView';

export const Voting = () => {
  const [currentImg, setCurrentImg] = useState(null);
  useEffect(() => {
    catAPI.getBreeds().then(setCurrentImg);
  }, []);
  return (
    <>
      <VotingBar />
      <Box position="relative">
        {currentImg && (
          <>
            <VotingView currentImg={currentImg} />
            <VotingButtons></VotingButtons>
          </>
        )}
      </Box>
    </>
  );
};
