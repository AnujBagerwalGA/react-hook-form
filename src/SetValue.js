import React from 'react';
import { useForm } from 'react-hook-form';

const SetValue = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input type='text' {...register('firstName')} />
      <label>Last Name</label>
      <input type='text' {...register('lastName', { minLength: 10 })} />
      {errors.lastName && (
        <p style={{ color: 'red' }}>
          "This Field must have more than 10 characters"
        </p>
      )}
      <button type='button' onClick={() => setValue('firstName', 'Grace')}>
        Set First Name Value
      </button>
      <button
        type='button'
        onClick={() =>
          setValue('lastName', 'Hopper', {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      >
        Set Last Name
      </button>
      <input type='submit' />
    </form>
  );
};

export default SetValue;
