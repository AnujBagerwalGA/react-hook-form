import React from 'react';
import './styles/App.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Create Schema for validation
const SignupSchema = yup.object().shape({
  firstName: yup.string().required('Please Enter First Name'),
  lastName: yup.string(),
  email: yup
    .string()
    .email('Please Enter Vaild Email')
    .required('Please Enter Email'),
});

const YupForm = () => {
  const {
    register, // use to detact/register field in form
    handleSubmit, // use to handle onChange event
    formState: { errors }, // formState is content multiple objects // one of them is errors
  } = useForm({
    resolver: yupResolver(SignupSchema), // resolver is allow to use different libery to valid our form
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log('errors', errors);
  return (
    <div className='container py-5'>
      <div className='card border-0 shadow  p-4 w-50 mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Your First name'
              ref={register}
              {...register('firstName')}
            />
            {errors?.firstName && <p>{errors.firstName.message}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Your First name'
              ref={register}
              {...register('lastName')}
            />
            {errors?.lastName && <p>{errors.lastName.message}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Your First name'
              ref={register}
              {...register('email')}
            />
            {errors?.email && <p>{errors.email.message}</p>}
          </div>
          <button type='submit' className='bg-primary text-white'>
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default YupForm;
