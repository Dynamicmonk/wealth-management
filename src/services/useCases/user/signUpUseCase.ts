import { user } from "../../repository/user/user";

export const signUpUseCase = async (
  input: loginSignInInputs
): Promise<userSigInUpResponse> => {
  const { signInUp } = user();
  const data = (await signInUp({ ...input, IsNewSignup: true })).data;

  if (data.RequestId === "00000000-0000-0000-0000-000000000000")
    return Promise.reject(data.MessageEN ?? "Error while creating an account!");

  return Promise.resolve(data);
};
