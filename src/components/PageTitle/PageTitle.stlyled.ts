import styled from 'styled-components';

export const StyledPageTitle = styled.div<{
  isActive: boolean;
}>`
  height: 40px;
  background-color: ${p =>
    p.isActive ? '#ff868e' : '#FBE0DC'};
  border-radius: 10px;
  padding: 0 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 2px;
  color: #ffffff;
  margin-left: 10px;
`;
