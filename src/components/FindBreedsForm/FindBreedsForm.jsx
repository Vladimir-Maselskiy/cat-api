import React from 'react';

import { useFormik } from 'formik';
import {
  StyledSubitButton,
  StyledForm,
  StyledInput,
} from './FindBreedsForm.styled';

export const FindBreedsForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will

  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInput
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <StyledSubitButton type="submit">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3608 18.2168L14.6007 13.2662C15.8246 11.8113 16.4952 9.98069 16.4952 8.07499C16.4952 3.62251 12.8727 0 8.42021 0C3.96773 0 0.345215 3.62251 0.345215 8.07499C0.345215 12.5275 3.96773 16.15 8.42021 16.15C10.0917 16.15 11.6846 15.6458 13.0465 14.6888L17.8427 19.677C18.0431 19.8852 18.3128 20 18.6017 20C18.8752 20 19.1347 19.8957 19.3316 19.7061C19.7501 19.3034 19.7635 18.6357 19.3608 18.2168ZM8.42021 2.10652C11.7113 2.10652 14.3887 4.78391 14.3887 8.07499C14.3887 11.3661 11.7113 14.0435 8.42021 14.0435C5.12912 14.0435 2.45173 11.3661 2.45173 8.07499C2.45173 4.78391 5.12912 2.10652 8.42021 2.10652Z"
            fill="#FF868E"
          />
        </svg>
      </StyledSubitButton>
    </StyledForm>
  );
};
