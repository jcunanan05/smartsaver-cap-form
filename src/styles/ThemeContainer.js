import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
