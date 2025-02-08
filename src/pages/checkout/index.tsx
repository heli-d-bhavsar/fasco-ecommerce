import { useFormik } from 'formik';
import * as Yup from 'yup';
import valid from 'card-validator';

const Checkout = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Name is required'),
    lastName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string()
      .required('Address is required')
      .min(3, 'Must be at least 3 characters'),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string()
      .required('Postal Code is required')
      .min(3, 'Must be at least 3 characters'),
    cardHolderName: Yup.string()
      .required('Card holder name is required')
      .min(3, 'Must be at least 3 characters'),
    cardNumber: Yup.string().test(
      'test-number',
      'Credit Card number is invalid',
      (value) => valid.number(value).isValid
    ),
    expiryDate: Yup.string()
      .required('Expiry date is required')
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/g, 'Invalid expiration date'),
    securityCode: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(4)
      .required(),
  });
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='flex'>
      <div className='w-1/2 '>
        <form onSubmit={formik.handleSubmit}>
          <h2 className='font-logo text-3xl my-5 text-[#484848]'>Contact</h2>

          <label
            className='block text-gray-700 text-sm font-semibold mb-1'
            htmlFor='username'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
            placeholder='Enter Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched && formik.errors.email ? formik.errors.email : null}

          <h2 className='font-logo text-3xl my-5 text-[#484848]'>Delivery</h2>

          <div className='flex gap-3 mb-4'>
            <div className='w-1/2'>
              <label
                className='block text-gray-700 text-sm font-semibold mb-1'
                htmlFor='firstName'
              >
                First Name
              </label>
              <input
                name='firstName'
                type='text'
                placeholder='Enter First Name'
                className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
                onChange={formik.handleChange}
                value={formik.values.firstName}
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
                name='lastName'
                type='text'
                placeholder='Enter Last Name'
                className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </div>
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-1'
              htmlFor='address'
            >
              Address
            </label>
            <input
              name='address'
              type='text'
              placeholder='Enter Address'
              className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>

          <div className='flex gap-3 mb-4'>
            <div className='w-1/2'>
              <label
                className='block text-gray-700 text-sm font-semibold mb-1'
                htmlFor='city'
              >
                City
              </label>
              <input
                name='city'
                type='text'
                placeholder='Enter City'
                className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
                onChange={formik.handleChange}
                value={formik.values.city}
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
                name='postalCode'
                type='text'
                placeholder='Enter Postal Code'
                className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              />
            </div>
          </div>

          <h2 className='font-logo text-3xl my-5 text-[#484848]'>Payment</h2>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-1'
              htmlFor='cardNumber'
            >
              Card Number
            </label>
            <input
              name='cardNumber'
              type='text'
              placeholder='Enter Card Number'
              className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
              onChange={formik.handleChange}
              value={formik.values.cardNumber}
            />
          </div>

          <div className='flex gap-3'>
            <div className='w-1/2'>
              <label
                className='block text-gray-700 text-sm font-semibold mb-1'
                htmlFor='expiryDate'
              >
                Expiration Date
              </label>
              <input
                type='date'
                name='expiryDate'
                placeholder='Expiry Date'
                className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
                onChange={formik.handleChange}
                value={formik.values.expiryDate}
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
                name='securityCode'
                type='text'
                placeholder='Security Code'
                className='text-sm appearance-none border w-full py-4 px-6 text-gray-700 leading-tight '
                onChange={formik.handleChange}
                value={formik.values.securityCode}
              />
            </div>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='w-1/2'></div>
    </div>
  );
};

export default Checkout;
