import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    deskTopfontSize: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
      secondary: string;
      labels: string;
    };
    mobilefontSize: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
      secondary: string;
      labels: string;
    };
    colors: {
      neutral100: string;
      secondary: {
        blue: string;
      };
    };
    spaces: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxl2: string;
      xxl3: string;
      xxl4: string;
      xxl5: string;
      xxl6: string;
    };
    breakpoint: {
      foldMaxWidth: string;
      mobileMinWidth: string;
      mobileMaxWidth: string;
      tabletMinWidth: string;
      tabletMaxWidth: string;
      desktopMinWidth: string;
    };
    borderRadius: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
    };
  }
}

export const theme: DefaultTheme = {
  deskTopfontSize: {
    h1: "54px",
    h2: "32px",
    h3: "28px",
    body: "20px",
    secondary: "18px",
    labels: "20px",
  },
  mobilefontSize: {
    h1: "54px",
    h2: "26px",
    h3: "22px",
    body: "18px",
    secondary: "16px",
    labels: "18px",
  },
  colors: {
    neutral100: "#fff",
    secondary: {
      blue: "dodgerblue",
    },
  },
  spaces: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "40px",
    xxl: "48px",
    xxl2: "56px",
    xxl3: "64px",
    xxl4: "72px",
    xxl5: "80px",
    xxl6: "88px",
  },
  breakpoint: {
    foldMaxWidth: "359px",
    mobileMinWidth: "768px",
    mobileMaxWidth: "991px",
    tabletMinWidth: "992px",
    tabletMaxWidth: "1259px",
    desktopMinWidth: "1260px",
  },
  borderRadius: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
  },
};
