import react from 'react'
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './UI/Theme'
import Header from '../Components/UI/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      hello
    </ThemeProvider>
  );
}

export default App;
