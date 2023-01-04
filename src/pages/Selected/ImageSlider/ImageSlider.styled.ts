import styled from 'styled-components';

export const StyledIMG = styled.img`
  display: block;
  border-radius: 20px;
  object-fit: cover;
  object-position: 70% 10%;
  height: 100%;
  width: 100%;
`;

export const DotsBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  display: flex;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
`;

export const StyledDot = styled.div<{ isActiv: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${p =>
    p.isActiv ? '#FF868E' : '#fbe0dc'};
  border-radius: 50%;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
