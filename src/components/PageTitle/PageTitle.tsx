import React from 'react';
import { StyledPageTitle } from './PageTitle.stlyled';

type TProp = {
  title: string;
};

export const PageTitle = ({ title }: TProp) => {
  return <StyledPageTitle>{title}</StyledPageTitle>;
};
