import { useState } from "react";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.style.scss";

import { FormInput } from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resertFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const loginWithGoogleUser = async () => {
    await signInWithGooglePopup();    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = signInAuthUserWithEmailAndPassword(email, password);
      resertFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password entered! please enter correct password.");
          break;
        case "auth/user-not-found":
          alert("No user found.");
          break;
      }

      console.log("sign-in error : ", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit()}>
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
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={loginWithGoogleUser}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
