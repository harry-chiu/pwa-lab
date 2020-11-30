import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Body, Image, Title, Description } from './style';

const Card = ({ title, description, imageSrc }) => (
  <Container>
    <Header>
      <Image src={imageSrc} alt="" />
    </Header>
    <Body>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Body>
  </Container>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Card;
