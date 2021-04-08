import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#336B87"
const arcOrage = "#763626"
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange:`${arcOrage}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrage}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    }
  }
})
