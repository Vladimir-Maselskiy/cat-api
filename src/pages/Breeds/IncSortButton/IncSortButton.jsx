import { StyledBackBotton } from './IncSortButton.styled';
// import Language from '@mui/icons-material/Language';
import SvgIcon from '@mui/material/SvgIcon';

export const IncSortButton = () => {
  return (
    <StyledBackBotton>
      <SvgIcon sx={{ fontSize: 20 }} viewBox="0 0 12 20">
        <path
          d="M0.709994 10.9901L9.30969 19.5896C9.85669 20.1369 10.7437 20.1369 11.2905 19.5896C11.8373 19.0427 11.8373 18.1558 11.2905 17.6091L3.68104 9.99988L11.2902 2.39096C11.8371 1.84391 11.8371 0.957107 11.2902 0.410284C10.7434 -0.136761 9.85649 -0.136761 9.30949 0.410284L0.709774 9.00985C0.436354 9.28339 0.299805 9.64153 0.299805 9.99983C0.299805 10.3583 0.436624 10.7167 0.709994 10.9901Z"
          fill="#FF868E"
        />
      </SvgIcon>

      {/* <Language fontSize="large" /> */}
    </StyledBackBotton>
  );
};
