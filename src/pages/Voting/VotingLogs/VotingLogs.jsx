import { nanoid } from 'nanoid';
import { forwardRef } from 'react';
import {
  IconBox,
  StyledID,
  StyledLog,
  StyledLogsList,
} from './VotingLogs.styled';
export const VotingLogs = forwardRef(({ logs }, ref) => {
  return (
    <StyledLogsList ref={ref}>
      {logs.map(({ date, action, type, id, icon: Icon }) => (
        <StyledLog key={nanoid()}>
          <p>{date}</p>
          <StyledID>
            Image ID: <span>{id}</span> was
            {action ? ' added ' : ' removed from '}
            {type}
          </StyledID>
          <IconBox>{Icon}</IconBox>
        </StyledLog>
      ))}
    </StyledLogsList>
  );
});
