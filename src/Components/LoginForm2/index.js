import React, { useState } from 'react';
import './LoginForm2.css';
import { IoIosLock, IoIosPerson, IoIosEye, IoIosEyeOff } from 'react-icons/io';

function Login2() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-login">
      <div className="row">
        <div className="col-12">
          <div className="login well well-small">
            <div className="center">
              <img src="http://placehold.it/250x100&text=Logo" alt="logo" />
            </div>
            <form
              action="/users/login"
              className="login-form"
              id="UserLoginForm"
              method="post"
            >
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <IoIosPerson />
                  </span>
                  <input
                    name="data[User][username]"
                    required
                    placeholder="Username"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <IoIosLock />
                  </span>
                  <input
                    name="data[User][password]"
                    required
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                  />
                  <span className="input-group-addon">
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                    </button>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="UserRememberMe">
                  <input type="checkbox" name="data[User][remember_me]" />{' '}
                  Lembrar-me?
                </label>
              </div>
              <div className="form-group">
                <input
                  className="btn btn-primary btn-block"
                  type="submit"
                  value="Entrar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
