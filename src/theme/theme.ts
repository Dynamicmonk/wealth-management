import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      bodyLarge: string;
      bodyMedium: string;
      bodySmall: string;
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
  fontSize: {
    h1: "24px",
    h2: "21px",
    h3: "18px",
    h4: "14px",
    bodyLarge: "18px",
    bodyMedium: "14px",
    bodySmall: "12px",
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
