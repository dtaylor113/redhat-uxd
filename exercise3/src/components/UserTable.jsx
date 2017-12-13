import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import userFetchList from '../actions/UserActions';
import beautifyAddress from '../utils';

export class UserTable extends Component {

  componentDidMount() {
    const { users, dispatch } = this.props;
    if (!users.loaded) {
      dispatch(userFetchList());
    }
  }

  render() {
    const { users } = this.props;
    console.log(users);
    if (!users.loaded) {
      return <h1>Loading...</h1>;
    }

    const userData = users.users.results;
    console.log(userData);

    return (
      <div>
        <ReactTable
          data={userData}
          columns={[
            {
              Header: 'Name',
              columns: [
                {
                  Header: 'First Name',
                  id: 'firstName',
                  accessor: d => d.name.first
                },
                {
                  Header: 'Last Name',
                  id: 'lastName',
                  accessor: d => d.name.last
                }
              ]
            },
            {
              columns: [
                {
                  Header: 'Email',
                  id: 'email',
                  minWidth: 250,
                  accessor: d => d.email
                }
              ]
            },
            {
              columns: [
                {
                  Header: 'Address',
                  id: 'address',
                  minWidth: 450,
                  accessor: d => beautifyAddress(d.location)
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

UserTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.object
};

UserTable.defaultProps = {
  users: {}
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserTable);
