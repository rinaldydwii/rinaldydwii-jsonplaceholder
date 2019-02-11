import React, { Component } from "react";
import { connect } from 'react-redux';
import { ProfileSection, PostsSection, AlbumsSection, Container, Loading } from "../components";
import { fetchUser } from "../actions/userActions";
import { fetchPostsByUserId } from "../actions/postActions";
import { fetchAlbumsByUserId } from "../actions/albumActions";

class UserView extends Component {
    componentDidMount() {
        const userId = this.props.match.params.id
        this.props.getUser(userId)
        this.props.getPosts(userId)
        this.props.getAlbums(userId)
    }
    render() {
        const { user } = this.props
        return (
            <Container>
                <div className="profile">
                    <Loading
                        loading={this.props.loadingUser}
                        finish={this.props.finishUser}
                        error={this.props.errorUser}
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
                            posts={this.props.posts} 
                            loading={this.props.loadingPosts}
                            finish={this.props.finishPosts}
                            error={this.props.errorPosts}
                            // onLoadPosts={this.loadPosts}
                            // paginate={this.state.pagePosts ? true : false}
                            // action
                        />
                        <AlbumsSection 
                            albums={this.props.albums}
                            loading={this.props.loadingAlbums}
                            finish={this.props.finishAlbums}
                            error={this.props.errorAlbums}
                            // onLoadAlbums={this.loadAlbums}
                            // paginate={this.state.pageAlbums ? true : false}
                        />
                    </Loading>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer.user,
    loadingUser: state.userReducer.loading,
    finishUser: state.userReducer.finish,
    errorUser: state.userReducer.error,
    posts: state.postsReducer.posts,
    loadingPosts: state.postsReducer.loading,
    finishPosts: state.postsReducer.finish,
    errorPosts: state.postsReducer.error,
    albums: state.albumsReducer.albums,
    loadingAlbums: state.albumsReducer.loading,
    finishAlbums: state.albumsReducer.finish,
    errorAlbums: state.albumsReducer.error,
})
  
const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    getPosts: (id) => dispatch(fetchPostsByUserId(id)),
    getAlbums: (id) => dispatch(fetchAlbumsByUserId(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserView);