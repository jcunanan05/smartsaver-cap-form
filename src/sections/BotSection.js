import React from 'react';
import Section from '../components/Section';
import Typography from '@material-ui/core/Typography';
import Content from '../components/Content';
import defaultContent from './botSectionContent';

function BotSection({ content = defaultContent }) {
  return (
    <Section>
      <Typography variant="h2">{'1. Via Bot'}</Typography>
      <Content html={content} />
    </Section>
  );
}

export default BotSection;
