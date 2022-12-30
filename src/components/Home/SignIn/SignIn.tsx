import { useEffect, useState, useRef, FC } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

import { StyleSignIn } from "./Styles/StyleSignIn";
import { useAppDispatch, useAppSelector } from "../../../store/useStoreHooks";

import { loginWallpaper } from "../../../assets/images/imagesList";

import { SIGN_IN_PATH, SIGN_UP_PATH } from "../../../routes/constants";
import {
  handleVerifyUIInputs,
  performUserSignIn,
  resetUserFormInputs,
  updateSignInInputs,
  verifyInputs,
} from "../../../store/slices/User/UserSlice";

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { signIn } = useAppSelector((state) => state.user);

  const modelTimerRef = useRef<number | null>(null);

  const [showAccountCreated, setAccountCreated] = useState<boolean>(false);

  const handleUIVerify = (
    inputType: "firstName" | "lastName" | "password" | "phone" | "email",
    data: boolean
  ) => {
    dispatch(handleVerifyUIInputs({ type: "signIn", inputType, data }));
  };

  const handleFormInputs = ({
    type,
    data,
  }: {
    type: "email" | "phone" | "password" | "submitForm";
    data: string;
  }) => {
    switch (type) {
      case "email":
        dispatch(updateSignInInputs({ type, input: data }));
        break;

      case "phone":
        dispatch(updateSignInInputs({ type, input: data }));
        break;

      case "password":
        dispatch(updateSignInInputs({ type, input: data }));
        break;

      case "submitForm":
        if (!signIn.isSignInFormValid) return;

        dispatch(
          performUserSignIn({
            Email: signIn.inputs.Email,
            Phone1: signIn.inputs.Phone1,
            Password: signIn.inputs.Password,
          })
        );
        break;

      default:
        break;
    }

    dispatch(verifyInputs({ type: "signIn" }));
  };

  useEffect(() => {
    if (signIn.signInData || signIn.error) {
      setAccountCreated(true);
      dispatch(resetUserFormInputs({ type: "signIn" }));

      modelTimerRef.current = window.setTimeout(() => {
        setAccountCreated(false);
        navigate(signIn.error ? SIGN_IN_PATH : "/");
      }, 2000);
    }

    return () => {
      modelTimerRef.current && window.clearTimeout(modelTimerRef.current);
      dispatch(resetUserFormInputs({ type: "signIn" }));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signIn.signInData, signIn.error]);

  return (
    <StyleSignIn>
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
              Boolean(signIn.error) ? "error-model" : ""
            }`}
          >
            <strong>
              {Boolean(signIn.error)
                ? "Incorrect Credentials! Please try again!"
                : "Successfully Sign In"}
            </strong>
          </div>
        )}
        <h2>Sign In an Account</h2>
        <form
          className="right-container-form-sign-up"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={signIn.inputs.Email}
            name="emailAddress"
            required
            onBlur={(e) => handleUIVerify("email", e.target.validity.valid)}
            onChange={(event) =>
              handleFormInputs({
                type: "email",
                data: event.currentTarget.value,
              })
            }
          />
          {!signIn.inputUIValidation.isEmailValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> Email is incorrect
            </p>
          )}

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={signIn.inputs.Phone1}
            name="phone"
            pattern="[0-9]{10}"
            required
            onBlur={(e) => handleUIVerify("phone", e.target.validity.valid)}
            maxLength={10}
            onChange={(event) =>
              handleFormInputs({
                type: "phone",
                data: event.currentTarget.value,
              })
            }
          />
          {!signIn.inputUIValidation.isPhoneValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> Phone should have 10 number's without country
              code
            </p>
          )}

          <input
            type="password"
            placeholder="Enter your password"
            value={signIn.inputs.Password}
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
          {!signIn.inputUIValidation.isPasswordValid && (
            <p className="input-helper-text">
              <BsInfoCircle /> Password should have minimum length 8 including
              Number, Special Character, and Letter's
            </p>
          )}

          <span className="right-container-form-sign-up-remember-me">
            <input type="checkbox" name="rememberMe" value="Remember Me" />
            <p>Remember me</p>
          </span>
          <input
            className={`right-container-form-sign-up-submit ${
              signIn.loading || !signIn.isSignInFormValid ? "disabled" : ""
            }`}
            type="submit"
            value={signIn.loading ? "Submitting..." : "Sign In Now!"}
            disabled={signIn.loading}
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
                <FaFacebookF className="set-size" />
                <FaTwitter className="set-size" />
                <FaGoogle className="set-size" />
              </span>
            </div>
            <span className="right-container-form-sign-up-extra-options-sep">
              OR
            </span>
            <div className="signin-option">
              <Link to={SIGN_UP_PATH}>Click here to go to Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </StyleSignIn>
  );
};
