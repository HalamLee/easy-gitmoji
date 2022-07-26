import React from 'react';
import styled from 'styled-components';

function Card({ data }) {
  return (
    <>
      <div>{data.emoji}</div>
      <div>{data.name}</div>
      <div>{data.description}</div>
      <div>{data.descriptionKo}</div>
    </>
  );
}

export default Card;
