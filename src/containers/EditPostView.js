import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Loading } from "../components";
import { fetchPost, updatePost } from "../actions/postActions";

class EditPostView extends Component {
    constructor() {
        super()
        this.state = {
            post: {}
        }
        this.handleChangeTitle.bind(this)
        this.handleChangeBody.bind(this)
    }
    componentDidMount() {
        const postId = this.props.match.params.id
        this.props.getPost(postId)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.post !== this.props.post)
            this.setState({post: this.props.post})
    }
    handleChangeTitle = (e) => {
        e.persist()
        this.setState(prevState => ({post: {...prevState, title: e.target.value}}))
    }
    handleChangeBody = (e) => {
        e.persist()
        this.setState(prevState => ({post: {...prevState, body: e.target.value}}))
    }
    updatePost = (e) => {
        e.preventDefault()
        e.persist()
        this.props.editPost(this.props.post.id, {
            title: e.target.title.value,
            body: e.target.body.value,
        })
        this.props.history.goBack()
    }
    render() {
        const { post } = this.state
        return (
            <Container className="view">
                <Loading
                    loading={this.props.loadingPost}
                    finish={this.props.finishPost}
                    error={this.props.errorPost}
                >
                    <Container small>
                        <form className="form text-center form__full-width post" onSubmit={this.updatePost} >
                            <div className="form__row">
                                <input 
                                    placeholder="Title" 
                                    name="title" 
                                    value={post ? post.title : ""} 
                                    onChange={this.handleChangeTitle} 
                                    type="text" 
                                />
                            </div>
                            <div className="form__row">
                                <textarea 
                                    placeholder="Body" 
                                    name="body"
                                    value={post ? post.body : ""} 
                                    onChange={this.handleChangeBody} 
                                ></textarea>
                            </div>
                            <button className="button">Edit</button>
                        </form>
                    </Container>
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
})
  
const mapDispatchToProps = (dispatch) => ({
    getPost: (id) => dispatch(fetchPost(id)),
    editPost: (id, data) => dispatch(updatePost(id, data))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditPostView);