import moment from 'moment';
import { Box } from 'components/Box/Box';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import catAPI from 'utils/catAPI';
import { VotingBar } from './VotingBar/VotingBar';
import { VotingButtons } from './VotingButtons/VotingButtons';
import { VotingLogs } from './VotingLogs/VotingLogs';
import { VotingView } from './VotingView/VotingView';

export const Voting = ({ setUsersCatsArrays }) => {
  const [currentImg, setCurrentImg] = useState(null);
  const [logs, setLogs] = useState([]);
  const logsListRef = useRef();

  useEffect(() => {
    catAPI.getBreeds().then(resp => setCurrentImg(...resp));
  }, []);

  useEffect(() => {
    logsListRef.current.scrollTop = logsListRef.current.scrollHeight + 1000;
  }, [logs]);

  const handleVotingButtonsClick = (type, icon, action) => {
    setUsersCatsArrays(type, currentImg);
    const date = moment().format('HH:mm');
    setLogs(p => [...p, { type, action, id: currentImg.id, date, icon }]);
    if (type !== 'favourites') {
      catAPI.getBreeds().then(resp => setCurrentImg(...resp));
    }
    if (type === 'favourites') {
      toggleFavoritStatus();
    }
  };

  const toggleFavoritStatus = () => {
    setCurrentImg(p => ({ ...p, favorit: !p.favorit }));
  };

  return (
    <>
      <VotingBar />
      <Box position="relative">
        {currentImg && (
          <>
            <VotingView currentImg={currentImg} />
            <VotingButtons
              handleClick={handleVotingButtonsClick}
              isActive={currentImg.favorit}
            ></VotingButtons>
          </>
        )}
      </Box>
      <Box mt={52}>
        <VotingLogs ref={logsListRef} logs={logs}></VotingLogs>
      </Box>
    </>
  );
};
