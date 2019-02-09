import React, { Component } from "react";
import { Header } from "semantic-ui-react"
import { Container, CommentsSection } from "../components";

class PostView extends Component {
    constructor() {
        super()
        this.state = {
            post: {},
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadPost = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(post => this.setState({post}))
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    loadComments = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`)
        .then(res => res.json())
        .then(comments => this.setState(prevState => ({post: {...prevState.post, comments}, finish: true, loading: false})))
        .catch(error => this.setState({error, finish: true, loading: false}))
    }
    async componentDidMount() {
        this.setState({loading: true})
        await this.loadPost()
        await this.loadComments()
    }
    render() {
        const { post, loading, finish, error } = this.state
        return (
            <Container className="view">
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
                <CommentsSection comments={post.comments} />
            </Container>
        );
    }
}
export default PostView;