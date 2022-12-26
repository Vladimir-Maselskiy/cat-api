import React, { forwardRef } from 'react';
import { IPropsVoting } from '../../../interfaces/interfaces';
import {
  IconBox,
  StyledID,
  StyledLog,
  StyledLogsList,
} from './VotingLogs.styled';
var {
  nanoid,
} = require('../../../../node_modules/nanoid/index');

export const VotingLogs = forwardRef(
  ({ logs }: IPropsVoting, ref) => {
    return (
      <StyledLogsList ref={ref}>
        {logs.map(
          ({ date, action, type, id, icon: Icon }) => (
            <StyledLog key={nanoid()}>
              <p>{date}</p>
              <StyledID>
                Image ID: <span>{id}</span> was
                {action ? ' added ' : ' removed from '}
                {type}
              </StyledID>
              <IconBox>{Icon}</IconBox>
            </StyledLog>
          )
        )}
      </StyledLogsList>
    );
  }
);
