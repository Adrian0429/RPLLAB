import react
function NameInput({ register }) {
    return (
      <input
        className='border-2 outline-none p-2 rounded-md'
        placeholder='Name'
        {...register('name')}
      />
    );
  }
  
  function EmailInput({ register }) {
    return (
      <input
        className='border-2 outline-none p-2 rounded-md'
        placeholder='Email'
        {...register('email', { required: 'Email is required.' })}
      />
    );
  }
  
  function PhoneNumberInput({ register }) {
    return (
      <input
        className='border-2 outline-none p-2 rounded-md'
        placeholder='Phone Number'
        {...register('phoneNumber')}
      />
    );
  }
  
  function ExperienceInputs({ register }) {
    return (
      <div className='flex w-full '>
        <input
          className='flex-1 border-2 outline-none p-2 rounded-md mr-2'
          placeholder='Experience (Years)'
          {...register('exp_years')}
        />
        <input
          className='flex-1 border-2 outline-none p-2 rounded-md'
          placeholder='Experience (Months)'
          {...register('exp_months')}
        />
      </div>
    );
  }