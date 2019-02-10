import React, { Component } from "react";
import { Container, UsersSection } from "../components";

class UsersView extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: false,
            finish: false,
            error: "",
            page: 1,
        }
    }
    loadUsers = () => {
        const { page } = this.state
        const limit = 20
        this.setState({loading: page === 1 ? true : false})
        fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(users => {
                if (users.length) this.setState(prevState => ({users: [...prevState.users, ...users], finish: true, loading: false, page: page + 1}))
                if (!users.length || users.length < limit) this.setState({page: null})
            })
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    componentDidMount() {
        this.loadUsers()
    }
    render() {
        return (
            <Container>
                <UsersSection 
                    users={this.state.users}
                    loading={this.state.loading}
                    finish={this.state.finish}
                    error={this.state.error}
                    onLoadUsers={this.loadUsers}
                    paginate={this.state.page ? true : false}
                />
            </Container>
        );
    }
}
export default UsersView;