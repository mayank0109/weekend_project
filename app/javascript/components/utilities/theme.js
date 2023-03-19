import * as colors from "./colors";

import { createMuiTheme } from "@material-ui/core/styles";

// App.jsx uses this value to set the 'font-size' of the html element,
// which is the font size that all rem units are based on.
export const baseFontSize = 15;

// Create the default theme to be able to access default built-ins such as `theme.spacing`.
const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
  overrides: {
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
  }
});
export default baseTheme;