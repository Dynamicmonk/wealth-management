import { user } from "../../repository/user/user";

export const getIndividualUserProfileUseCase = async (
  input: getIndividualProfileInput
): Promise<getIndividualProfileResponse> => {
  const { getIndividualProfile } = user();
  return (await getIndividualProfile(input)).data;
};
