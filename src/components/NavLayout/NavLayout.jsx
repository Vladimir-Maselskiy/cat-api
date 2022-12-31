import { Box } from 'components/Box/Box';
import { FindBreedsForm } from 'components/FindBreedsForm/FindBreedsForm';
import { LinksButtonBlock } from 'components/LinksButtonBlock/LinksButtonBlock';
import { Outlet } from 'react-router-dom';

export const NavLayout = () => {
  return (
    <Box
      p="30px 30px 30px 65px"
      display="flex"
      flexDirection="column"
    >
      <Box borderRadius={20} display="flex">
        <FindBreedsForm />
        <LinksButtonBlock />
      </Box>
      <Box
        bg="#FFFFFF"
        mt={20}
        borderRadius={20}
        p={20}
        flexGrow={2}
        maxHeight={990}
        display="flex"
        flexDirection="column"
        // overflow="hidden"
      >
        <Outlet />
      </Box>
    </Box>
  );
};
