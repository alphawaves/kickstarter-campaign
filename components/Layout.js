// components/Layout.js
import React, { Component } from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <Container>
        <Header />
        {children}
      </Container>
    );
  }
}

export default Layout;