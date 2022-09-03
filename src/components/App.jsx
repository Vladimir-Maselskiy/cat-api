// import { Box } from './Box/Box';
import { Home } from './Home/Home';
import { HomeView } from './HomeView/HomeView';
import { Nav } from './Nav/Nav';

export const App = () => {
  return (
    // <Box display="flex">
    <Home>
      <Nav />
      <HomeView />
    </Home>
    // </Box>
  );
};
