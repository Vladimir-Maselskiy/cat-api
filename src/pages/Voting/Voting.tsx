import React from 'react';
import moment from 'moment';
import { Box } from '../../components/Box/Box';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import catAPI from '../../utils/catAPI';
import { VotingBar } from './VotingBar/VotingBar';
import { VotingButtons } from './VotingButtons/VotingButtons';
import { VotingLogs } from './VotingLogs/VotingLogs';
import { VotingView } from './VotingView/VotingView';
import { Spinner } from '../../components/Spinner/Spinner';

interface IProps {
  setUsersCatsArrays: (
    type: 'likes' | 'favourites' | 'dislikes',
    currentCat: object | null
  ) => void;
}

interface ILogs {
  date: string;
  action: boolean;
  type: string;
  id: string | undefined;
  icon: JSX.Element | null;
}

export const Voting = ({ setUsersCatsArrays }: IProps) => {
  const [currentImg, setCurrentImg] = useState<{
    id?: string;
    favorit: boolean;
    url?: string;
  } | null>(null);
  const [logs, setLogs] = useState<ILogs[]>([]);
  const logsListRef = useRef<HTMLUListElement>();

  useEffect(() => {
    catAPI.getBreeds({}).then(resp => {
      const currentImg = resp[0];
      setCurrentImg(currentImg);
    });
  }, []);

  useEffect(() => {
    if (logsListRef.current)
      logsListRef.current.scrollTop =
        logsListRef.current.scrollHeight + 1000;
  }, [logs]);

  const toggleFavoritStatus = () => {
    setCurrentImg(p => ({ ...p, favorit: !p?.favorit }));
  };

  const handleVotingButtonsClick = (
    type: 'likes' | 'favourites' | 'dislikes',
    icon: JSX.Element | null,
    action: boolean
  ) => {
    setUsersCatsArrays(type, currentImg);
    const date = moment().format('HH:mm');
    setLogs(p => [
      ...p,
      { type, action, id: currentImg?.id, date, icon },
    ]);
    if (type !== 'favourites') {
      catAPI.getBreeds({}).then(resp => {
        const currentImg = resp[0];
        setCurrentImg(currentImg);
      });
    }
    if (type === 'favourites') {
      toggleFavoritStatus();
    }
  };

  return (
    <>
      <VotingBar />
      <Box position="relative" flexGrow={1}>
        {currentImg ? (
          <Box position="relative">
            <VotingView currentImg={currentImg} />
            <VotingButtons
              handleClick={handleVotingButtonsClick}
              isActive={currentImg.favorit}
            ></VotingButtons>
          </Box>
        ) : (
          <Spinner />
        )}
      </Box>
      {logs.length > 0 && (
        <Box mt={52} flexGrow={2} minHeight={280}>
          <VotingLogs
            ref={logsListRef}
            logs={logs}
          ></VotingLogs>
        </Box>
      )}
    </>
  );
};
