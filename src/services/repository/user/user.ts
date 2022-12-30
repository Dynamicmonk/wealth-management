import { httpClient } from "../../base/httpClient";
import { prodEnvironment } from "../../../environment/prodEnvironment";
import { AxiosResponse } from "axios";

export const user = () => {
  const { post, get, del } = httpClient();
  const { getAppServerUrl } = prodEnvironment();

  const path = "UserSignUp";

  const getStringifyData = (input: any): string => {
    return JSON.stringify(input);
  };

  //For Sign in & Sign up
  const signInUp = async (
    input: loginSignInInputs
  ): Promise<AxiosResponse<userSigInUpResponse>> => {
    const stringifyInputs = getStringifyData(input);
    return await post({
      url: `${getAppServerUrl()}${path}/ValidateLogin`,
      data: stringifyInputs,
    });
  };

  //For updating profile
  const updateUserProfile = async (
    input: updateUserProfileInputs
  ): Promise<AxiosResponse<updateUserResponse>> => {
    const stringifyInputs = getStringifyData(input);
    return await post({
      url: `${getAppServerUrl()}${path}/UpdateUser`,
      data: stringifyInputs,
    });
  };

  //For getting individual user related members data using contact id
  const getIndividualProfile = async (
    input: getIndividualProfileInput
  ): Promise<AxiosResponse<getIndividualProfileResponse>> => {
    return await post({
      url: `${getAppServerUrl()}${path}/GetMembersOnly?contactid=${input}`,
    });
  };

  //For getting members using id
  const getRelatedMembersUsingId = async (
    input: getMembersUsingIdInput
  ): Promise<AxiosResponse<getMembersUsingIdResponse>> => {
    return await get(
      `${getAppServerUrl()}${path}/GetMembersUsingId?contactid=${input}`
    );
  };

  //For deleting user account
  const deleteUserAccount = async (
    input: deleteUserAccountInput
  ): Promise<AxiosResponse<deleteUserAccountResponse>> => {
    return await del(
      `${getAppServerUrl()}${path}/DeleteUser?contactid=${input}`
    );
  };

  return {
    signInUp,
    updateUserProfile,
    getIndividualProfile,
    getRelatedMembersUsingId,
    deleteUserAccount,
  };
};
