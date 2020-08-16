import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { StartingPage } from '../mainContent/startingPage';
import { GrahpicCardPage } from '../mainContent/grahpicCardPage';
import { CPUPage } from '../mainContent/CPUPage';
import { NewArrivalsPage } from '../mainContent/otherProductPage/NewArrivalsPage';
import { ProductDetails } from '../mainContent/productPage/ProductDetails';
import { Blog, AboutUs, Terms, FAQ, Contact, Login, RemainderPassword, SignIn } from '../mainContent/secondaryPages';
import { CardPage } from '../mainContent/CardPage';
import { ErrorCatch } from '../mainContent/ErrorCatch';

export const Routing = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={StartingPage} />
      <Route path="/graphicCard" exact component={GrahpicCardPage} />
      <Route path="/CPU" exact component={CPUPage} />
      <Route path="/arrivals" exact component={NewArrivalsPage} />
      <Route path="/graphicCard/:id" component={ProductDetails} />
      <Route path="/CPU/:id" component={ProductDetails} />
      <Route path="/arrivals/:id" component={ProductDetails} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={AboutUs} />
      <Route path="/login" component={Login} />
      <Route path="/forgotpass" component={RemainderPassword} />
      <Route path="/register" component={SignIn} />
      <Route path="/terms" component={Terms} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/card" component={CardPage} />
      <Route component={ErrorCatch} />
    </Switch>
  );
};

//<Route path="/1" component={ProductDetails} />
