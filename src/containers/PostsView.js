import React, { Component } from "react";
import { Container, PostsSection } from "../components";

class PostsView extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            loading: false,
            finish: false,
            error: "",
            page: 1
        }
    }
    loadPosts = () => {
        const { page } = this.state
        const limit = 20
        this.setState({loading: page === 1 ? true : false})
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(posts => {
                if (posts.length) this.setState(prevState => ({posts: [...prevState.posts, ...posts], finish: true, loading: false, page: page + 1}))
                if (!posts.length || posts.length < limit) return this.setState({page: null})
            })
            .catch(error => this.setState({error, finish: true, loading: false }))
    }
    componentDidMount() {
        this.loadPosts()
    }
    render() {
        return (
            <Container>
                <PostsSection 
                    posts={this.state.posts} 
                    loading={this.state.loading}
                    finish={this.state.finish}
                    error={this.state.error}
                    onLoadPosts={this.loadPosts}
                    paginate={this.state.page ? true : false}
                />
            </Container>
        );
    }
}
export default PostsView;