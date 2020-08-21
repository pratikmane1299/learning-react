import React from 'react';

const initialState = {
  firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}
};

class SignUpForm extends React.Component {

  state = initialState;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      // form is valid...

      alert('Form Submitted');

      this.setState(initialState);

    } else {
      this.setState({
        errors
      });
    }
  }

  validate() {
    const { firstName, lastName, email, password, confirmPassword } = this.state;

    let errors = {};

    if (firstName.trim() === '') errors.firstName = 'First Name is required';
    if (lastName.trim() === '') errors.lastName = 'Last Name is required';
    if (!/\S+@\S+\.\S+/i.test(email)) errors.email = 'Invalid Email';
    if (email.trim() === '') errors.email = 'Email is required';
    if (password.length < 8) errors.password = 'Password must be of 8 length';
    if (password.trim() === '') errors.password = 'Password is required';
    if (confirmPassword.trim() !== password.trim()) errors.confirmPassword = 'Passwords dont match';
    if (confirmPassword.trim() === '') errors.confirmPassword = 'Confirm Password is required';

    return errors;
  }

  render() {
    const { errors, firstName, lastName, email, password, confirmPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className={errors.firstName ? 'is-invalid form-control': 'form-control'}
            value={firstName}
            onChange={this.handleChange}
          />
          {
            errors.firstName && (
              <span className="invalid-feedback">{errors.firstName}</span>
            )
          }
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text" 
            name="lastName"
            className={errors.lastName ? 'is-invalid form-control': 'form-control'}
            value={lastName}
            onChange={this.handleChange} 
          />
          {
            errors.lastName && (
              <span className="invalid-feedback">{errors.lastName}</span>
            )
          }
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            className={errors.email ? 'is-invalid form-control': 'form-control'} 
            value={email}
            onChange={this.handleChange} 
          />
          {
            errors.email && (
              <span className="invalid-feedback">{errors.email}</span>
            )
          }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            className={errors.password ? 'is-invalid form-control': 'form-control'} 
            value={password}
            onChange={this.handleChange} 
          />
          {
            errors.password && (
              <span className="invalid-feedback">{errors.password}</span>
            )
          }
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            className={errors.confirmPassword ? 'is-invalid form-control': 'form-control'} 
            value={confirmPassword}
            onChange={this.handleChange} 
          />
          {
            errors.confirmPassword && (
              <span className="invalid-feedback">{errors.confirmPassword}</span>
            )
          }
        </div>
        <button type="submit" className="btn btn-block btn-primary">Submit</button>
      </form>
    );
  }
}

export default SignUpForm;