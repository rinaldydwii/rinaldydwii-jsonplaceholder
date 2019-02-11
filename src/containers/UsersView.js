import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, UsersSection } from "../components";
import { fetchUsers } from "../actions/userActions";

class UsersView extends Component {
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        return (
            <Container>
                <UsersSection 
                    users={this.props.users}
                    loading={this.props.loading}
                    finish={this.props.finish}
                    error={this.props.error}
                    // onLoadUsers={this.loadUsers}
                    // paginate={this.state.page ? true : false}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    users: state.usersReducer.users,
    loading: state.usersReducer.loading,
    finish: state.usersReducer.finish,
    error: state.usersReducer.error
})
const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(fetchUsers())
})
export default connect(mapStateToProps, mapDispatchToProps)(UsersView);