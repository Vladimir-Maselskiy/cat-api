// import { Box } from './Box/Box';
import { Breeds } from 'pages/Breeds/Breeds';
import { Gallery } from 'pages/Gallery/Gallery';
import { Voting } from 'pages/Voting/Voting';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatsGroupsLayout } from '../pages/CatsGroupsLayout/CatsGroupsLayout';
import { Home } from './Home/Home';
import { HomeView } from './HomeView/HomeView';
import { Nav } from './Nav/Nav';
import { NavLayout } from './NavLayout/NavLayout';

export const App = () => {
  const [likes, setLikes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  const setUsersCatsArrays = (type, currentCat) => {
    switch (type) {
      case 'likes':
        setLikes(p => [...p, currentCat]);
        break;
      case 'favourites':
        if (favourites.findIndex(cat => cat.id === currentCat.id) === -1) {
          setFavourites(p => [...p, currentCat]);
        } else {
          setFavourites(p => p.filter(cat => cat.id !== currentCat.id));
        }
        break;
      case 'dislikes':
        setDislikes(p => [...p, currentCat]);
        break;
      default:
        break;
    }
  };
  return (
    <Home>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/nav-bar" element={<NavLayout />}>
          <Route
            path="voting"
            element={<Voting setUsersCatsArrays={setUsersCatsArrays} />}
          ></Route>
          <Route path="breeds" element={<Breeds />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
          <Route
            path="cats-groups/:group"
            element={
              <CatsGroupsLayout groups={{ likes, favourites, dislikes }} />
            }
          ></Route>
        </Route>
      </Routes>
    </Home>
  );
};
