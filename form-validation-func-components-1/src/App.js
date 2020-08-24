import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset();
  };

  return (
    <div className="App">
      <h2>React form validation using React-Form-Hooks</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <label>Name</label>
          <input
            type="text"
            name="name"
            ref={register({
              required: {
                message: 'Name is required',
                value: true
              },
              minLength: {
                value: 5,
                message: 'Name must be of minimum 5 chars',
              }
            })}
          />

          {errors.name && <div className="error-message">{errors.name.message}</div>}
        </div>

        <div className="input-box">
          <label>Email</label>
          <input
            type="text"
            name="email"
            ref={register({
              required: {
                value: true,
                message: 'Email is required'
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid Email'
              }
            })}
          />
          {errors.email && <div className="error-message">{errors.email.message}</div>}
        </div>

        <div className="input-box">
          <label>Age</label>
          <input
            type="number"
            name="age"
            ref={register({
              required: {
                value: true,
                message: 'Age is required'
              },
              min: {
                value: 18,
                message: 'Age should be between 18 and 50'
              },
              max: {
                value: 50,
                message: 'Age should be between 18 and 50'
              }
            })}
          />
          {errors.age && <div className="error-message">{errors.age.message}</div>}
        </div>

        <div className="input-box">
          <label>Gender</label>
          <select
            name="gender"
            ref={register({
              required: {
                value: true,
                message: 'Gender is required'
              }
            })}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <div className="error-message">{errors.gender.message}</div>}
        </div>

        <div className="input-box">
          <label>Password</label>
          <input
            type="password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: 'Password is required'
              },
              minLength: {
                value: 6,
                message: 'Password must have minimum 6 chars'
              },
              validate: value => {
                return [/[A-Z]/, /[a-z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(pattern => pattern.test(value)) ||
                  'Password must contain uppercase, lowercase, number and special chars'
              }
            })}
          />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
