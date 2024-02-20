import {
  shrinkLabelStyles,
  FormInputLabel,
  FormInputs,
  Group,
} from "./form-input.styles.jsx";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputs {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      <FormInputs className="form-input" {...otherProps} />
    </Group>
  );
};
