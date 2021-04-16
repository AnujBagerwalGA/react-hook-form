import * as React from 'react';
import { useForm } from 'react-hook-form';

const ClearError = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  React.useEffect(() => {
    // validate onMount
    handleSubmit(onSubmit)();
    // eslint-disable-next-line
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input type='text' {...register('firstName', { required: true })} />
      {errors.firstName && (
        <p style={{ color: 'red' }}>This Field is Required</p>
      )}
      <label>Last Name</label>
      <input type='text' {...register('lastName', { required: true })} />
      {errors.lastName && (
        <p style={{ color: 'red' }}>This Field is Required</p>
      )}
      <label>Username</label>
      <input type='text' {...register('username', { required: true })} />
      {errors.username && (
        <p style={{ color: 'red' }}>This Field is Required</p>
      )}
      <button type='button' onClick={() => clearErrors('firstName')}>
        Clear First Name Errors
      </button>
      <button
        type='button'
        onClick={() => clearErrors(['firstName', 'lastName'])}
      >
        Clear First and Last Name Errors
      </button>
      <button type='button' onClick={() => clearErrors()}>
        Clear All Errors
      </button>
      <input type='submit' />
    </form>
  );
};

export default ClearError;
