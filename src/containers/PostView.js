import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, CommentsSection, Loading } from "../components";
import { fetchPost } from "../actions/postActions";
import { fetchCommentsById } from "../actions/commentActions";

class PostView extends Component {
    editComment = (id, event) => {
        event.preventDefault()
        event.persist()
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId: this.props.match.params.id,
                name: event.target.name.value,
                email: event.target.email.value,
                body: event.target.body.value,
            })
        })
            .then(res => res.json())
            .then(comment => {
                const comments = this.state.comments
                comments.map(item => {
                    if (comment.id === item.id)
                        return comment
                    return item
                })
                this.setState({comments})
                event.target.reset()
            })
            .catch(errorComments => this.setState({errorComments}))
    }
    deleteComment = (id, index) => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(_ => {
                const comments = this.state.comments
                comments.splice(index, 1)
                this.setState({comments})
            })
            .catch(errorComments => this.setState({errorComments}))
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
})
  
const mapDispatchToProps = (dispatch) => ({
    getPost: (id) => dispatch(fetchPost(id)),
    getComments: (id) => dispatch(fetchCommentsById(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(PostView);