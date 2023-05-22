import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import emojiData from '../src/data/conventionData';
import Card from '../src/components/Card';

import Snackbar from '../src/components/Snackbar';
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

  return (
    <Wrapper>
      <Header>
        <Title>{'😉 Easy Gitmoji'}</Title>
        <Info>
          <a href="https://github.com/HalamLee">
            <img src="https://img.shields.io/badge/Github-white?style=flat&logo=Github&logoColor=black" />
          </a>
          <a href="https://hits.seeyoufarm.com">
            <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Feasy-gitmoji.halamlee.com&count_bg=%23486FA6&title_bg=%237E7E7E&title=hits&edge_flat=false" />
          </a>
        </Info>
      </Header>
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
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  padding: 20px 0 0 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: white;
  margin-top: 0;
`;

const Info = styled.div`
  padding-left: 10px;
  > :first-child {
    margin-right: 10px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
