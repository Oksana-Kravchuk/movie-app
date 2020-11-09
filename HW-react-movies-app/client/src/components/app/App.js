import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ScrollToTop from '../../containers/scroll';
import '../../common/styles/app.scss';
import { Layout, HomePageHeader, MoviePageHeader } from '../../layout';
import NotFound from '../not-found/NotFound';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Layout>
              <HomePageHeader />
            </Layout>
          </Route>
          <Route path="/movie/:id">
            <Layout>
              <MoviePageHeader />
            </Layout>
          </Route>
          <Route path="/search/:search?">
            <Layout>
              <HomePageHeader />
            </Layout>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
