import { TCat } from 'interfaces/interfaces';
import { Breeds } from 'pages/Breeds/Breeds';
import { Gallery } from 'pages/Gallery/Gallery';
import { Selected } from 'pages/Selected/Selected';
import { Voting } from 'pages/Voting/Voting';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatsGroupsLayout } from '../pages/CatsGroupsLayout/CatsGroupsLayout';
import { Home } from './Home/Home';
import { HomeView } from './HomeView/HomeView';
import { Nav } from './Nav/Nav';
import { NavLayout } from './NavLayout/NavLayout';

export const App = () => {
  const [likes, setLikes] = useState<TCat[]>([]);
  const [favourites, setFavourites] = useState<TCat[]>([]);
  const [dislikes, setDislikes] = useState<TCat[]>([]);

  const setUsersCatsArrays = (
    type: 'likes' | 'favourites' | 'dislikes',
    currentCat: TCat | null
  ) => {
    switch (type) {
      case 'likes':
        if (currentCat) setLikes(p => [...p, currentCat]);
        break;
      case 'favourites':
        if (currentCat)
          if (
            favourites.findIndex(
              cat => cat.id === currentCat.id
            ) === -1
          ) {
            setFavourites(p => [...p, currentCat]);
          } else {
            setFavourites(p =>
              p.filter(cat => cat.id !== currentCat.id)
            );
          }
        break;
      case 'dislikes':
        if (currentCat)
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
            element={
              <Voting
                setUsersCatsArrays={setUsersCatsArrays}
              />
            }
          ></Route>
          <Route path="breeds" element={<Breeds />}></Route>
          <Route
            path="breeds/:id"
            element={<Selected />}
          ></Route>
          <Route
            path="gallery"
            element={<Gallery />}
          ></Route>
          <Route
            path="cats-groups/:group"
            element={
              <CatsGroupsLayout
                groups={{ likes, favourites, dislikes }}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </Home>
  );
};
