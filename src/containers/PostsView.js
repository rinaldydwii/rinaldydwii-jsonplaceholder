import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, PostsSection } from "../components";
import { fetchPosts } from "../actions/postActions";

class PostsView extends Component {
    componentDidMount() {
        this.props.getPosts()
    }
    render() {
        return (
            <Container>
                <PostsSection 
                    posts={this.props.posts} 
                    loading={this.props.loading}
                    finish={this.props.finish}
                    error={this.props.error}
                    // onLoadPosts={this.loadPosts}
                    // paginate={this.state.page ? true : false}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    loading: state.postsReducer.loading,
    finish: state.postsReducer.finish,
    error: state.postsReducer.error
})
  
const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(fetchPosts())
})
export default connect(mapStateToProps, mapDispatchToProps)(PostsView);