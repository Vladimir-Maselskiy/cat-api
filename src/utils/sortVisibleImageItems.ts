interface IParams {
  visibleBreeds: any[];
  order: string | undefined;
}

export const sortVisibleImageItems = ({
  visibleBreeds,
  order,
}: IParams): any[] => {
  return [
    ...visibleBreeds.sort((a, b) => {
      if (order === 'RANDOM') {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      }

      if (order === 'DESC') {
        if (a.breeds[0].name < b.breeds[0].name) return 1;
        if (a.breeds[0].name > b.breeds[0].name) return -1;
        return 0;
      }

      if (order === 'ASC') {
        if (b.breeds[0].name > a.breeds[0].name) return -1;
        if (b.breeds[0].name < a.breeds[0].name) return 1;
        return 0;
      }
      return 0;
    }),
  ];
};
