import React, { Component } from "react";
import { Container, UsersSection } from "../components";

class UsersView extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => this.setState({users, finish: true, loading: false}))
            .catch(error => this.setState({error, finish: true}))
    }
    componentDidMount() {
        this.setState({loading: true})
        this.loadUsers()
    }
    render() {
        return (
            <Container>
                <UsersSection users={this.state.users} />
            </Container>
        );
    }
}
export default UsersView;