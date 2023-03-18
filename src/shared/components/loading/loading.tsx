import React from 'react';
import styled from 'styled-components';

const LoadingGif = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 300px;
  }
`;
const Loading = () => {
  return (
    <LoadingGif>
      <img src="/assets/images-login/loading-ball.gif" alt="Loading..." />
    </LoadingGif>
  );
};

export default Loading;
