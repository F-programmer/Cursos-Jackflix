import React from 'react';
import styled from 'styled-components';

import Menu from './../Menu';
import Footer from './../Footer';

const Main = styled.main`
  background: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children, to, title }) {
  return (
    <>
      <Menu to={to} title={title} />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;