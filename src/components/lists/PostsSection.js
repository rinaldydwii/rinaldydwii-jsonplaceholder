import React from "react";
import PostItem from "../items/PostItem";

const PostsSection = ({posts}) => (
    <section>
        <h2 className="text-center">Posts</h2>
        { posts ? (
            <div className="grid grid-5">
                { posts.map(post => (
                    <PostItem post={post} />
                )) }
            </div>
        ) : <div>Posts not found!</div>}
    </section>
)
export default PostsSection;