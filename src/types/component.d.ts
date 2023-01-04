interface FormInputProps {
  type: "email" | "phone" | "password" | "submit" | "text";
  value: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  showHelperText?: boolean;
  helpText?: string;
  isDisabled?: boolean;
  handleFormInputs?: (data: string) => void;
  handleUIVerify?: (data: string) => void;
}
