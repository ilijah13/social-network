import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginFormSchema from '../FormValidation/LoginFormSchema';
import { login } from '../../redux/auth-reduser';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = ({ login, isAuth }) => {
  if (isAuth === true) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values) => {
          login(values.email, values.password, values.rememberMe);
        }}
        validationSchema={loginFormSchema}
      >
        {() => (
          <Form>
            <div>
              <Field type={'text'} name={'email'} placeholder={'e-mail'} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field
                type={'password'}
                name={'password'}
                placeholder={'password'}
              />
            </div>
            <ErrorMessage name="password" component="div" />

            <div>
              <Field type={'checkbox'} name={'rememberMe'} />
              <label htmlFor={'rememberMe'}> remember me </label>
            </div>

            <button type={'submit'}>Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     mode: 'onSubmit',
//     defaultValues: {
//       email: '',
//       password: '',
//       rememberMe: null,
//     },
//   });
//   const onSubmit = (data) => {
//     login(data.email, data.password, null);
//     reset();
//   };

// const Login = ({ login }) => {
//   return (
//     <div>
//       <LoginForm login={login} />
//     </div>
//   );
// };

/* <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              {...register('email', {
                required: 'Поле обязатяльно для заполнения',
                minLength: { value: 8, message: 'Минимум 8 символов' },
              })}
              placeholder="Введите email"
            />
          </label>
          <div style={{ height: 20 }}>
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          </div>
        </div>
        <div>
          <label>
            <input
              {...register('password', {
                required: 'Поле обязатяльно для заполнения',
                minLength: { value: 8, message: 'Минимум 8 символов' },
              })}
              placeholder="Введите пароль"
            />
            <div>
              {errors?.password && (
                <p>{errors?.password?.message || 'Error!'}</p>
              )}
            </div>
          </label>
        </div>
        <div>
          <input type={'checkbox'} />
          Remember me
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form> */
