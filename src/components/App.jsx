import { Box } from './Box/Box';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <Box display="flex" border="1px solid red">
      <Home />
    </Box>
  );
};
