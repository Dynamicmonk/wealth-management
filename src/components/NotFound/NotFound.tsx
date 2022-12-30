import { FC } from "react";

import { Link } from "react-router-dom";

import { StyleNotFound } from "./Styles/StyleNotFound";

import { SIGN_IN_PATH } from "../../routes/constants";

export const NotFound: FC = () => {
  return (
    <StyleNotFound>
      <div className="not-found-content">
        <h1 className="title">404!</h1>
        <p className="description">Seems like you have been lost!</p>
        <Link to={SIGN_IN_PATH}>Go to Sign In Page</Link>
      </div>
    </StyleNotFound>
  );
};
