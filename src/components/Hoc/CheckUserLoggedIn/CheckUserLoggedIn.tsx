import { useEffect } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { SIGN_IN_PATH, SIGN_UP_PATH } from "../../../routes/constants";

import { checkUserLoggedInUseCase } from "../../../services/useCases/user/checkUserLoggedInUseCase";

export const CheckUserLoggedInHoc = ({ children }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  const areLoginPages = (): boolean => {
    return (
      location.pathname === SIGN_IN_PATH || location.pathname === SIGN_UP_PATH
    );
  };

  useEffect(() => {
    if (!checkUserLoggedInUseCase()) return;
    if (!areLoginPages()) return;
    navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (checkUserLoggedInUseCase() === null && !areLoginPages())
    return <Navigate to={SIGN_UP_PATH} replace={true} />;

  return <>{children}</>;
};
