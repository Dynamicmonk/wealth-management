import { FC } from "react";

import { InputContainer, ButtonContainer } from "./Styles/FormInputStyle";

import { BsInfoCircle } from "react-icons/bs";

export const FormInput: FC<FormInputProps> = ({
  type,
  value,
  name,
  placeholder,
  isRequired,
  showHelperText,
  helpText,
  isDisabled,
  handleFormInputs,
  handleUIVerify,
}) => {
  switch (type) {
    case "email":
      return (
        <InputContainer>
          <div className="input-container">
            <input
              type="email"
              placeholder={placeholder}
              value={value}
              name={name}
              required={isRequired}
              onBlur={(e) => {
                handleUIVerify && handleUIVerify(e.target.value);
              }}
              onChange={(event) =>
                handleFormInputs && handleFormInputs(event.currentTarget.value)
              }
            />
          </div>

          {showHelperText && (
            <p className="input-helper-text">
              <BsInfoCircle /> {helpText}
            </p>
          )}
        </InputContainer>
      );

    case "phone":
      return (
        <InputContainer>
          <div className="input-container">
            <input
              type="tel"
              placeholder={placeholder}
              pattern="[0-9]{10}"
              maxLength={10}
              minLength={10}
              value={value}
              name={name}
              required={isRequired}
              onBlur={(e) => {
                handleUIVerify && handleUIVerify(e.target.value);
              }}
              onChange={(event) =>
                handleFormInputs && handleFormInputs(event.currentTarget.value)
              }
            />
          </div>

          {showHelperText && (
            <p className="input-helper-text">
              <BsInfoCircle /> {helpText}
            </p>
          )}
        </InputContainer>
      );

    case "password":
      return (
        <InputContainer>
          <div className="input-container">
            <input
              type="password"
              placeholder={placeholder}
              value={value}
              name="password"
              autoComplete="off"
              onBlur={(e) => handleUIVerify && handleUIVerify(e.target.value)}
              required
              minLength={8}
              onChange={(event) =>
                handleFormInputs && handleFormInputs(event.currentTarget.value)
              }
            />
          </div>

          {showHelperText && (
            <p className="input-helper-text">
              <BsInfoCircle /> {helpText}
            </p>
          )}
        </InputContainer>
      );

    case "text":
      return (
        <InputContainer>
          <div className="input-container">
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              name={name}
              required={isRequired}
              onBlur={(e) => {
                handleUIVerify && handleUIVerify(e.target.value);
              }}
              onChange={(event) =>
                handleFormInputs && handleFormInputs(event.currentTarget.value)
              }
            />
          </div>

          {showHelperText && (
            <p className="input-helper-text">
              <BsInfoCircle /> {helpText}
            </p>
          )}
        </InputContainer>
      );

    case "submit":
      return (
        <ButtonContainer>
          <input
            className={`submit-form ${isDisabled ? "disabled-form" : ""}`}
            type="submit"
            value={value}
            disabled={isDisabled}
            onClick={() => handleFormInputs && handleFormInputs("")}
          />
        </ButtonContainer>
      );

    default:
      break;
  }

  return null;
};
