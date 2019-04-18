import marked from '../libs/marked';

const jotformUrl = 'https://www.jotform.com/login';
const content = marked(`
If ever the embed doesn't work, we need you to go to [jotform dashboard](${jotformUrl})
`);

export default {
  jotformUrl,
  content
};
