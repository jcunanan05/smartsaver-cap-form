import React from 'react';
import Section from '../components/Section';
import Typography from '@material-ui/core/Typography';

function BotSection() {
  return (
    <Section>
      <Typography variant="h2">{'1. Via Bot'}</Typography>
      <Typography
        dangerouslySetInnerHTML={{
          __html: "<p>There's a bot in the lower-right part of the screen.</p>"
        }}
      />
    </Section>
  );
}

export default BotSection;
