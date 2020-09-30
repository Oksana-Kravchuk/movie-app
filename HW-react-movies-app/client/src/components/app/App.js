import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from '../../containers/scroll';
import Footer from '../../layout/footer';
import Content from '../../layout/content';
import '../../common/styles/app.scss';
import { HomePage, MoviePage } from '../../pages';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Route path="/" component={HomePage} exact />
        <Route path="/movie/:id" component={MoviePage} />
        <Content />
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
