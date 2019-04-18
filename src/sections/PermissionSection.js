import React from 'react';
import Section from '../components/Section';
import Typography from '@material-ui/core/Typography';
import Content from '../components/Content';
import Paper from '@material-ui/core/Paper';
import permissionContent from './permissionSectionContent';
import style from './PermissionSection.module.css';

function PermissionSection({
  content = permissionContent.content,
  permissionStatement = permissionContent.permissionStatement
}) {
  return (
    <Section>
      <Typography variant="h2">{'3. Reading the Permissions'}</Typography>
      <Content html={content} />
      <Paper
        className={style.Box}
        dangerouslySetInnerHTML={{ __html: permissionStatement }}
      />
    </Section>
  );
}

export default PermissionSection;
