import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const Alert = ({ children }) => <Container>{children}</Container>;

Alert.propTypes = {
  children: PropTypes.node,
};

export default Alert;
