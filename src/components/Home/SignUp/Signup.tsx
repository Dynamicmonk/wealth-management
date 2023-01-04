import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";

import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

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
import { FormInput } from "../../Form/FormInput";

const Signup = () => {
  const dispatch = useAppDispatch();

  const { signUp } = useAppSelector((state) => state.user);

  const modelTimerRef = useRef<number | null>(null);

  const [showAccountCreated, setAccountCreated] = useState<boolean>(false);

  const handleUIVerify = (
    inputType: "firstName" | "lastName" | "password" | "phone" | "email",
    data: string
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
        if (!signUp.isSignUpFormValid) {
          handleUIVerify("firstName", signUp.inputs.firstname ?? "");
          handleUIVerify("lastName", signUp.inputs.lastname ?? "");
          handleUIVerify("email", signUp.inputs.Email);
          handleUIVerify("phone", signUp.inputs.Phone1);
          handleUIVerify("password", signUp.inputs.Password);
          return;
        }

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
      dispatch(resetUserFormInputs({ type: "signUp", subType: "inputs" }));

      modelTimerRef.current = window.setTimeout(() => {
        setAccountCreated(false);
        dispatch(resetUserFormInputs({ type: "signUp", subType: "apiCall" }));
      }, 4000);
    }

    return () => {
      modelTimerRef.current && window.clearTimeout(modelTimerRef.current);
      dispatch(resetUserFormInputs({ type: "signUp", subType: "inputs" }));
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
                ? signUp.error
                : "Your account has been created!"}
            </strong>
          </div>
        )}
        <h2>Create an Account</h2>
        <form
          className="right-container-form-sign-up"
          onSubmit={(event) => event.preventDefault()}
        >
          <FormInput
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={signUp.inputs.firstname ?? ""}
            helpText="First name should only have letter's"
            showHelperText={!signUp.inputUIValidation.isFirstNameValid}
            handleFormInputs={(data) =>
              handleFormInputs({ type: "firstName", data: data ?? "" })
            }
            handleUIVerify={(data) => handleUIVerify("firstName", data)}
            isRequired
          />

          <FormInput
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={signUp.inputs.lastname ?? ""}
            helpText="Last name should only have letter's"
            showHelperText={!signUp.inputUIValidation.isLastNameValid}
            handleFormInputs={(data) =>
              handleFormInputs({ type: "lastName", data: data ?? "" })
            }
            handleUIVerify={(data) => handleUIVerify("lastName", data)}
            isRequired
          />

          <FormInput
            type="email"
            placeholder="Enter your email address"
            value={signUp.inputs.Email}
            name="emailAddress"
            handleFormInputs={(data) =>
              handleFormInputs({ type: "email", data: data ?? "" })
            }
            handleUIVerify={(data) => handleUIVerify("email", data)}
            showHelperText={!signUp.inputUIValidation.isEmailValid}
            helpText="Email is incorrect"
            isRequired
          />

          <FormInput
            type="phone"
            placeholder="Enter your phone number"
            value={signUp.inputs.Phone1}
            name="phone"
            handleFormInputs={(data) =>
              handleFormInputs({ type: "phone", data: data ?? "" })
            }
            handleUIVerify={(data) => handleUIVerify("phone", data)}
            showHelperText={!signUp.inputUIValidation.isPhoneValid}
            helpText="Phone should have 10 number's without country code"
            isRequired
          />

          <FormInput
            type="password"
            placeholder="Enter your password"
            value={signUp.inputs.Password}
            name="password"
            handleFormInputs={(data) =>
              handleFormInputs({ type: "password", data: data ?? "" })
            }
            handleUIVerify={(data) => handleUIVerify("password", data)}
            showHelperText={!signUp.inputUIValidation.isPasswordValid}
            helpText="Password should have minimum length 8 including Number, Special Character, and Letter's"
            isRequired
          />

          <span className="right-container-form-sign-up-remember-me">
            <input type="checkbox" name="rememberMe" value="Remember Me" />
            <p>Remember Me</p>
          </span>

          <FormInput
            type="submit"
            value={signUp.loading ? "Submitting..." : "Sign Up Now!"}
            name="submit"
            isDisabled={signUp.loading}
            handleFormInputs={(data) =>
              handleFormInputs({ type: "submitForm", data: data ?? "" })
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
