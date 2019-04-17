import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CSSBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function ThemeContainer(WrappedComponent) {
  class EnhancedComponent extends Component {
    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <CSSBaseline />
          <WrappedComponent />
        </MuiThemeProvider>
      );
    }
  }

  EnhancedComponent.displayName = `ThemeContainer(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return EnhancedComponent;
}

export default ThemeContainer;
