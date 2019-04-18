import React from 'react';
import ThemeContainer from './styles/ThemeContainer';
import Header from './components/Header';
import Typography from '@material-ui/core/Typography';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header title="Consent Capture Form" />
      <Section>
        <Typography variant="h2">{'1. Via Bot'}</Typography>
      </Section>
      <Section>
        <Typography variant="h2">{'2. Admin Dashboard'}</Typography>
      </Section>
      <Section>
        <Typography variant="h2">{'3. Reading the Permissions'}</Typography>
      </Section>
    </div>
  );
}

export default ThemeContainer(App);
