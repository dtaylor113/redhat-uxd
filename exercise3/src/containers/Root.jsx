import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import UserDetailsComponent from '../components/UserDetails';


const Root = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/user/:id" component={UserDetailsComponent} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
