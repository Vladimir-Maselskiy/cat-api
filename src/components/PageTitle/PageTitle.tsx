import React from 'react';
import { StyledPageTitle } from './PageTitle.stlyled';

type TProp = {
  title: string;
  isActiveColor: boolean;
};

export const PageTitle = ({
  title,
  isActiveColor,
}: TProp) => {
  return (
    <StyledPageTitle isActive={isActiveColor}>
      {title}
    </StyledPageTitle>
  );
};
