import React from 'react';
import ThemeContainer from './styles/ThemeContainer';
import Header from './components/Header';
import BotSection from './sections/BotSection';
import JotformSection from './sections/JotformSection';
import PermissionSection from './sections/PermissionSection';
import Container from './components/Container';
import Paper from '@material-ui/core/Paper';
import style from './App.module.css';

function App() {
  return (
    <div className={`App ${style.App}`}>
      <Container>
        <Paper>
          <Header title="Consent Capture Form" />
          <BotSection />
          <JotformSection />
          <PermissionSection />
        </Paper>
      </Container>
    </div>
  );
}

export default ThemeContainer(App);
