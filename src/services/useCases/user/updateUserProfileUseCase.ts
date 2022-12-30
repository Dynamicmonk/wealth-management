import { user } from "../../repository/user/user";

export const updateUserProfileUseCase = async (
  input: updateUserProfileInputs
): Promise<updateUserResponse> => {
  const { updateUserProfile } = user();
  return (await updateUserProfile(input)).data;
};
