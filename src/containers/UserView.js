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
            pagePosts: 1,
            loadingAlbums: false,
            finishAlbums: false,
            errorAlbums: "",
            pageAlbums: 1,
        }
    }
    loadUser = () => {
        this.setState({loadingUser: true})
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(user => this.setState({user, finishUser: true, loadingUser: false}))
            .catch(errorUser => this.setState({errorUser, finishUser: true, loadingUser: false}))
    }
    loadPosts = () => {
        const page = this.state.pagePosts
        const limit = 8
        this.setState({loadingPosts: page === 1 ? true : false})
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}&_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(posts => {
                if (posts.length) this.setState(prevState => ({posts: [...prevState.posts, ...posts], finishPosts: true, loadingPosts: false, pagePosts: page + 1}))
                if (!posts.length || posts.length < limit) this.setState({pagePosts: null})
            })
            .catch(errorPosts => this.setState({errorPosts, finishPosts: true, loadingPosts: false}))
    }
    loadAlbums = () => {
        const page = this.state.pageAlbums
        const limit = 8
        this.setState({loadingAlbums: page === 1 ? true : false})
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}&_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(albums => {
                if (albums.length) this.setState(prevState => ({albums: [...prevState.albums, ...albums], finishAlbums: true, loadingAlbums: false, pageAlbums: page + 1}))
                if (!albums.length || albums.length < limit) this.setState({pageAlbums: null})
            })
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
                        <PostsSection 
                            posts={this.state.posts} 
                            loading={this.state.loadingPosts}
                            finish={this.state.finishPosts}
                            error={this.state.errorPosts}
                            onLoadPosts={this.loadPosts}
                            paginate={this.state.pagePosts ? true : false}
                            action
                        />
                        <AlbumsSection 
                            albums={this.state.albums}
                            loading={this.state.loadingAlbums}
                            finish={this.state.finishAlbums}
                            error={this.state.errorAlbums}
                            onLoadAlbums={this.loadAlbums}
                            paginate={this.state.pageAlbums ? true : false}
                        />
                    </Loading>
                </div>
            </Container>
        );
    }
}
export default UserView;