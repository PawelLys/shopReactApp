import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
import { setRefToScroll } from '../actions';

import { StoreState } from '../reducers';
import { themes } from './themes';
import { GlobalStyle, ComponentsWrapper, PageContent, MainContent } from './App.style';

import history from './routing/history';
import { Routing } from './routing';

const LeftNavComponent = import('./navigation').then((module) => ({ default: module.LeftNav }));
const LeftNav = lazy(() => LeftNavComponent);

const TopNavComponent = import('./navigation').then((module) => ({ default: module.TopNav }));
const TopNav = lazy(() => TopNavComponent);

const FooterComponent = import('./mainContent/footer').then((module) => ({ default: module.Footer }));
const Footer = lazy(() => FooterComponent);

initializeIcons();

export const App: React.FC = () => {
  const theme = useSelector((state: StoreState) => state.theme);
  const node = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    node.current && dispatch(setRefToScroll(node.current));
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <ComponentsWrapper>
        <Router history={history}>
          <Suspense fallback={null}>
            <TopNav />
          </Suspense>
          <PageContent>
            <Suspense fallback={null}>
              <LeftNav />
            </Suspense>
            <MainContent>
              <div ref={node} />
              <Routing />
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </MainContent>
          </PageContent>
        </Router>
      </ComponentsWrapper>
    </ThemeProvider>
  );
};
