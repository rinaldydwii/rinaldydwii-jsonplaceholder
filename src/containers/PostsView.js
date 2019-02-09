import React, { Component } from "react";
import { Container, PostsSection } from "../components";

class PostsView extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts => this.setState({posts, finish: true, loading: false}))
            .catch(error => this.setState({error, finish: true}))
    }
    componentDidMount() {
        this.setState({loading: true})
        this.loadPosts()
    }
    render() {
        return (
            <Container>
                <PostsSection posts={this.state.posts} />
            </Container>
        );
    }
}
export default PostsView;