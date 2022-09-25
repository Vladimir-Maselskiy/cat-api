import styled from 'styled-components';

export const StyledVotingButton = styled.button`
  display: block;
  border-radius: 20px;
  object-fit: cover;
  object-position: 70% 10%;
  height: 100%;
  width: 100%;
`;
export const StyledBottonsBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  width: 248px;
  height: 80px;
  background-color: #ffffff;
  outline: 4px solid #ffffff;
  overflow: hidden;
  border-radius: 20px;
`;

export const StyledkBotton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${p => p.bg};
  fill: #ffffff;
  /* border-radius: 20px; */
  cursor: pointer;
  :hover {
    background-color: ${p => `${p.bg}30`};
    fill: ${p => p.bg};
  }
`;
