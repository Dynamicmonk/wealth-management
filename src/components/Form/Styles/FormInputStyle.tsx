import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.xs};
  flex-direction: column;

  & .input-container {
    & input {
      width: 100%;
      height: 45px;
      padding: 4px;

      &::placeholder {
        font-size: 18px;
        font-family: "Karla", sans-serif;
      }
    }
  }

  & .input-helper-text {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  & .submit-form {
    background-color: ${({ theme }) => theme.colors.secondary.blue};
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.xxs};
    color: ${({ theme }) => theme.colors.neutral100};
    width: 100%;
    height: 45px;
    cursor: pointer;

    &:hover {
      filter: brightness(1.04);
    }
  }

  .disabled-form {
    background-color: grey;
    opacity: 0.6;

    &:hover {
      filter: brightness(1);
      cursor: not-allowed;
    }
  }
`;
