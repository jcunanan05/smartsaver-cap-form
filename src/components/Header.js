import React from 'react';
import Container from './Container';
import Typography from '@material-ui/core/Typography';
import style from './Header.module.css';

function Header({ title, className = '' }) {
  return (
    <header className={`${className} ${style.Header}`}>
      <Container>
        <Typography variant="h1" align="center">
          {title}
        </Typography>
      </Container>
    </header>
  );
}

export default Header;
