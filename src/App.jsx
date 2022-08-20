import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import emojiData from './data/conventionData';
import Card from './components/Card';

import Snackbar from './components/Snackbar';
import { useState } from 'react';

function App() {
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);
  const [copyResult, setCopyResult] = useState('');
  const [emoji, setEmoji] = useState('');

  const clickedEmoji = (emoji) => {
    getSnackbarState(true);
    setEmoji(emoji);
    navigator.clipboard
      .writeText(emoji)
      .then(() => {
        setCopyResult('success');
      })
      .catch(() => {
        setCopyResult('error');
      });
  };

  const getSnackbarState = (open) => {
    setSnackbarIsOpen(open);
  };

  const commitExample =
    '```git commit -m “[이모지] ([영문이름]/[브랜치이름]) 커밋할 내용”```';

  const secondCommitExample =
    '```git commit -m “:sparkles: (halam/feature/login/#23) 로그인 구현”```';

  return (
    <Wrapper>
      <Section>
        <Title>{'🤙🏻 Commit Convention'}</Title>
        <Example children={commitExample} />
        <Example children={secondCommitExample} />
      </Section>
      <CardWrapper>
        {emojiData.map((data) => (
          <Card key={data.id} data={data} clickedEmoji={clickedEmoji} />
        ))}
      </CardWrapper>
      <Snackbar
        result={copyResult}
        open={snackbarIsOpen}
        getSnackbarState={getSnackbarState}
        data={emoji}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

const Section = styled.div`
  padding: 20px 0 0 20px;
`;

const Title = styled.h1`
  color: white;
  margin-top: 0;
`;
const Example = styled(ReactMarkdown)`
  width: fit-content;
  padding: 0 7px;
  color: white;
  border-radius: 5px;
  font-size: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
