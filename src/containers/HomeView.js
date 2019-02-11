import React, { Component } from "react";
import { connect } from 'react-redux';
import { UsersSection, PostsSection, AlbumsSection, PhotosSection, Container } from "../components";
import { fetchPosts } from "../actions/postActions";
import { fetchUsers } from "../actions/userActions";
import { fetchAlbums } from "../actions/albumActions";
import { fetchPhotos } from "../actions/photoActions";

class HomeView extends Component {
    componentDidMount() {
        this.props.getUsers()
        this.props.getPosts()
        this.props.getAlbums()
        this.props.getPhotos()
        
    }
    render() {
        return (
            <Container>
                <UsersSection 
                    users={this.props.users} 
                    loading={this.props.loadingUsers}
                    finish={this.props.finishUsers}
                    error={this.props.errorUsers}
                    // paginateToPage
                />
                <PostsSection 
                    posts={this.props.posts} 
                    loading={this.props.loadingPosts}
                    finish={this.props.finishPosts}
                    error={this.props.errorPosts}
                    // paginateToPage
                />
                <AlbumsSection 
                    albums={this.props.albums} 
                    loading={this.props.loadingAlbums}
                    finish={this.props.finishAlbums}
                    error={this.props.errorAlbums}
                    // paginateToPage
                />
                <PhotosSection 
                    photos={this.props.photos} 
                    loading={this.props.loadingPhotos}
                    finish={this.props.finishPhotos}
                    error={this.props.errorPhotos}
                    // paginateToPage
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    users: state.usersReducer.users,
    loadingUsers: state.usersReducer.loading,
    finishUsers: state.usersReducer.finish,
    errorUsers: state.usersReducer.error,
    posts: state.postsReducer.posts,
    loadingPosts: state.postsReducer.loading,
    finishPosts: state.postsReducer.finish,
    errorPosts: state.postsReducer.error,
    loadingAlbums: state.albumsReducer.loading,
    finishAlbums: state.albumsReducer.finish,
    errorAlbums: state.albumsReducer.error,
    photos: state.photosReducer.photos,
    loadingPhotos: state.photosReducer.loading,
    finishPhotos: state.photosReducer.finish,
    errorPhotos: state.photosReducer.error,
    albums: state.albumsReducer.albums,
})
  
const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(fetchUsers()),
    getPosts: () => dispatch(fetchPosts()),
    getAlbums: () => dispatch(fetchAlbums()),
    getPhotos: () => dispatch(fetchPhotos())
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);