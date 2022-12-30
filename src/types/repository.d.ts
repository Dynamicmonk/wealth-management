interface userSigInUpResponse {
  RequestId: string;
  Result: boolean;
  Data: null | string;
  MessageEN: string;
}

interface updateUserResponse extends userSigInUpResponse {}

interface getIndividualProfileResponse {
  MemberResults: {
    contacts: {
      PrimaryMemberId: string;
      Role: string | null;
      ContactId: string;
      FullName: string;
      FirstName: string;
      LastName: string;
      Email: string | null;
      Phone1: string | null;
      Phone2: string | null;
      POBox: string | null;
      CompanyName: string | null;
      UserId: string;
      Password: string;
      IsNewSignup: boolean;
      contactRelationship: string | null;
      RelationshipTypes: number;
    }[];
    MessageEN: string | null;
  };
  Result: boolean;
  MessageEN: string;
}

interface loginSignInInputs {
  Phone1: string;
  Email: string;
  Password: string;
  IsNewSignup?: boolean;
  firstname?: string;
  lastname?: string;
}

interface updateUserProfileInputs {
  contactId: string;
  firstname: string;
  lastname: string;
  phone1: string;
  emailaddress1: string;
  Password: string;
}

interface getIndividualProfileInput {
  contactId: string;
}

interface getMembersUsingIdInput extends getIndividualProfileInput {}

interface getMembersUsingIdResponse extends getIndividualProfileResponse {}

interface deleteUserAccountInput extends getIndividualProfileInput {}

interface deleteUserAccountResponse {
  message: string;
  MessageEN: string | null;
}

interface userSignInRepositoryType {
  signInUp: (input: loginSignInInputs) => Promise<userSigInUpResponse>;
}
