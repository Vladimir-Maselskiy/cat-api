import styled from 'styled-components';

export const StyledBreedsGallery = styled.ul`
  display: grid;
  width: 640px;
  height: 716px;
  grid-template-areas:
    'img0 img1 img2'
    'img0 img3 img3'
    'img4 img3 img3'
    'img5 img6 img7'
    'img8 img8 img7'
    'img8 img8 img9'
    'img10 img11 img12'
    'img10 img13 img13'
    'img14 img13 img13'
    'img15 img16 img17'
    'img18 img18 img17'
    'img18 img18 img19';
  grid-template-rows: ${p =>
    `repeat(${Math.ceil((p.perPage / 5) * 3)}, 140px)`};
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: scroll;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  gap: 20px;
`;
export const StyledItem = styled.li`
  display: block;
  position: relative;
  grid-area: ${p => 'img' + p.gridPlace};
`;

export const StyledIMG = styled.img`
  display: block;
  border-radius: 20px;
  object-fit: cover;
  object-position: 70% 10%;
  height: 100%;
  width: 100%;
`;
export const StyledHoverIMGBox = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  opacity: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px 10px 10px;
  border-radius: 20px;
  object-fit: cover;
  object-position: 70% 10%;
  height: 100%;
  width: 100%;
  :hover {
    background-color: #ff868e60;
    opacity: 1;
  }
`;
export const StyledHoverName = styled.div`
  display: block;
  height: 34px;
  width: 100%;
  text-align: center;
  line-height: 34px;
  background-color: #ffffff;
  border-radius: 20px;
  object-fit: cover;
  object-position: 70% 10%;
`;
