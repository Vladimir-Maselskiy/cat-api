import styled from 'styled-components';
import img from '../../img/girl-and-pet.png';

export const StyledHomeView = styled.div`
  position: relative;
  width: 775px;
  padding: 30px 30px 30px 65px;
  z-index: 2;
  background-size: contain;
  background-repeat: no-repeat;
  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fbe0dc;
    border-radius: 20px;
  }

  ::after {
    content: '';
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${img});
  }

  /* background-color: green; */
`;
