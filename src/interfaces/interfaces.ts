import {
  ActionMeta,
  PropsValue,
  SingleValue,
} from 'react-select';

export type TCat = {
  id?: string;
};

export interface IBreedByBreedsID {
  id: string;
  name: string;
  url: string;
  breeds: {
    id: string;
    name: string;
    life_span: string;
    description: string;
    temperament: string;
    weight: { imperial: string };
    origin: string;
  }[];
}

export interface IBreed {
  id: string;
  name: string;
  favorit: boolean;
  url: string;
}

export interface IPropSortBreeds {
  sortBreeds: (t: 'DESC' | 'ASC' | 'RANDOM') => void;
}

export type MyOptionType = {
  label: string;
  value: string;
};

export interface IPropReactSelect {
  onChangeLimit: (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ) => void;
}

export interface IPropGallery {
  title: string;
  initialOptions: string[];
  onChange: (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ) => void;
  name: string;
  placeholder: string;
  value: PropsValue<MyOptionType>;
}

export interface IPropsVoting {
  logs: {
    date: string;
    action: boolean;
    type: string;
    id: string | undefined;
    icon: JSX.Element | null;
  }[];
}
