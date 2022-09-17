// import { Box } from './Box/Box';
import { Breeds } from 'pages/Breeds/Breeds';
import { Gallery } from 'pages/Gallery/Gallery';
import { Voting } from 'pages/Voting/Voting';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { HomeView } from './HomeView/HomeView';
import { Nav } from './Nav/Nav';
import { NavLayout } from './NavLayout/NavLayout';

export const App = () => {
  return (
    // <Box display="flex">
    <Home>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/nav-bar" element={<NavLayout />}>
          <Route path="voting" element={<Voting />}></Route>
          <Route path="breeds" element={<Breeds />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
        </Route>
      </Routes>
    </Home>
    // </Box>
  );
};
