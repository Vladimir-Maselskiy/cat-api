import styled from 'styled-components';

export const StyledBreedsGallery = styled.ul`
  display: grid;
  width: 640px;
  max-height: 782px;
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
  grid-template-rows: ${p => `repeat(${(p.perPage / 5) * 3}, 140px)`};
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
  grid-area: ${p => 'img' + p.gridPlace};
  /* grid-area: nav01; */
  /* height: 200px; */
`;

export const StyledIMG = styled.img`
  display: block;
  border-radius: 20px;

  object-fit: cover;
  object-position: 70% 10%;
  height: 100%;
  width: 100%;
  /* height: 100%;
  width: 100%; */
`;
