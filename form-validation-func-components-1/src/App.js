import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h2>React form validation using React-Form-Hooks</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            ref={register} 
          />
        </div>

        <div>
          <label>Email</label>
          <input 
            type="text" 
            name="email" 
            ref={register} 
          />
        </div>

        <div>
          <label>Age</label>
          <input 
            type="text" 
            name="age" 
            ref={register} 
          />
        </div>

        <div>
          <label>Gender</label>
          <select 
            name="gender" 
            ref={register}
          >
            <option>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            ref={register} 
          />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
