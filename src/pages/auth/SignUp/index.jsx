import TextFormInput from '@/components/form/TextFormInput';
import PageHeading from '../components/PageHeading';
import ThirdPartyAuth from '../components/ThirdPartyAuth';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter';
import { Col, Form, Row } from 'react-bootstrap';
import PageTitle from '@/components/PageTitle';
const SignUp = () => {
  const [firstPassword, setFirstPassword] = useState('');
  const resetPasswordSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().min(8, 'Password must of minimum 8 characters').required('Please enter Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
  });
  const {
    control,
    handleSubmit,
    getValues,
    watch
  } = useForm({
    resolver: yupResolver(resetPasswordSchema)
  });
  useEffect(() => {
    setFirstPassword(getValues().password);
  }, [watch('password')]);
  return <>
      <PageTitle title='Sign Up' />

      <Col sm={10} lg={5} className="d-flex m-auto vh-100">
        <Row className="w-100 m-auto">
          <Col sm={10} className="my-5 m-auto">
            <PageHeading heading='Create your account' subHeading="Let's get started with your 30 days free trial" />

            <ThirdPartyAuth />

            <Form onSubmit={handleSubmit(() => {})}>

              <TextFormInput control={control} name='email' label='Email address' placeholder='name@example.com' type='email' containerClass='mb-4' floating />

              <PasswordFormInput control={control} name='password' label='Password' containerClass='mb-3 position-relative' className='pe-6' placeholder='Enter your password' floating />

              <PasswordStrengthMeter password={firstPassword} />

              <PasswordFormInput control={control} name='confirmPassword' label='Password' containerClass='mb-4 position-relative' className='mb-3 mt-4' placeholder='Enter your password' floating />

              <div>
                <div className="mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox-1" />
                    <label className="form-check-label" htmlFor="checkbox-1">I agree to all Terms &amp; conditions and the privacy policy.</label>
                  </div>
                </div>

                <div className="align-items-center mt-0">
                  <div className="d-grid">
                    <button className="btn btn-dark mb-0" type="submit">Create an account</button>
                  </div>
                </div>
              </div>

            </Form>

            <div className="mt-4 text-center">
              <span>Already have an account?<Link to="/auth/sign-in"> Sign in here</Link></span>
            </div>
          </Col>
        </Row>
      </Col>
    </>;
};
export default SignUp;