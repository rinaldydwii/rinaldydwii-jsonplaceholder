import React, { Component } from "react";
import { Header, Divider, List } from "semantic-ui-react"
import { ProfileSection, PostsSection, AlbumsSection, Container } from "../components";

class UserView extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadUser = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(user => this.setState({user}))
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    loadPosts = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
        .then(res => res.json())
            .then(posts => this.setState(prevState => ({user: {...prevState.user, posts}})))
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    loadAlbums = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`)
        .then(res => res.json())
            .then(albums => this.setState(prevState => ({user: {...prevState.user, albums}, loading: false, finish: true})))
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    async componentDidMount() {
        this.setState({loading: true})
        await this.loadUser()
        await this.loadPosts()
        await this.loadAlbums()
    }
    render() {
        const { user, loading, finish, error } = this.state
        return (
            <Container>
                <div className="profile">
                    <header>
                        <h1 className="text-center">{user.name}</h1>
                        <div className="profile__information text-center">
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    </header>
                    <ProfileSection user={user} />
                    <PostsSection posts={user.posts} />
                    <AlbumsSection albums={user.albums} />
                </div>
            </Container>
        );
    }
}
export default UserView;