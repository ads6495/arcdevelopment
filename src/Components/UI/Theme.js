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
    h3: {
      fontWeight: 300,
    }
  }
})
