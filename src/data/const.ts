export const orderSelectOptions = ['Random', 'Desc', 'Asc'];
export const typeSelectOptions = [
  'All',
  'Static',
  'Animated',
];
export const limitSelectOptions = [
  '5 items per page',
  '10 items per page',
  '15 items per page',
  '20 items per page',
];

export const initialLimit = {
  value: limitSelectOptions[0].toUpperCase(),
  label: limitSelectOptions[0],
};
export const initialOrder = {
  value: orderSelectOptions[0].toUpperCase(),
  label: orderSelectOptions[0],
};
export const initialType = {
  value: typeSelectOptions[0].toUpperCase(),
  label: typeSelectOptions[0],
};
export const initialCurrentBreed = {
    value: 'NONE',
    label: 'None',
  };
