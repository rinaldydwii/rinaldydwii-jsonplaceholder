import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container } from "../components";
import { createPost } from "../actions/postActions";

class AddPostView extends Component {
    constructor() {
        super()
        this.state = {
            post: {
                title: "",
                body: ""
            }
        }
        this.handleChangeTitle.bind(this)
        this.handleChangeBody.bind(this)
    }
    handleChangeTitle = (e) => {
        e.persist()
        this.setState(prevState => ({post: {...prevState, title: e.target.value}}))
    }
    handleChangeBody = (e) => {
        e.persist()
        this.setState(prevState => ({post: {...prevState, body: e.target.value}}))
    }
    createPost = (e) => {
        e.preventDefault()
        e.persist()
        this.props.addPost({
            title: e.target.title.value,
            body: e.target.body.value,
        })
        this.props.history.goBack()
    }
    render() {
        const { post } = this.state
        return (
            <Container className="view">
                <Container small>
                    <form className="form text-center form__full-width post" onSubmit={this.createPost} >
                        <div className="form__row">
                            <input 
                                placeholder="Title" 
                                name="title" 
                                value={post.title} 
                                onChange={this.handleChangeTitle} 
                                type="text" 
                            />
                        </div>
                        <div className="form__row">
                            <textarea 
                                placeholder="Body" 
                                name="body"
                                value={post.body} 
                                onChange={this.handleChangeBody} 
                            ></textarea>
                        </div>
                        <button className="button">Add</button>
                    </form>
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
})
  
const mapDispatchToProps = (dispatch) => ({
    addPost: (data) => dispatch(createPost(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddPostView);