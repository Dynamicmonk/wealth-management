import { user } from "../../repository/user/user";
import { localStorage } from "../../base/localStorage";
import { prodEnvironment } from "../../../environment/prodEnvironment";
import { checkUserLoggedInUseCase } from "./checkUserLoggedInUseCase";

export const signInUseCase = async (
  input: loginSignInInputs
): Promise<userSigInUpResponse> => {
  const { signInUp } = user();
  const { setData } = localStorage();
  const { getKeyToStoreLoginId } = prodEnvironment();

  //Check If user is already LoggedIn
  const getRequestId = checkUserLoggedInUseCase();

  if (getRequestId)
    return Promise.resolve({
      RequestId: getRequestId,
      MessageEN: "User Sign in successfull!",
      Result: true,
      Data: null,
    } as userSigInUpResponse);
  //End of Check already LoggedIn

  const data = (await signInUp({ ...input, IsNewSignup: false })).data;

  if (!data.RequestId) return Promise.reject("request id is not available");

  if (data.RequestId === "00000000-0000-0000-0000-000000000000")
    return Promise.reject("request id is not available");

  setData(getKeyToStoreLoginId(), data.RequestId);

  return Promise.resolve(data);
};
