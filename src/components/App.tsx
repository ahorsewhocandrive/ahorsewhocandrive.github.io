import * as React from 'react';
import { FC, Suspense, useEffect, useRef } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useData } from '../hooks';
import { Footer, Header } from '../features';
import { Home } from '../pages';
// import { Spinner } from './Icons';
import Spacer from './Spacer';
import { Amplitude } from '../amplitude/amplitude';
import './App.scss';

const App: FC<Record<string, unknown>> = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    Amplitude.logEvent('init', { pathname });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { data } = useData(
    'https://api.soundcloud.com/playlists/310569779.json?client_id=9f32c400308da184e94e83dbbf3391c7',
  );

  const isFirstUpdate = useRef(true);
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }
    Amplitude.logEvent('navigate', { pathname });
  }, [pathname]);

  return (
    <div className="App">
      <div className="App--Background" />
      <Header />
      <Spacer spacing={81} />
      <div className="AppBody">
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
