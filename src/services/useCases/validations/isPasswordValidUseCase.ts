export const isPasswordValidUseCase = (password: string) => {
  const passwordExpression =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/;

  if (!password) return false;

  if (password.length < 8) return false;

  if (password.match(passwordExpression) === null) return false;

  return true;
};
