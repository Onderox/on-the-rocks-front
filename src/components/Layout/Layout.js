import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../Header';

const Layout = ({ full, children }) => {
  return (
    <Container>
      <Header />
      <Main full={full}>{children}</Main>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.div`
  width: ${props => (props.full ? '100%' : '114rem')};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
Layout.propTypes = {
  full: PropTypes.bool,
};

export default Layout;
