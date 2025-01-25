import { Formik } from 'formik';

const Checkout = () => {
  const checkOutFormValues = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    country: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cardHolderName: '',
    securityCode: '',
  };
  return (
    <div>
      <Formik
        initialValues={checkOutFormValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <h2 className='font-logo text-5xl my-5'>Contact</h2>

            <label
              className='block text-gray-700 text-sm font-semibold mb-1'
              htmlFor='username'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <h2 className='font-logo text-5xl my-5'>Delivery</h2>

            <div className='flex'>
              <div className='w-1/2'>
                <label
                  className='block text-gray-700 text-sm font-semibold mb-1'
                  htmlFor='firstName'
                >
                  First Name
                </label>
                <input
                  type='firstName'
                  name='text'
                  className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
              </div>

              <div className='w-1/2'>
                <label
                  className='block text-gray-700 text-sm font-semibold mb-1'
                  htmlFor='lastName'
                >
                  Last Name
                </label>
                <input
                  type='lastName'
                  name='text'
                  className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
              </div>
            </div>

            <label
              className='block text-gray-700 text-sm font-semibold mb-1'
              htmlFor='address'
            >
              Address
            </label>
            <input
              type='address'
              name='text'
              className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />

            <div className='flex'>
              <div className='w-1/2'>
                <label
                  className='block text-gray-700 text-sm font-semibold mb-1'
                  htmlFor='city'
                >
                  City
                </label>
                <input
                  type='city'
                  name='text'
                  className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
              </div>
              <div className='w-1/2'>
                <label
                  className='block text-gray-700 text-sm font-semibold mb-1'
                  htmlFor='postalCode'
                >
                  Postal Code
                </label>
                <input
                  type='postalCode'
                  name='text'
                  className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalCode}
                />
              </div>
            </div>

            <h2 className='font-logo text-5xl my-5'>Payment</h2>

            <label
              className='block text-gray-700 text-sm font-semibold mb-1'
              htmlFor='cardNumber'
            >
              Card Number
            </label>
            <input
              type='cardNumber'
              name='text'
              className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardNumber}
            />

            <div className='flex'>
              <div className='w-1/2'>
                <label
                  className='block text-gray-700 text-sm font-semibold mb-1'
                  htmlFor='expiryDate'
                >
                  Expiration Date
                </label>
                <input
                  type='expiryDate'
                  name='text'
                  className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.expiryDate}
                />
              </div>
              <div className='w-1/2'>
                <label
                  className='block text-gray-700 text-sm font-semibold mb-1'
                  htmlFor='securityCode'
                >
                  Security Code
                </label>
                <input
                  type='securityCode'
                  name='text'
                  className='shadow text-base appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.securityCode}
                />
              </div>
            </div>

            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
