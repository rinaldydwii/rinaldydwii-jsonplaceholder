import React from "react";
import { Link } from 'react-router-dom'

const PostItem = ({post}) => (
    <Link to={`/posts/${post.id}`}>
        <div className="grid__item">
            <div className="grid__title">{post.title}</div>
            <div className="text-right">
                <button className="button button__action">Edit</button>
                <button className="button button__action">Delete</button>
            </div>
        </div>
    </Link>
)
export default PostItem;