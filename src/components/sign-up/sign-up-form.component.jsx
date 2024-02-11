import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display NamonChange={handleChange}e</label>
        <input
          name="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
