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

    return (
      <div>
        <ReactTable
          data={users.usersData}
          columns={[
            {
              columns: [
                {
                  Header: 'Name',
                  id: 'fullName',
                  accessor: d => d.name
                },
                {
                  Header: 'Username',
                  id: 'username',
                  accessor: d => d.username
                },
                {
                  Header: 'Username',
                  id: 'email',
                  width: 250,
                  accessor: d => d.email
                },
                {
                  Header: 'Address',
                  id: 'addres',
                  width: 400,
                  accessor: d => beautifyAddress(d.address)
                }
              ]
            },
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
