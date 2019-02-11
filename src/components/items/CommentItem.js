import React from "react";
import { connect } from "react-redux"
import { deleteComment, updateComment } from "../../actions/commentActions";
import CommentForm from "../comment/CommentForm";

class CommentItem extends React.Component {
    constructor() {
        super()
        this.state = {
            comment: {},
            edit: false
        }
        this.handleChangeName.bind(this)
        this.handleChangeEmail.bind(this)
        this.handleChangeBody.bind(this)
    }
    componentDidMount() {
        this.setState({comment: this.props.comment})
    }
    handleClick = () => {
        this.setState({edit: true})
    }
    updateComment = (e) => {
        e.preventDefault()
        e.persist()
        this.props.editComment(this.props.comment.id, {
            name: e.target.name.value,
            email: e.target.email.value,
            body: e.target.body.value,
            postId: this.props.postId
        })
        this.setState({edit: false})
    }
    handleChangeName = (e) => {
        e.persist()
        this.setState(prevState => ({comment: {...prevState.comment, name: e.target.value}}))
    }
    handleChangeEmail = (e) => {
        e.persist()
        this.setState(prevState => ({comment: {...prevState.comment, email: e.target.value}}))
    }
    handleChangeBody = (e) => {
        e.persist()
        this.setState(prevState => ({comment: {...prevState.comment, body: e.target.value}}))
    }
    render() {
        const { index } = this.props
        const { comment } = this.state
        return (
            <div className="list__item">
                { this.state.edit ? 
                    ( 
                        <CommentForm 
                            onSubmitComment={this.updateComment} 
                            value={comment} 
                            onChange={{
                                name: this.handleChangeName,
                                email: this.handleChangeEmail,
                                body: this.handleChangeBody
                            }}
                            title="Update"
                        /> 
                    ) :
                    (
                        <React.Fragment>
                            <div className="list__title">{comment.name}</div>
                            <div className="list__subtitle">{comment.email}</div>
                            <div className="list__content"><p>{comment.body}</p></div>
                            <div className="text-right">
                                <button className="button button__action" onClick={this.handleClick}>Edit</button>
                                <button className="button button__action" onClick={() => this.props.deleteComment(comment.id, index)}>Delete</button>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
} 

const mapStateToProps = state => ({
})
  
const mapDispatchToProps = (dispatch) => ({
    editComment: (id, data) => dispatch(updateComment(id, data)),
    deleteComment: (id, index) => dispatch(deleteComment(id, index))
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);