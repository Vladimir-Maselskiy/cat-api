import { ActionMeta, SingleValue } from 'react-select';

export interface IBreed {
  id: string;
  name: string;
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
