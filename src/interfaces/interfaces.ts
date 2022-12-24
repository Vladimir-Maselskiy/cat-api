export interface IBreed {
  id: string;
  name: string;
}

export interface IPropSortBreeds {
  sortBreeds: (t: string) => void;
}
