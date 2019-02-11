import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Container, CommentsSection, Loading } from "../components";
import { fetchPost, deletePost } from "../actions/postActions";
import { fetchCommentsById, createComment } from "../actions/commentActions";

class PostView extends Component {
    createComment = (e) => {
        e.preventDefault()
        e.persist()
        this.props.createComment({
            name: e.target.name.value,
            email: e.target.email.value,
            body: e.target.body.value,
            postId: this.props.post.id
        })
        e.target.reset()
    }
    deletePost = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.goBack()
    }
    componentDidMount() {
        const postId = this.props.match.params.id
        this.props.getPost(postId)
        this.props.getComments(postId)
    }
    render() {
        const { post } = this.props
        return (
            <Container className="view">
                <Loading
                    loading={this.props.loadingPost}
                    finish={this.props.finishPost}
                    error={this.props.errorPost}
                >
                    <div className="post">
                        <header>
                            <h1 className="text-center">{post.title}</h1>
                            <div className="text-center">
                                <button className="button button__action" ><Link to={`/posts/${post.id}/edit`}>Edit</Link></button>
                                <button className="button button__action" onClick={this.deletePost}>Delete</button>
                            </div>
                        </header>
                        <article>
                            <Container small>
                                <p>{post.body}</p>
                            </Container>
                        </article>
                    </div>
                    <CommentsSection
                        comments={this.props.comments} 
                        loading={this.props.loadingComments}
                        finish={this.props.finishComments}
                        error={this.props.errorComments}
                        onSubmitComment={this.createComment}
                        postId={post.id}
                    />
                </Loading>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    post: state.postReducer.post,
    loadingPost: state.postReducer.loading,
    finishPost: state.postReducer.finish,
    errorPost: state.postReducer.error,
    comments: state.commentsReducer.comments,
    loadingComments: state.commentsReducer.loading,
    finishComments: state.commentsReducer.finish,
    errorComments: state.commentsReducer.error,
    finishPosts: state.postsReducer.finish
})
  
const mapDispatchToProps = (dispatch) => ({
    getPost: (id) => dispatch(fetchPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    getComments: (id) => dispatch(fetchCommentsById(id)),
    createComment: (data) => dispatch(createComment(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(PostView);