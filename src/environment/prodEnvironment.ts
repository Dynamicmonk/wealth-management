export const prodEnvironment = () => {
  const getAppSignInKey = () => {
    return process.env.REACT_APP_SIGN_KEY!;
  };

  return { getAppSignInKey };
};
