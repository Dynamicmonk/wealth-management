import styled from "styled-components";

export const StyleSignUp = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  .left-container {
    flex: 3;
    height: 100%;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      position: relative;
      overflow: hidden;
    }

    .text-over-image {
      position: absolute;
      z-index: 1;
      color: ${({ theme }) => theme.colors.neutral100};
      left: 10%;
      top: 25%;
      font-size: ${({ theme }) => theme.deskTopfontSize.h3};
      max-width: 45%;

      &::before {
        content: "“";
        font-size: ${({ theme }) => theme.deskTopfontSize.h2};
      }

      &::after {
        content: " --- Unknown";
        font-size: ${({ theme }) => theme.deskTopfontSize.h3};
      }
    }
  }

  .right-container {
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spaces.l};
    flex: 1;
    position: relative;

    .right-container-model {
      border-style: solid;
      border-width: thin;
      width: fit-content;
      padding: ${({ theme }) => theme.spaces.xs};
      border-radius: ${({ theme }) => theme.borderRadius.xxs};
      border-color: green;
      position: absolute;
      top: -2%;

      strong {
        color: green;
      }
    }

    .error-model {
      border-color: red;

      strong {
        color: red;
      }
    }

    .right-container-form-sign-up {
      display: flex;
      gap: ${({ theme }) => theme.spaces.xs};
      flex-direction: column;
      margin-top: ${({ theme }) => theme.spaces.m};

      & .right-container-form-sign-up-remember-me {
        display: flex;
        align-items: center;

        & p {
          margin-left: ${({ theme }) => theme.spaces.xxs};
          font-size: ${({ theme }) => theme.deskTopfontSize.secondary};
        }
      }

      & .right-container-form-sign-up-extra-options {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: ${({ theme }) => theme.spaces.m};
        gap: ${({ theme }) => theme.spaces.xs};

        & .signup-via-third-party {
          display: flex;
          flex-direction: column;
          align-items: center;

          & strong {
            font-size: ${({ theme }) => theme.deskTopfontSize.secondary};
            color: grey;
          }

          & .social-media-button {
            margin-top: ${({ theme }) => theme.spaces.xs};
            display: flex;
            gap: ${({ theme }) => theme.spaces.s};

            & .social-media-button-size {
              width: 24px;
              height: 24px;
              cursor: pointer;
            }
          }
        }

        & .right-container-form-sign-up-extra-options-sep {
          color: grey;
          font-size: 16px;
        }

        & .signin-option {
          a {
            color: ${({ theme }) => theme.colors.secondary.blue};
            font-size: 18px;
          }
        }
      }
    }
  }
`;
