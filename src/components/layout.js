import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

export default function Layout({ title, children }) {
  return (
    <Div title={title}>
      <Container>{children}</Container>
    </Div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

Layout.defaultProps = {};

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
