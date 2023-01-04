export const isEmailValidUseCase = (emailAddress: string) => {
  const emailExpression =
    /^[a-zA-Z0-9]+[a-zA-Z0-9-+_.]+@[a-zA-Z0-9+-]+\.([a-zA-Z0-9.])+/g;

  if (!emailAddress) return false;

  if (emailAddress.length <= 6) return false;

  if (emailAddress.match(emailExpression) === null) return false;

  if (emailAddress.match(emailExpression)?.length !== 1) return false;

  if (emailAddress.split("@").length > 2) return false;

  return true;
};
