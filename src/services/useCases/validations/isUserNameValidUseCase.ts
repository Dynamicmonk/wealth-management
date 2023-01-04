export const isUserNameValidUseCase = (name: string) => {
  if (!name) return false;

  if (name.length < 3) return;

  return true;
};
