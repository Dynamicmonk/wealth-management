import { user } from "../../repository/user/user";

export const deleteUserAccountUseCase = async (
  input: deleteUserAccountInput
): Promise<deleteUserAccountResponse> => {
  const { deleteUserAccount } = user();
  return (await deleteUserAccount(input)).data;
};
