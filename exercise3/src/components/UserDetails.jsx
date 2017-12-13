import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userFetch } from '../actions/UserActions';

export class UserDetails extends Component {

  componentDidMount() {
    const { user, match, dispatch } = this.props;
    if (!user.loaded) {
      dispatch(userFetch(match.params.id));
    }
  }

  render() {
    const { user } = this.props;
    if (!user.loaded) {
      return <h1>Loading...</h1>;
    }
    const userData = user.userData;
    return (
      <div>
        <h2>User Details for ID {userData.id}</h2>
        <table>
          <tbody>
            <tr>
              <td>Name : </td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Username : </td>
              <td>{userData.username}</td>
            </tr>
            <tr>
              <td>Email : </td>
              <td>{userData.email}</td>
            </tr>
            <tr>
              <td>Phone# : </td>
              <td>{userData.phone}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td><a href={userData.website} >{userData.website}</a></td>
            </tr>
          </tbody>
        </table>
        <h3>Address</h3>
        <table>
          <tbody>
            <tr>
              <td>Street : </td>
              <td>{userData.address.street}</td>
            </tr>
            <tr>
              <td>Suite : </td>
              <td>{userData.address.suite}</td>
            </tr>
            <tr>
              <td>City : </td>
              <td>{userData.address.city}</td>
            </tr>
            <tr>
              <td>ZipCode : </td>
              <td>{userData.address.zipcode}</td>
            </tr>
            <tr>
              <td>Latitude : </td>
              <td>{userData.address.geo.lat}</td>
            </tr>
            <tr>
              <td>Longitude : </td>
              <td>{userData.address.geo.lng}</td>
            </tr>
          </tbody>
        </table>
        <h3>Company Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Name : </td>
              <td>{userData.company.name}</td>
            </tr>
            <tr>
              <td>Catch Phrase : </td>
              <td>{userData.company.catchPhrase}</td>
            </tr>
            <tr>
              <td>Description : </td>
              <td>{userData.company.bs}</td>
            </tr>
          </tbody>
        </table>
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
  user: state.user,
});

export default connect(select)(UserDetails);
