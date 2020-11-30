import React, { useState, useEffect } from 'react';
import Card from 'components/Card';
import Alert from 'components/Alert';
import GlobalStyle from 'components/GlobalStyle';
import { Container, Wrapper, Title, Description } from './style';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const setOnline = () => setIsOnline(true);
    const setOffline = () => setIsOnline(false);

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return (
    <Container>
      <GlobalStyle />
      {!isOnline && <Alert>現在是離線模式</Alert>}
      <Wrapper>
        <Title>歡迎來到 React PWA 實驗室！</Title>
        <Description>你可以在這裡測試 PWA 的諸多功能</Description>
      </Wrapper>
      <Wrapper>
        <Card
          title="你好，我是 Jing"
          description="我是 Functional Programming 大師"
          imageSrc="https://avatars0.githubusercontent.com/u/42496917?s=460&u=c951d892d2776768693ccb1e4c9b7cd5f8fd76a6&v=4"
        />
      </Wrapper>
    </Container>
  );
};

export default App;
