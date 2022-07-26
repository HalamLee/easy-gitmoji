import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import emojiData from './data/conventionData';
import Card from './components/Card';

function App() {
  const commitExample =
    '```git commit -m “[이모지] ([브랜치이름]) 커밋할 내용”```';

  const secondCommitExample =
    '```git commit -m “:sparkles: (halam/feature/login/#23) 로그인 구현”```';

  return (
    <>
      <Title>{'🤙🏻 Commit Convention'}</Title>
      <Example children={commitExample} />
      <Example children={secondCommitExample} />
      {emojiData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </>
  );
}

export default App;

const Title = styled.h1``;
const Example = styled(ReactMarkdown)`
  width: fit-content;
  padding: 0 7px;
  background-color: #eee;
  border-radius: 5px;
  font-size: 20px;
`;
