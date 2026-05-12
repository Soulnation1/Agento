const User = ({ firstBorn, secondBorn, thirdBorn} ) => {
  return (
    <div>
      <h1 className='font-semibold'>Children</h1>
      <h1 className='font-medium'>i am the firstborn.My name is {firstBorn}</h1>
      <h1 className='font-medium'>i am the secondborn.My name is {secondBorn}</h1>
      <h1 className='font-medium'>i am the thirdborn.My name is {thirdBorn}</h1>  
    </div>
  )
};

export default User;