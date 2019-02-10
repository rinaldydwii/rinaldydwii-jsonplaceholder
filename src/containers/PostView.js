import React, { Component } from "react";
import { Container, CommentsSection, Loading } from "../components";

class PostView extends Component {
    constructor() {
        super()
        this.state = {
            post: {},
            comments: [],
            loadingPost: false,
            finishPost: false,
            errorPost: "",
            loadingComments: false,
            finishComments: false,
            errorComments: ""
        }
    }
    loadPost = () => {
        this.setState({loadingPost: true})
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(post => this.setState({post, finishPost: true, loadingPost: false}))
            .catch(errorPost => this.setState({errorPost, finishPost: true, loadingPost: false}))
    }
    loadComments = () => {
        this.setState({loadingComments: true})
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`)
        .then(res => res.json())
        .then(comments => this.setState({comments, finishComments: true, loadingComments: false}))
        .catch(errorComments => this.setState({errorComments, finishComments: true, loadingComments: false}))
    }
    componentDidMount() {
        this.loadPost()
        this.loadComments()
    }
    render() {
        const { post } = this.state
        return (
            <Container className="view">
                <Loading
                    loading={this.state.loadingPost}
                    finish={this.state.finishPost}
                    error={this.state.errorPost}
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
                        comments={this.state.comments} 
                        loading={this.state.loadingComments}
                        finish={this.state.finishComments}
                        error={this.state.errorComments}
                    />
                </Loading>
            </Container>
        );
    }
}
export default PostView;