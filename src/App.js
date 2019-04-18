import React from 'react';
import ThemeContainer from './styles/ThemeContainer';
import Header from './components/Header';
import BotSection from './sections/BotSection';
import JotformSection from './sections/JotformSection';
import PermissionSection from './sections/PermissionSection';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Header title="Consent Capture Form" />
        <BotSection />
        <JotformSection />
        <PermissionSection />
      </Container>
    </div>
  );
}

export default ThemeContainer(App);
