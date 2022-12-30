export const prodEnvironment = () => {
  const getAppSignInKey = () => {
    return process.env.REACT_APP_SIGN_KEY!;
  };

  const getAppServerUrl = () => {
    return process.env.REACT_APP_BASE_URL!;
  };

  const getKeyToStoreLoginId = () => {
    return process.env.REACT_APP_SIGNIN_KEY!;
  };

  return { getAppSignInKey, getAppServerUrl, getKeyToStoreLoginId };
};
