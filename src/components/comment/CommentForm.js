import React from "react";

const CommentForm = ({onSubmitComment}) => (
    <form className="form text-center" onSubmit={onSubmitComment}>
        <div className="form__row">
            <input placeholder="Name" name="name" type="text" />
        </div>
        <div className="form__row">
            <input placeholder="Email" name="email" type="email" />
        </div>
        <div className="form__row">
            <textarea placeholder="Type comment here..." name="body"></textarea>
        </div>
        <button className="button">Submit</button>
    </form>
)
export default CommentForm;