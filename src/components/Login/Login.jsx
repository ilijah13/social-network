import React from 'react';
import { login } from '../../redux/auth-reduser';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

const Login = ({ login, isAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setError,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  const onSubmit = (data) => {
    login(data.email, data.password, data.rememberMe, setError);
    reset();
  };
  if (isAuth === true) {
    return <Navigate to="/profile" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <input
            {...register('email', {
              required: 'Поле обязатяльно для заполнения',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Pleace enter the valid email',
              },
              minLength: { value: 8, message: 'Минимум 8 символов' },
            })}
            onFocus={() => {
              clearErrors();
            }}
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
            onFocus={() => {
              clearErrors();
            }}
            placeholder="Введите пароль"
            type="password"
          />
          <div>
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
        </label>
      </div>
      <div>
        <input type={'checkbox'} {...register('rememberMe')} />
        Remember me
      </div>
      <div>
        <button type="submit">Login</button>
        {errors.server && (
          <div style={{ color: 'red' }}>{errors.server.message}</div>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
