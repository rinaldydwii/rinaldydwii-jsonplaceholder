import React from "react";
import PostItem from "../items/PostItem";
import Loading from "../Loading";

const PostsSection = ({posts, loading, finish, error}) => (
    <section>
        <h2 className="text-center">Posts</h2>
        <Loading loading={loading} finish={finish} error={error}>
            { posts ? (
                <div className="grid grid-4">
                    { posts.map(post => (
                        <PostItem post={post} key={post.id} />
                    )) }
                </div>
            ) : <div>Posts not found!</div>
            }
        </Loading>
    </section>
)
export default PostsSection;