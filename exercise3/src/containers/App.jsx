import React from 'react';
import { connect } from 'react-redux';
import UserTableComponent from '../components/UserTable';

const App = () => (
  <div className="main-app-container">
    <div className="main-app-nav">Red Hat UXD Assignment</div>
    <UserTableComponent />
  </div>
);

export default connect()(App);
