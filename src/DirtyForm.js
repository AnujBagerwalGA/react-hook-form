import React, { useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

import './styles/DirtyForm.scss';

let renderCount = 0;

const DirtyForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful }, // trigger when data submit
  } = useForm({
    defaultValues: {
      something: 'anything',
      test: [{ firstName: 'Bill', lastName: 'Luo' }],
    },
  });
  const [submittedData, setSubmittedData] = React.useState({});
  //  we have to attach control to array which we want to manipulate for desire output
  const { fields } = useFieldArray({
    control,
    name: 'test',
  });

  const { isDirty, dirtyFields } = formState;

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData }); // use to reset field to default value
    }
  }, [isSubmitSuccessful, submittedData, reset]);

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      {/*isDirty use to check if we manuplate any data */}
      <p>is dirty? {isDirty ? 'yes' : 'no'}</p>
      {/*dirtyFields use to show which filed we manuplate */}
      <pre>Dirty Fields: {JSON.stringify(dirtyFields, null, 2)}</pre>
      <span className='counter'>Render Count: {renderCount}</span>
      <input {...register('something')} />
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                defaultValue={`${item.firstName}`}
                {...register(`test.${index}.firstName`)}
              />

              <Controller
                render={({ field }) => <input {...field} />}
                name={`test.${index}.lastName`}
                control={control}
                defaultValue={item.lastName}
              />
            </li>
          );
        })}
      </ul>

      <input type='submit' />
    </form>
  );
};

export default DirtyForm;
