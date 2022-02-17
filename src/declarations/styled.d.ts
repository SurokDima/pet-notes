import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    white: string;

    danger: string;
    success: string;

    stub: string;

    modalIcons: string;
    modalText: string;
    placeholder: string;

    notesColors: {
      red: string;
      green: string;
      yellow: string;
      turquoise: string;
      purple: string;
    };
  }
}