import React from "react";
import PostItem from "../items/PostItem";
import Loading from "../Loading";
import ReadMoreButton from "../ReadMoreButton";

const PostsSection = ({posts, loading, finish, error, onLoadPosts, paginateToPage = false, paginate = false}) => (
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
            { paginateToPage ? <ReadMoreButton to="/posts" /> : "" }
            { paginate ? <ReadMoreButton onClick={onLoadPosts} /> : ""}
        </Loading>
    </section>
)
export default PostsSection;