import { user } from "../../repository/user/user";

export const getRelatedMembersUsingIdUseCase = async (
  input: getMembersUsingIdInput
): Promise<getMembersUsingIdResponse> => {
  const { getRelatedMembersUsingId } = user();
  return (await getRelatedMembersUsingId(input)).data;
};
