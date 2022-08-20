import React from 'react';
import styled from 'styled-components';

function Card({ data, clickedEmoji }) {
  const onClick = () => {
    clickedEmoji(data.name);
  };

  return (
    <Wrapper onClick={onClick}>
      <Title>
        <Emoji>{data.emoji}</Emoji>
        <Name>{data.name}</Name>
      </Title>
      <Description>{data.description}</Description>
      <div>{data.descriptionKo}</div>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  width: 350px;
  height: 105px;
  background-color: #d0faf4c9;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  & {
    font-weight: 600;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 30px;
  margin-right: 2px;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 14px;
`;
