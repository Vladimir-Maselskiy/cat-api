import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { SpinnerBox } from './Spriiner.styled';

export const Spinner = () => {
  return (
    <SpinnerBox>
      <RotatingLines
        strokeColor="#FBE0DC"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </SpinnerBox>
  );
};
