import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Panel from './pages/Panel';
import CategoryRegister from './pages/CategoryRegister';
import CategoryList from './pages/CategoryList';
import AdvertsRegister from './pages/AdvertsRegister';
import AdvertsList from './pages/AdvertsList';
import AdvertsDetail from './pages/AdvertsDetail';
import Ads from './pages/Ads';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/panel" component={Panel} />
        <Route path="/category" component={CategoryRegister} />
        <Route path="/categories" component={CategoryList} />
        <Route path="/ad-create" component={AdvertsRegister} />
        <Route path="/adverts" component={AdvertsList} />
        <Route path="/ad" component={AdvertsDetail} />
        <Route path="/ads/:category" component={Ads} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
