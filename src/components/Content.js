import React from 'react';
import Typography from '@material-ui/core/Typography';

function Content({ html }) {
  return <Typography dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Content;
