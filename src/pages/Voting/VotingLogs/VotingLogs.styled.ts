import styled from 'styled-components';

export const StyledLogsList = styled.ul<{ ref: any }>`
  max-height: 280px;
  font-size: 16px;
  line-height: 60px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledLog = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  height: 60px;
  padding-left: 15px;
  border-radius: 10px;
  background-color: #f8f8f7;
  :not(:first-child) {
    margin-top: 10px;
  }
  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 61px;
    height: 30px;
    background-color: #ffffff;
    color: #1d1d1d;
    border-radius: 5px;
  }
`;
export const StyledID = styled.span`
  margin-left: 20px;
  color: #8c8c8c;
  & span {
    color: #1d1d1d;
  }
`;
export const IconBox = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-45%);
`;
