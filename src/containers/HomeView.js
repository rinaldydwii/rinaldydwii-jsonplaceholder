import React, { Component } from "react";
import { UsersSection, PostsSection, AlbumsSection, PhotosSection, Container } from "../components";

class HomeView extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loadingUsers: false,
            finishUsers: false,
            errorUsers: "",
            posts: [],
            loadingPosts: false,
            finishPosts: false,
            errorPosts: "",
            albums: [],
            loadingAlbums: false,
            finishAlbums: false,
            errorAlbums: "",
            photos: [],
            loadingPhotos: false,
            finishPhotos: false,
            errorPhotos: ""
        }
    }
    loadUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => this.setState({users: users.splice(0, 8), finishUsers: true, loadingUsers: false}))
            .catch(errorUsers => this.setState({errorUsers, finishUsers: true, loadingUsers: false}))
    }
    loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts => this.setState({posts: posts.splice(0, 8), finishPosts: true, loadingPosts: false}))
            .catch(errorPosts => this.setState({errorPosts, finishPosts: true, loadingPosts: false}))
    }
    loadAlbums = () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(albums => this.setState({albums: albums.splice(0, 8), finishAlbums: true, loadingAlbums: false}))
            .catch(errorAlbums => this.setState({errorAlbums, finishAlbums: true, loadingAlbums: false}))
    }
    loadPhotos = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(photos => this.setState({photos: photos.splice(0, 8), finishPhotos: true, loadingPhotos: false}))
            .catch(errorPhotos => this.setState({errorPhotos, finishPhotos: true, loadingPhotos: false}))
    }
    componentDidMount() {
        this.setState({loadingUsers: true, loadingPosts: true, loadingAlbums: true, loadingPhotos: true})
        this.loadUsers()
        this.loadPosts()
        this.loadAlbums()
        this.loadPhotos()
    }
    render() {
        return (
            <Container>
                <UsersSection 
                    users={this.state.users} 
                    loading={this.state.loadingUsers}
                    finish={this.state.finishUsers}
                    error={this.state.errorUsers}
                    paginateToPage
                />
                <PostsSection 
                    posts={this.state.posts} 
                    loading={this.state.loadingPosts}
                    finish={this.state.finishPosts}
                    error={this.state.errorPosts}
                    paginateToPage
                />
                <AlbumsSection 
                    albums={this.state.albums} 
                    loading={this.state.loadingAlbums}
                    finish={this.state.finishAlbums}
                    error={this.state.errorAlbums}
                    paginateToPage
                />
                <PhotosSection 
                    photos={this.state.photos} 
                    loading={this.state.loadingPhotos}
                    finish={this.state.finishPhotos}
                    error={this.state.errorPhotos}
                    paginateToPage
                />
            </Container>
        );
    }
}
export default HomeView;