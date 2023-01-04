import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { signInUseCase } from "../../../services/useCases/user/signInUseCase";
import { signUpUseCase } from "../../../services/useCases/user/signUpUseCase";
import { deleteUserAccountUseCase } from "../../../services/useCases/user/deleteUserAccountUseCase";

import { updateUserProfileUseCase } from "../../../services/useCases/user/updateUserProfileUseCase";

import { getRelatedMembersUsingIdUseCase } from "../../../services/useCases/user/getRelatedMembersUsingIdUseCase";
import { getIndividualUserProfileUseCase } from "../../../services/useCases/user/getIndividualUserProfileUseCase";
import { isEmailValidUseCase } from "../../../services/useCases/validations/isEmailValidUseCase";
import { isPasswordValidUseCase } from "../../../services/useCases/validations/isPasswordValidUseCase";
import { isPhoneValidUseCase } from "../../../services/useCases/validations/isPhoneValidUseCase";
import { isUserNameValidUseCase } from "../../../services/useCases/validations/isUserNameValidUseCase";

export const performUserSignIn = createAsyncThunk<
  userSigInUpResponse,
  loginSignInInputs,
  { rejectValue: string }
>("user/signIn", async (input: loginSignInInputs, { rejectWithValue }) => {
  try {
    const data = await signInUseCase(input);
    return data;
  } catch (error) {
    throw rejectWithValue(error as string);
  }
});

export const performUserSignUp = createAsyncThunk<
  userSigInUpResponse,
  loginSignInInputs,
  { rejectValue: string }
>("user/signUp", async (input: loginSignInInputs, { rejectWithValue }) => {
  try {
    const data = await signUpUseCase(input);
    return data;
  } catch (error) {
    throw rejectWithValue(error as string);
  }
});

export const performUpdateUserProfile = createAsyncThunk<
  updateUserResponse,
  updateUserProfileInputs,
  { rejectValue: string }
>(
  "user/updateProfile",
  async (input: updateUserProfileInputs, { rejectWithValue }) => {
    try {
      const data = await updateUserProfileUseCase(input);
      return data;
    } catch (error) {
      throw rejectWithValue(error as string);
    }
  }
);

export const performDeleteUserProfile = createAsyncThunk<
  deleteUserAccountResponse,
  deleteUserAccountInput,
  { rejectValue: string }
>(
  "user/deleteProfile",
  async (input: deleteUserAccountInput, { rejectWithValue }) => {
    try {
      const data = await deleteUserAccountUseCase(input);
      return data;
    } catch (error) {
      throw rejectWithValue(error as string);
    }
  }
);

export const fetchRelatedMembersUsingId = createAsyncThunk<
  getMembersUsingIdResponse,
  getMembersUsingIdInput,
  { rejectValue: string }
>(
  "user/releatedMembersUsingId",
  async (input: getMembersUsingIdInput, { rejectWithValue }) => {
    try {
      const data = await getRelatedMembersUsingIdUseCase(input);
      return data;
    } catch (error) {
      throw rejectWithValue(error as string);
    }
  }
);

export const fetchIndividualUserProfile = createAsyncThunk<
  getIndividualProfileResponse,
  getIndividualProfileInput,
  { rejectValue: string }
>(
  "user/individualUserProfile",
  async (input: getIndividualProfileInput, { rejectWithValue }) => {
    try {
      const data = await getIndividualUserProfileUseCase(input);
      return data;
    } catch (error) {
      throw rejectWithValue(error as string);
    }
  }
);

const userInitialState: userInitialStateType = {
  signUp: {
    loading: false,
    error: null,
    inputs: {
      firstname: "",
      lastname: "",
      Phone1: "",
      Email: "",
      Password: "",
      IsNewSignup: true,
    },
    isSignUpFormValid: false,
    inputUIValidation: {
      isFirstNameValid: true,
      isLastNameValid: true,
      isEmailValid: true,
      isPasswordValid: true,
      isPhoneValid: true,
    },
    signUpData: null,
  },
  signIn: {
    loading: false,
    error: null,
    inputs: {
      Phone1: "",
      Email: "",
      Password: "",
      IsNewSignup: false,
    },
    isSignInFormValid: false,
    inputUIValidation: {
      isEmailValid: true,
      isPasswordValid: true,
      isPhoneValid: true,
    },
    signInData: null,
  },
  updateUserProfile: {
    loading: false,
    error: null,
    inputs: {
      contactId: "",
      firstname: "",
      lastname: "",
      phone1: "",
      emailaddress1: "",
      Password: "",
    },
    updateUserProfileData: null,
  },
  delUserProfile: {
    loading: false,
    error: null,
    inputs: {
      contactId: "",
    },
    delUserProfileData: null,
  },
  relatedMembers: {
    loading: false,
    error: null,
    inputs: {
      contactId: "",
    },
    relatedMembersData: null,
  },
  individualProfile: {
    loading: false,
    error: null,
    inputs: {
      contactId: "",
    },
    individualProfileData: null,
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    resetUserFormInputs: (
      state,
      action: {
        payload: {
          type: "signUp" | "signIn";
          subType: "inputs" | "apiCall";
        };
      }
    ) => {
      const { type, subType } = action.payload;
      switch (type) {
        case "signUp":
          if (subType === "inputs") {
            state.signUp.inputs.Email = "";
            state.signUp.inputs.firstname = "";
            state.signUp.inputs.lastname = "";
            state.signUp.inputs.Phone1 = "";
            state.signUp.inputs.Password = "";
            state.signUp.inputUIValidation.isEmailValid = true;
            state.signUp.inputUIValidation.isFirstNameValid = true;
            state.signUp.inputUIValidation.isLastNameValid = true;
            state.signUp.inputUIValidation.isPasswordValid = true;
            state.signUp.inputUIValidation.isPhoneValid = true;
          } else if (subType === "apiCall") {
            state.signUp.isSignUpFormValid = false;
            state.signUp.signUpData = null;
            state.signUp.error = null;
          }

          break;

        case "signIn":
          if (subType === "inputs") {
            state.signIn.inputs.Email = "";
            state.signIn.inputs.Phone1 = "";
            state.signIn.inputs.Password = "";
            state.signIn.inputUIValidation.isEmailValid = true;
            state.signIn.inputUIValidation.isPasswordValid = true;
            state.signIn.inputUIValidation.isPhoneValid = true;
          } else if (subType === "apiCall") {
            state.signIn.isSignInFormValid = false;
            state.signIn.signInData = null;
            state.signIn.error = null;
          }

          break;

        default:
          break;
      }

      return state;
    },
    updateSignUpInputs: (
      state,
      action: {
        payload: {
          input: string;
          type: "phone" | "email" | "firstName" | "lastName" | "password";
        };
      }
    ) => {
      const { input, type } = action.payload;

      const regexForName = /[^a-zA-Z]/gm;
      const regexForPhone = /[^0-9]/gm;

      switch (type) {
        case "phone":
          state.signUp.inputUIValidation.isPhoneValid = true;
          state.signUp.inputs.Phone1 = input.replaceAll(regexForPhone, "");
          break;
        case "email":
          state.signUp.inputUIValidation.isEmailValid = true;
          state.signUp.inputs.Email = input;
          break;
        case "firstName":
          state.signUp.inputUIValidation.isFirstNameValid = true;
          state.signUp.inputs.firstname = input.replaceAll(regexForName, "");
          break;
        case "lastName":
          state.signUp.inputUIValidation.isLastNameValid = true;
          state.signUp.inputs.lastname = input.replaceAll(regexForName, "");
          break;
        case "password":
          state.signUp.inputUIValidation.isPasswordValid = true;
          state.signUp.inputs.Password = input;
          break;
        default:
          break;
      }

      return state;
    },
    updateSignInInputs: (
      state,
      action: {
        payload: {
          input: string;
          type: "phone" | "email" | "password";
        };
      }
    ) => {
      const { input, type } = action.payload;

      const regexForPhone = /[^0-9]/gm;

      switch (type) {
        case "phone":
          state.signIn.inputUIValidation.isPhoneValid = true;
          state.signIn.inputs.Phone1 = input.replaceAll(regexForPhone, "");
          break;
        case "email":
          state.signIn.inputUIValidation.isEmailValid = true;
          state.signIn.inputs.Email = input;
          break;
        case "password":
          state.signIn.inputUIValidation.isPasswordValid = true;
          state.signIn.inputs.Password = input;
          break;
        default:
          break;
      }

      return state;
    },
    updateUserProfileInputs: (
      state,
      action: {
        payload: {
          input: string;
          type:
            | "phone"
            | "email"
            | "firstName"
            | "lastName"
            | "password"
            | "contactId";
        };
      }
    ) => {
      const { input, type } = action.payload;

      switch (type) {
        case "phone":
          state.updateUserProfile.inputs.phone1 = input;
          break;
        case "email":
          state.updateUserProfile.inputs.emailaddress1 = input;
          break;
        case "firstName":
          state.updateUserProfile.inputs.firstname = input;
          break;
        case "lastName":
          state.updateUserProfile.inputs.lastname = input;
          break;
        case "password":
          state.updateUserProfile.inputs.Password = input;
          break;
        case "contactId":
          state.updateUserProfile.inputs.contactId = input;
          break;
        default:
          break;
      }

      return state;
    },
    updateDeleteUserAccountInputs: (state, action) => {
      state.delUserProfile.inputs.contactId = action.payload;
    },
    updateRelatedMembersInputs: (state, action) => {
      state.relatedMembers.inputs.contactId = action.payload;
    },
    updateIndividualProfileInputs: (state, action) => {
      state.individualProfile.inputs.contactId = action.payload;
    },
    verifyInputs: (
      state,
      action: { payload: { type: "signIn" | "signUp" } }
    ) => {
      const { type } = action.payload;

      switch (type) {
        case "signIn":
          state.signIn.isSignInFormValid = false;

          const signInInputs = state.signIn.inputs;

          if (!isEmailValidUseCase(signInInputs.Email)) return;

          if (!isPasswordValidUseCase(signInInputs.Password)) return;

          if (!isPhoneValidUseCase(signInInputs.Phone1)) return;

          state.signIn.isSignInFormValid = true;
          break;

        case "signUp":
          state.signUp.isSignUpFormValid = false;

          const signUpInputs = state.signUp.inputs;

          if (!isUserNameValidUseCase(signUpInputs.firstname ?? "")) return;

          if (!isUserNameValidUseCase(signUpInputs.lastname ?? "")) return;

          if (!isEmailValidUseCase(signUpInputs.Email)) return;

          if (!isPasswordValidUseCase(signUpInputs.Password)) return;

          if (!isPhoneValidUseCase(signUpInputs.Phone1)) return;

          state.signUp.isSignUpFormValid = true;
          break;

        default:
          break;
      }
    },
    handleVerifyUIInputs: (
      state,
      action: {
        payload: {
          type: "signUp" | "signIn";
          inputType: "firstName" | "lastName" | "password" | "phone" | "email";
          data: string;
        };
      }
    ) => {
      const { type, data, inputType } = action.payload;

      switch (inputType) {
        case "email":
          if (type === "signIn") {
            state.signIn.inputUIValidation.isEmailValid =
              isEmailValidUseCase(data);
            break;
          }
          state.signUp.inputUIValidation.isEmailValid =
            isEmailValidUseCase(data);
          break;

        case "firstName":
          if (type === "signUp") {
            state.signUp.inputUIValidation.isFirstNameValid =
              isUserNameValidUseCase(data ?? "") as boolean;
          }
          break;

        case "lastName":
          if (type === "signUp") {
            state.signUp.inputUIValidation.isLastNameValid =
              isUserNameValidUseCase(data ?? "") as boolean;
          }
          break;

        case "password":
          if (type === "signIn") {
            state.signIn.inputUIValidation.isPasswordValid =
              isPasswordValidUseCase(data);
            break;
          }
          state.signUp.inputUIValidation.isPasswordValid =
            isPasswordValidUseCase(data);
          break;

        case "phone":
          if (type === "signIn") {
            state.signIn.inputUIValidation.isPhoneValid =
              isPhoneValidUseCase(data);
            break;
          }
          state.signUp.inputUIValidation.isPhoneValid =
            isPhoneValidUseCase(data);
          break;

        default:
          break;
      }
    },
  },
  extraReducers(builder) {
    //Sign In Extra Reducer's
    builder.addCase(performUserSignIn.pending, (state) => {
      state.signIn.error = null;
      state.signIn.loading = true;
      state.signIn.signInData = null;
    });

    builder.addCase(performUserSignIn.fulfilled, (state, action) => {
      state.signIn.error = null;
      state.signIn.loading = false;
      state.signIn.signInData = action.payload;
    });

    builder.addCase(performUserSignIn.rejected, (state, action) => {
      state.signIn.error = action.payload ?? "";
      state.signIn.loading = false;
      state.signIn.signInData = null;
    });

    //Sign Up Extra Reducer's
    builder.addCase(performUserSignUp.pending, (state) => {
      state.signUp.error = null;
      state.signUp.loading = true;
      state.signUp.signUpData = null;
    });

    builder.addCase(performUserSignUp.fulfilled, (state, action) => {
      state.signUp.error = null;
      state.signUp.loading = false;
      state.signUp.signUpData = action.payload;
    });

    builder.addCase(performUserSignUp.rejected, (state, action) => {
      state.signUp.error = action.payload ?? "";
      state.signUp.loading = false;
      state.signUp.signUpData = null;
    });

    //delete User Extra Reducer's
    builder.addCase(performDeleteUserProfile.pending, (state) => {
      state.delUserProfile.error = null;
      state.delUserProfile.loading = true;
      state.delUserProfile.delUserProfileData = null;
    });

    builder.addCase(performDeleteUserProfile.fulfilled, (state, action) => {
      state.delUserProfile.error = null;
      state.delUserProfile.loading = false;
      state.delUserProfile.delUserProfileData = action.payload;
    });

    builder.addCase(performDeleteUserProfile.rejected, (state, action) => {
      state.delUserProfile.error = action.payload ?? "";
      state.delUserProfile.loading = false;
      state.delUserProfile.delUserProfileData = null;
    });

    //update User Profile Extra Reducer's
    builder.addCase(performUpdateUserProfile.pending, (state) => {
      state.updateUserProfile.error = null;
      state.updateUserProfile.loading = true;
      state.updateUserProfile.updateUserProfileData = null;
    });

    builder.addCase(performUpdateUserProfile.fulfilled, (state, action) => {
      state.updateUserProfile.error = null;
      state.updateUserProfile.loading = false;
      state.updateUserProfile.updateUserProfileData = action.payload;
    });

    builder.addCase(performUpdateUserProfile.rejected, (state, action) => {
      state.updateUserProfile.error = action.payload ?? "";
      state.updateUserProfile.loading = false;
      state.updateUserProfile.updateUserProfileData = null;
    });

    //Get Related Members using Id Extra Reducer's
    builder.addCase(fetchRelatedMembersUsingId.pending, (state) => {
      state.relatedMembers.error = null;
      state.relatedMembers.loading = true;
      state.relatedMembers.relatedMembersData = null;
    });

    builder.addCase(fetchRelatedMembersUsingId.fulfilled, (state, action) => {
      state.relatedMembers.error = null;
      state.relatedMembers.loading = false;
      state.relatedMembers.relatedMembersData = action.payload;
    });

    builder.addCase(fetchRelatedMembersUsingId.rejected, (state, action) => {
      state.relatedMembers.error = action.payload ?? "";
      state.relatedMembers.loading = false;
      state.relatedMembers.relatedMembersData = null;
    });

    //Get Individual Profile using Id Extra Reducer's
    builder.addCase(fetchIndividualUserProfile.pending, (state) => {
      state.individualProfile.error = null;
      state.individualProfile.loading = true;
      state.individualProfile.individualProfileData = null;
    });

    builder.addCase(fetchIndividualUserProfile.fulfilled, (state, action) => {
      state.individualProfile.error = null;
      state.individualProfile.loading = false;
      state.individualProfile.individualProfileData = action.payload;
    });

    builder.addCase(fetchIndividualUserProfile.rejected, (state, action) => {
      state.individualProfile.error = action.payload ?? "";
      state.individualProfile.loading = false;
      state.individualProfile.individualProfileData = null;
    });
  },
});

export const {
  updateDeleteUserAccountInputs,
  updateIndividualProfileInputs,
  updateRelatedMembersInputs,
  updateSignInInputs,
  updateSignUpInputs,
  updateUserProfileInputs,
  resetUserFormInputs,
  verifyInputs,
  handleVerifyUIInputs,
} = UserSlice.actions;

export default UserSlice.reducer;
