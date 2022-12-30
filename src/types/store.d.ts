interface userInitialStateType {
  signUp: {
    loading: boolean;
    error: null | string;
    inputs: loginSignInInputs;
    isSignUpFormValid: boolean;
    inputUIValidation: {
      isFirstNameValid: boolean;
      isLastNameValid: boolean;
      isEmailValid: boolean;
      isPhoneValid: boolean;
      isPasswordValid: boolean;
    };
    signUpData: userSigInUpResponse | null;
  };
  signIn: {
    loading: boolean;
    error: null | string;
    inputs: loginSignInInputs;
    isSignInFormValid: boolean;
    inputUIValidation: {
      isEmailValid: boolean;
      isPhoneValid: boolean;
      isPasswordValid: boolean;
    };
    signInData: userSigInUpResponse | null;
  };
  updateUserProfile: {
    loading: boolean;
    error: null | string;
    inputs: updateUserProfileInputs;
    updateUserProfileData: updateUserResponse | null;
  };
  delUserProfile: {
    loading: boolean;
    error: null | string;
    inputs: deleteUserAccountInput;
    delUserProfileData: deleteUserAccountResponse | null;
  };
  relatedMembers: {
    loading: boolean;
    error: null | string;
    inputs: getMembersUsingIdInput;
    relatedMembersData: getMembersUsingIdResponse | null;
  };
  individualProfile: {
    loading: boolean;
    error: null | string;
    inputs: getIndividualProfileInput;
    individualProfileData: getIndividualProfileResponse | null;
  };
}
