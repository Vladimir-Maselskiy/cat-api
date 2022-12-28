interface IParams {
  visibleBreeds: any[];
  order: 'DESC' | 'ASC' | 'RANDOM';
}

export const sortVisibleImageItems = ({
  visibleBreeds,
  order,
}: IParams): any[] => {
  return [
    ...visibleBreeds.sort((a, b) => {
      if (order === 'RANDOM') {
        if (a.breeds[0].id < b.breeds[0].id) return 1;
        if (a.breeds[0].id > b.breeds[0].id) return -1;
        return 0;
      }

      if (order === 'DESC') {
        if (a.breeds[0].name < b.breeds[0].name) return 1;
        if (a.breeds[0].name > b.breeds[0].name) return -1;
        return 0;
      }

      if (b.breeds[0].name > a.breeds[0].name) return -1;
      if (b.breeds[0].name < a.breeds[0].name) return 1;
      return 0;
    }),
  ];
};
