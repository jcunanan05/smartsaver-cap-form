import React from 'react';
import Section from '../components/Section';
import Typography from '@material-ui/core/Typography';
import Content from '../components/Content';
import jotformSectionContent from './jotformSectionContent';
import style from './JotformSection.module.css';

function JotformSection({
  jotformUrl = jotformSectionContent.jotformUrl,
  content = jotformSectionContent.content
}) {
  return (
    <Section>
      <Typography variant="h2">{'2. Jotform Admin Dashboard'}</Typography>
      <Content html={content} />
      <iframe
        className={style.Frame}
        title="Jotform"
        src={jotformUrl}
        frameBorder="0"
      />
    </Section>
  );
}

export default JotformSection;
