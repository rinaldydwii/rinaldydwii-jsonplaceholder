import React, { Component } from "react";
import { ProfileSection, PostsSection, AlbumsSection, Container, Loading } from "../components";

class UserView extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            posts: [],
            albums: [],
            loadingUser: false,
            finishUser: false,
            errorUser: "",
            loadingPosts: false,
            finishPosts: false,
            errorPosts: "",
            loadingAlbums: false,
            finishAlbums: false,
            errorAlbums: ""
        }
    }
    loadUser = async() => {
        this.setState({loadingUser: true})
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(user => this.setState({user, finishUser: true, loadingUser: false}))
            .catch(errorUser => this.setState({errorUser, finishUser: true, loadingUser: false}))
    }
    loadPosts = async() => {
        this.setState({loadingPosts: true})
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
        .then(res => res.json())
            .then(posts => this.setState({posts, finishPosts: true, loadingPosts: false}))
            .catch(errorPosts => this.setState({errorPosts, finishPosts: true, loadingPosts: false}))
    }
    loadAlbums = async() => {
        this.setState({loadingAlbums: true})
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`)
        .then(res => res.json())
            .then(albums => this.setState({albums, loadingAlbums: false, finishAlbums: true}))
            .catch(errorAlbums => this.setState({errorAlbums, finishAlbums: true, loadingAlbums: false}))
    }
    componentDidMount() {
        
        this.loadUser()
        this.loadPosts()
        this.loadAlbums()
    }
    render() {
        const { user } = this.state
        return (
            <Container>
                <div className="profile">
                    <Loading
                        loading={this.state.loadingUser}
                        finish={this.state.finishUser}
                        error={this.state.errorUser}
                    >
                        <header>
                            <h1 className="text-center">{user.name}</h1>
                            <div className="profile__information text-center">
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                        </header>
                        <ProfileSection user={user} />
                    </Loading>
                    <PostsSection 
                        posts={this.state.posts} 
                        loading={this.state.loadingPosts}
                        finish={this.state.finishPosts}
                        error={this.state.errorPosts}
                    />
                    <AlbumsSection 
                        albums={this.state.albums}
                        loading={this.state.loadingAlbums}
                        finish={this.state.finishAlbums}
                        error={this.state.errorAlbums}
                    />
                </div>
            </Container>
        );
    }
}
export default UserView;