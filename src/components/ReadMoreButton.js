import React from "react";
import { Link } from "react-router-dom"

const ReadMoreButton = ({to}) => (
    <div className="text-center">
        <Link to={to} className="button button__read-more">See more</Link>
    </div>
)
export default ReadMoreButton;