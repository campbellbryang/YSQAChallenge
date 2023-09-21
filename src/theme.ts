import { ThemeOptions } from '@mui/material';

export const commonColors = {
  black: '#222222',
  darkBlue: '#24466C',
  green: '#008A5E',
  lightBlue: '#0374B3',
  orange: '#F04923',
  purple: '#2E2E81',
  white: '#ffffff',
};

export const themeColors = {
  // insightsPrimaryColors: {
  //   primary: {
  //     dark: '#20205B',
  //     main: '#2E2E81',
  //     containedHoverBackground: '#20205B',
  //     outlinedHoverBackground: '#EFEFF5',
  //     outlinedRestingBorder: '#9696BF',
  //   },
  // },
  // educationConnectionsPrimaryColors: {
  //   primary: {
  //     dark: '#00666B',
  //     main: '#009299',
  //     containedHoverBackground: '#00666B',
  //     outlinedHoverBackground: '#EBF7F7',
  //     outlinedRestingBorder: '#7FC8CB',
  //   },
  // },
  // employerConnectionsPrimaryColors: {
  //   primary: {
  //     dark: '#18735E',
  //     main: '#22A186',
  //     outlinedHoverBackground: '#EEF8F6',
  //     outlinedRestingBorder: '#7FC8CB',
  //     containedHoverBackground: '#18735E',
  //   },
  // },
  // brightpathPrimaryColors: {
  //   primary: {
  //     dark: '#006562',
  //     main: '#0C938F',
  //     light: '#55C4BF',
  //     outlinedHoverBackground: '#EEF8F6',
  //     outlinedRestingBorder: '#55C4BF',
  //     containedHoverBackground: '#006562',
  //   },
  //   secondary: {
  //     dark: '#67075A',
  //     main: '#8E2880',
  //     light: '#FF85CE',
  //     outlinedHoverBackground: '#F7EFF6',
  //     outlinedRestingBorder: '#FF85CE',
  //     containedHoverBackground: '#67075A',
  //   },
  // },
  // discoveryPrimaryColors: {
  //   primary: {
  //     light: '#F7EFF6',
  //     dark: '#69245E',
  //     main: '#953386',
  //     containedHoverBackground: '#69245E',
  //     outlinedHoverBackground: '#F7EFF6',
  //     outlinedRestingBorder: '#C998C2',
  //   },
  // },
  // certificationsPrimaryColors: {
  //   primary: {
  //     dark: '#02517E',
  //     main: '#0374B3',
  //     containedHoverBackground: '#EBF4F9',
  //     outlinedHoverBackground: '#02517E',
  //     outlinedRestingBorder: '#76B3D5',
  //   },
  // },
  primary:{
    dark: '#006562',
      main: '#0C938F',
      light: '#55C4BF',
  },
  secondary: {
    dark: '#67075A',
      main: '#8E2880',
      light: '#FF85CE',
  },
  error: {
    dark: '#C62828',
    main: '#D32F2F',
    light: '#EF5350',
  },
  warning: {
    dark: '#E65100',
    main: '#ED6C02',
    light: '#FF9800',
  },
  info: {
    dark: '#01579B',
    main: '#0288D1',
    light: '#03A9F4',
  },
  success: {
    dark: '#006142',
    main: '#1B5E20',
    light: '#4CAF50',
  },
  common: {
    white: '#ffffff',
    black: '#222222',
  },
  text: {
    disabled: 'rgba(0, 0, 0, 0.38)',
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
  },
  action: {
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledOpacity: 0.26,
    hoverOpacity: 1,
  },
  tooltip: {
    primary: '#252C3A',
  },
  components: {
    backgroundColor: '#FFF',
    contrastText: '#FFF',
    disabled: '#F2F2F2',
    backdropOverlay: '#00000099',
    divider: '#E0E0E0',
    listItemBackgroundColor: '#EEEEEF',
  },
};

// export const CORE_THEME_VARIANT_MAPPING: CoreTypographyVariantMapping = {
//   alertTitle: 'h4',
//   avatarInitials: 'p',
//   badgeLabel: 'h4',
//   body1: 'p',
//   body2: 'p',
//   button: 'button',
//   buttonLarge: 'button',
//   buttonMedium: 'button',
//   buttonSmall: 'button',
//   caption: 'caption',
//   chip: 'p',
//   h1: 'h1',
//   h2: 'h2',
//   h3: 'h3',
//   h4: 'h4',
//   h5: 'h5',
//   h6: 'h6',
//   helperText: 'p',
//   inherit: 'p',
//   inputLabel: 'p',
//   inputText: 'p',
//   overline: 'p',
//   subtitle1: 'h2',
//   subtitle2: 'h4',
//   tooltip: 'p',
// };

export const themeDefaults: ThemeOptions = {
  spacing: [1, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256],
  shape: {
    borderRadius: 2,
  },
  // breakpoints: {
  //   values: coreBreakpointValues,
  // },
  // chartsColorPalette: {
  //   blue: {
  //     main: '#0D6EFD',
  //     lighten20: '#3D8BFD',
  //     lighten40: '#6EA8FE',
  //     lighten60: '#9EC5FE',
  //     lighten80: '#CFE2FF',
  //     darken20: '#0A58CA',
  //   },
  //   indigo: {
  //     main: '#6610F2',
  //     lighten80: '#E0CFFC',
  //     lighten60: '#C29FFA',
  //     lighten40: '#A370F7',
  //     lighten20: '#8540F5',
  //     darken20: '#520DC2',
  //   },
  //   purple: {
  //     main: '#6F42C1',
  //     lighten80: '#E2D9F3',
  //     lighten60: '#C5B3E6',
  //     lighten40: '#A98EDA',
  //     lighten20: '#8C68CD',
  //     darken20: '#59359A',
  //   },
  //   pink: {
  //     main: '#D63384',
  //     lighten20: '#DE5C9D',
  //     lighten40: '#E685B5',
  //     lighten60: '#EFADCE',
  //     lighten80: '#F7D6E6',
  //     darken20: '#AB296A',
  //   },
  //   red: {
  //     main: '#DC3545',
  //     lighten20: '#E35D6A',
  //     lighten40: '#EA868F',
  //     lighten60: '#F1AEB5',
  //     lighten80: '#F8D7DA',
  //     darken20: '#B02A37',
  //   },
  //   orange: {
  //     main: '#FD7E14',
  //     lighten20: '#FD9843',
  //     lighten40: '#FEB272',
  //     lighten60: '#FECBA1',
  //     lighten80: '#FFE5D0',
  //     darken20: '#CA6510',
  //   },
  //   yellow: {
  //     main: '#FFC107',
  //     lighten20: '#FFCD39',
  //     lighten40: '#FFDA6A',
  //     lighten60: '#FFE69C',
  //     lighten80: '#FFF3CD',
  //     darken20: '#CC9A06',
  //   },
  //   green: {
  //     main: '#198754',
  //     lighten20: '#479F76',
  //     lighten40: '#75B798',
  //     lighten60: '#A3CFBB',
  //     lighten80: '#D1E7DD',
  //     darken20: '#146C43',
  //   },
  //   teal: {
  //     main: '#20C997',
  //     lighten20: '#4DD4AC',
  //     lighten40: '#79DFC1',
  //     lighten60: '#A6E9D5',
  //     lighten80: '#D2F4EA',
  //     darken20: '#1AA179',
  //   },
  //   cyan: {
  //     main: '#0DCAF0',
  //     lighten20: '#3DD5F3',
  //     lighten40: '#6EDFF6',
  //     lighten60: '#9EEAF9',
  //     lighten80: '#CFF4FC',
  //     darken20: '#0AA2C0',
  //   },
  // },
  palette: {
    primary: {
      contrastText: '#FFF',
      dark: '#02517E',
      main: '#0374B3',
      light: '#E9F4FA',
    },
    secondary: {
      contrastText: '#FFF',
      main: '#24466C',
    },
    error: {
      contrastText: '#FFF',
      dark: '#B33333',
      main: '#FF4949',
    },
    warning: {
      contrastText: '#FFF',
      dark: '#B36C32',
      main: '#ED6C02',
    },
    info: {
      contrastText: '#FFF',
      dark: '#2063B3',
      main: '#2D8EFF',
    },
    success: {
      contrastText: '#FFF',
      dark: '#006142',
      main: '#13CE66',
    },
    common: {
      white: '#ffffff',
      black: '#222222',
    },
    text: {
      disabled: '#9E9E9E',
      primary: '#212121',
      secondary: '#666666',
    },
    action: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      disabledBackground: 'rgba(0, 0, 0, 0.05)',
      disabledOpacity: 0.38,
      hover: 'rgba(0,0,0,0.08)',
      hoverOpacity: 0.08,
    },
    mode: 'light',
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       body {
  //         background-color: ${themeColors.components.backgroundColor}
  //       }
  //     `,
  //   },
  // },
};

export default themeDefaults;
