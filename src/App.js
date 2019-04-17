import React from 'react';
import ThemeContainer from './styles/ThemeContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Consent Capture Form" />
    </div>
  );
}

export default ThemeContainer(App);
