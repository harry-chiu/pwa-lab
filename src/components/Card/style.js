import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #d0d0d0;
  border-radius: 8px;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  padding-top: calc(3 / 4 * 100%);
  background: #c0c0c0;
  border-radius: 8px 8px 0 0;
`;

export const Body = styled.div`
  padding: 16px;
  border-radius: 0 0 8px 8px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 16px;
`;

export const Description = styled.p`
  margin: 8px 0 0;
  font-size: 13px;
`;
