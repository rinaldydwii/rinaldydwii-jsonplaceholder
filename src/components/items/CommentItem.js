import React from "react";

const CommentItem = ({comment, onDeleteComment}) => (
    <div className="list__item">
        <div className="list__title">{comment.name}</div>
        <div className="list__subtitle">{comment.email}</div>
        <div className="list__content"><p>{comment.body}</p></div>
        <div className="text-right">
            <button className="button button__action">Edit</button>
            <button className="button button__action" onClick={onDeleteComment}>Delete</button>
        </div>
    </div>
)
export default CommentItem;