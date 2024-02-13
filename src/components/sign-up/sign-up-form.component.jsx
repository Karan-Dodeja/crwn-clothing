import { useState, useContext } from "react";
import { Button } from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.style.scss";

import { FormInput } from "../form-input/form-input.component";

import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords does not match!");
      return;
    }

    try {
      const { response } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(response);
      await createUserDocumentFromAuth(response, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>DOn't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit()}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
