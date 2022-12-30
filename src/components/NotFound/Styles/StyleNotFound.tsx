import styled from "styled-components";

export const StyleNotFound = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;

  & .not-found-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    & .title {
      font-size: ${({ theme }) => theme.deskTopfontSize.h1};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    & a {
      margin-top: ${({ theme }) => theme.spaces.s};
      color: ${({ theme }) => theme.colors.secondary.blue};
    }
  }
`;
