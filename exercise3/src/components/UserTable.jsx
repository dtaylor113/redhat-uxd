import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';
import { userFetchList } from '../actions/UserActions';
import beautifyAddress from '../utils';

export class UserTable extends Component {

  constructor() {
    super();
    this.tableEventHandler = this.tableEventHandler.bind(this);
  }

  componentDidMount() {
    const { users, dispatch } = this.props;
    if (!users.loaded) {
      dispatch(userFetchList());
    }
  }

  tableEventHandler(_, rowInfo) {
    const { history } = this.props;
    return {
      onClick: (e, handleOriginal) => {
        console.log('A Td Element was clicked!');
        console.log('It was in this row:', rowInfo);
        history.push(`/user/${rowInfo.original.id}`);

        if (handleOriginal) {
          handleOriginal();
        }
      }
    };
  }

  render() {
    const { users } = this.props;
    console.log(users);
    if (!users.loaded) {
      return <h1>Loading...</h1>;
    }

    const columns = [
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
    ];

    return (
      <div>
        <ReactTable
          data={users.usersData}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          getTdProps={this.tableEventHandler}
        />
        <br />
      </div>
    );
  }
}

UserTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  users: PropTypes.object
};

UserTable.defaultProps = {
  users: {}
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(withRouter(UserTable));
