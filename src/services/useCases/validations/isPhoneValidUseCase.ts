export const isPhoneValidUseCase = (phoneNumber: string) => {
  if (!phoneNumber) return false;

  if (phoneNumber.length !== 10) return false;

  return true;
};
