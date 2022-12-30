import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";

import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

import { StyleSignUp } from "./Styles/StyleSignUp";

import {
  handleVerifyUIInputs,
  performUserSignUp,
  resetUserFormInputs,
  updateSignUpInputs,
  verifyInputs,
} from "../../../store/slices/User/UserSlice";
import { useAppDispatch, useAppSelector } from "../../../store/useStoreHooks";

import { loginWallpaper } from "../../../assets/images/imagesList";

import { SIGN_IN_PATH } from "../../../routes/constants";

const Signup = () => {
  const dispatch = useAppDispatch();

  const { signUp } = useAppSelector((state) => state.user);

  const modelTimerRef = useRef<number | null>(null);

  const [showAccountCreated, setAccountCreated] = useState<boolean>(false);

  const handleUIVerify = (
    inputType: "firstName" | "lastName" | "password" | "phone" | "email",
    data: boolean
  ) => {
    dispatch(handleVerifyUIInputs({ type: "signUp", inputType, data }));
  };

  const handleFormInputs = ({
    type,
    data,
  }: {
    type:
      | "firstName"
      | "lastName"
      | "email"
      | "phone"
      | "password"
      | "submitForm";
    data: string;
  }) => {
    switch (type) {
      case "firstName":
        dispatch(updateSignUpInputs({ type, input: data }));
        break;
      case "lastName":
        dispatch(updateSignUpInputs({ type, input: data }));
        break;

      case "email":
        dispatch(updateSignUpInputs({ type, input: data }));
        break;

      case "phone":
        dispatch(updateSignUpInputs({ type, input: data }));
        break;

      case "password":
        dispatch(updateSignUpInputs({ type, input: data }));
        break;

      case "submitForm":
        if (!signUp.isSignUpFormValid) return;

        dispatch(
          performUserSignUp({
            firstname: signUp.inputs.firstname,
            lastname: signUp.inputs.lastname,
            Email: signUp.inputs.Email,
            Phone1: signUp.inputs.Phone1,
            Password: signUp.inputs.Password,
          })
        );
        break;

      default:
        break;
    }

    dispatch(verifyInputs({ type: "signUp" }));
  };

  useEffect(() => {
    if (signUp.signUpData || signUp.error) {
      setAccountCreated(true);
      dispatch(resetUserFormInputs({ type: "signUp" }));

      modelTimerRef.current = window.setTimeout(() => {
        setAccountCreated(false);
      }, 2000);
    }

    return () => {
      modelTimerRef.current && window.clearTimeout(modelTimerRef.current);
      dispatch(resetUserFormInputs({ type: "signUp" }));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUp.signUpData, signUp.error]);

  return (
    <StyleSignUp>
      <div className="left-container">
        <img src={loginWallpaper} alt="login" />
        <h1 className="text-over-image">
          A budget is telling your money where to go instead of wondering where
          it went!
        </h1>
      </div>
      <div className="right-container">
        {showAccountCreated && (
          <div
            className={`right-container-model ${
              Boolean(signUp.error) ? "error-model" : ""
            }`}
          >
            <strong>
              {Boolean(signUp.error)
                ? "Account can not be created!"
                : "Your account has been created!"}
            </strong>
          </div>
        )}
        <h2>Create an Account</h2>
        <form
          className="right-container-form-sign-up"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter your first name"
            value={signUp.inputs.firstname}
            onBlur={(e) => handleUIVerify("firstName", e.target.validity.valid)}
            name="firstName"
            required
            onChange={(event) =>
              handleFormInputs({
                type: "firstName",
                data: event.currentTarget.value,
              })
            }
          />
          {!signUp.inputUIValidation.isFirstNameValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> First name should only have letter's
            </p>
          )}

          <input
            type="text"
            placeholder="Enter your last name"
            onBlur={(e) => handleUIVerify("lastName", e.target.validity.valid)}
            value={signUp.inputs.lastname}
            name="lastName"
            required
            onChange={(event) =>
              handleFormInputs({
                type: "lastName",
                data: event.currentTarget.value,
              })
            }
          />
          {!signUp.inputUIValidation.isLastNameValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> Last name should only have letter's
            </p>
          )}

          <input
            type="email"
            placeholder="Enter your email address"
            value={signUp.inputs.Email}
            onBlur={(e) => handleUIVerify("email", e.target.validity.valid)}
            name="emailAddress"
            required
            onChange={(event) =>
              handleFormInputs({
                type: "email",
                data: event.currentTarget.value,
              })
            }
          />
          {!signUp.inputUIValidation.isEmailValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> Email is incorrect
            </p>
          )}

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={signUp.inputs.Phone1}
            name="phone"
            onBlur={(e) => handleUIVerify("phone", e.target.validity.valid)}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            onChange={(event) =>
              handleFormInputs({
                type: "phone",
                data: event.currentTarget.value,
              })
            }
          />
          {!signUp.inputUIValidation.isPhoneValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> Phone should have 10 number's without country
              code
            </p>
          )}

          <input
            type="password"
            placeholder="Enter your password"
            value={signUp.inputs.Password}
            name="password"
            autoComplete="off"
            onBlur={(e) => handleUIVerify("password", e.target.validity.valid)}
            required
            minLength={8}
            onChange={(event) =>
              handleFormInputs({
                type: "password",
                data: event.currentTarget.value,
              })
            }
          />
          {!signUp.inputUIValidation.isPasswordValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> Password should have minimum length 8 including
              Number, Special Character, and Letter's
            </p>
          )}

          <span className="right-container-form-sign-up-remember-me">
            <input type="checkbox" name="rememberMe" value="Remember Me" />
            <p>Remember Me</p>
          </span>
          <input
            className={`right-container-form-sign-up-submit ${
              signUp.loading || !signUp.isSignUpFormValid ? "disabled" : ""
            }`}
            type="submit"
            value={signUp.loading ? "Submitting..." : "Sign Up Now!"}
            disabled={signUp.loading}
            onClick={() =>
              handleFormInputs({
                type: "submitForm",
                data: "",
              })
            }
          />
          <div className="right-container-form-sign-up-extra-options">
            <div className="signup-via-third-party">
              <strong>Sign in using</strong>
              <span className="social-media-button">
                <FaFacebookF className="social-media-button-size" />
                <FaTwitter className="social-media-button-size" />
                <FaGoogle className="social-media-button-size" />
              </span>
            </div>
            <span className="right-container-form-sign-up-extra-options-sep">
              OR
            </span>
            <div className="signin-option">
              <Link to={SIGN_IN_PATH}>Click here to go to login</Link>
            </div>
          </div>
        </form>
      </div>
    </StyleSignUp>
  );
};

export default Signup;
