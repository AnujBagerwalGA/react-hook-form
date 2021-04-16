import React from 'react';
import './styles/App.scss';
import { useForm } from 'react-hook-form';
import YupForm from './YupForm';
import DirtyForm from './DirtyForm';
import ClearError from './ClearError';
import SetValue from './SetValue';

const DefaultHookForm = ({ register, handleSubmit, onSubmit, errors }) => {
  return (
    <div className='App'>
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
                {...register('firstName', {
                  required: 'Please Enter First Name',
                  maxLength: {
                    value: 20,
                    message: 'Please Enter less 20 Digit',
                  },
                  minLength: {
                    value: 4,
                    message: 'Please Enter More than 4 Digit',
                  },
                })}
              />
              {errors?.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Your Email'
                {...register('email', {
                  required: 'Please Enter Email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please Enter Valid Email',
                  },
                })}
              />
              {errors?.email && <p>{errors.email.message}</p>}
            </div>
            <div className='form-group'>
              <label htmlFor='state'>Select Your State</label>
              <select
                className='form-control'
                id='state'
                {...register('state', { required: 'Please Select State' })}
              >
                <option value=''>Select Your State</option>
                <option value='Jharkhand'>Jharkhand</option>
                <option value='Bihar'>Bihar</option>
                <option value='Assam'>Assam</option>
                <option value='Goa'>Goa</option>
                <option value='Manipur'>Manipur</option>
              </select>
              {errors?.state && <p>{errors.state.message}</p>}
            </div>
            <button type='submit' className='bg-primary text-white'>
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const {
    register, // use to detact/register field in form
    handleSubmit, // use to handle onChange event
    watch, // use to see and monitor onChange event
    formState: { errors }, // formState is content multiple objects // one of them is errors
  } = useForm({
    // criteriaMode: 'all', // use to active criteriaMode to all
    mode: 'onTouched', // on Touch show error
    // defaultValues: { // use to set default value in form
    //   firstName: 'Anuj',
    // },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  // console.log(errors);
  // console.log('watch single Field', watch('firstName'));
  // console.log('watch every Field', watch(  ));
  return (
    // <DefaultHookForm
    //   register={register}
    //   handleSubmit={handleSubmit}
    //   onSubmit={onSubmit}
    //   errors={errors}
    // />
    // <YupForm />
    // <DirtyForm />
    // <ClearError />
    <SetValue />
  );
};

export default App;
