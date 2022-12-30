import { user } from "../../repository/user/user";

export const signUpUseCase = async (
  input: loginSignInInputs
): Promise<userSigInUpResponse> => {
  const { signInUp } = user();
  return (await signInUp({ ...input, IsNewSignup: true })).data;
};
