import React, { useState } from "react";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    password: "",
  });
  const { name, email, age, password } = formData;
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="email" name="email" value={email} onChange={onChange} />
        <input type="number" name="age" value={age} onChange={onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
