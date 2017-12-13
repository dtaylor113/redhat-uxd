import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userFetch } from '../actions/UserActions';

export class UserDetails extends Component {

  componentDidMount() {
    const { user, match, dispatch } = this.props;
    if (!user.loaded) {
      dispatch(userFetch(match.id));
    }
  }

  render() {
    const { user } = this.props;

    if (!user.loaded) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        {user}
      </div>
    );
  }
}

UserDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  user: PropTypes.object.isRequired,
};

UserDetails.defaultProps = {
  user: {},
};

const select = state => ({
  user: state.users.user,
});

export default connect(select)(UserDetails);
