import * as colors from "./colors";

import { createMuiTheme } from "@material-ui/core/styles";

// App.jsx uses this value to set the 'font-size' of the html element,
// which is the font size that all rem units are based on.
export const baseFontSize = 15;

// Create the default theme to be able to access default built-ins such as `theme.spacing`.
const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
  overrides: {
    MuiBreadcrumbs: {
      li: {
        fontSize: "15px",
      },
    },
    MuiButton: {
      root: {
        fontSize: "1rem",
        borderRadius: "30px",
        minWidth: "none",
        textTransform: "none",
        whiteSpace: "nowrap",
      },
      sizeLarge: {
        fontSize: "18px",
        fontWeight: "bold",
        padding: "6px 71px",
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: colors.tomato,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: colors.white,
        borderRadius: "3px",
      },
      colorPrimary: {
        backgroundColor: colors.white,
        color: colors.tomato,
      },
      colorSecondary: {
        backgroundColor: colors.pale,
        color: colors.orangeish,
      },
    },
    MuiDivider: {
      root: {
        height: "2px",
        backgroundColor: colors.paleGrey,
        marginTop: "20px",
        marginBottom: "20px",
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: colors.paleGrey,
      },
    },
    MuiFormControl: {
      root: {
        "& + &": {
          marginTop: 13,
        },
      },
    },
    MuiIcon: {},
    MuiListItem: {
      button: {
        paddingLeft: defaultTheme.spacing(4),
        transition: defaultTheme.transitions.create("padding-left", {
          easing: defaultTheme.transitions.easing.sharp,
          duration: defaultTheme.transitions.duration.leavingScreen,
        }),
        [defaultTheme.breakpoints.down("xs")]: {
          paddingLeft: defaultTheme.spacing(2),
        },
        "&:hover, &:focus, &.Mui-selected": {
          backgroundColor: colors.pale,
          color: colors.orangeish,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: "40px",
      },
    },
    MuiPagination: {
      ul: {
        justifyContent: "center",
      },
    },
    MuiRadio: {
      colorSecondary: {
        "&$checked": {
          color: colors.tomato,
        },
      },
    },
    MuiTableCell: {
      body: {
        color: colors.midGrey,
      },
      head: {
        color: colors.midGrey,
        fontWeight: 400,
      },
      root: {
        fontSize: "15px",
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: colors.paleGrey
      }
    }
  },
  palette: {
    dark: {
      main: colors.dark,
      contrastText: colors.white,
    },
    hero: {
      main: colors.orangeish,
    },
    light: {
      main: colors.white,
      contrastText: colors.richBlack,
    },
    link: {
      main: colors.orangeish,
    },
    primary: {
      light: colors.pale,
      main: colors.tomato,
    },
    secondary: {
      main: colors.pale,
      dark: colors.pale300,
      contrastText: colors.orangeish,
    },
    success: {
      main: colors.lichen,
      light: colors.pastelGreen
    },
    text: {
      primary: colors.richBlack,
      secondary: colors.midGrey,
      light: colors.lightPeriwinkle
    },
    divider: colors.lightPeriwinkle,
    tonalOffset: 0.1,
  },
  props: {
    MuiButton: {
      color: "primary",
      variant: "contained",
    },
    MuiTextField: {
      variant: "outlined",
    },
  },
  shadows: [
    "none",
    "0 0 24px 0 rgba(27, 30, 49, 0.08)",
    "inset 0px -23px 12px -24px rgba(0,0,0,0.2), inset 0px 14px 19px -21px rgba(0,0,0,0.2)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  typography: {
    color: colors.midGrey,
    fontFamily: "Roboto, sans-serif",
    h6: {
      // scale up from the base font size (15px) to the desired font size (17px)
      fontSize: `${(17 / baseFontSize).toFixed(4)}rem`,
    },
  },
});
export default baseTheme;