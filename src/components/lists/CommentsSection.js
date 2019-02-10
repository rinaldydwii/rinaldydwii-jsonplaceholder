import React from "react";
import CommentItem from "../items/CommentItem";
import CommentForm from "../comment/CommentForm";
import Loading from "../Loading";
import Container from "../Container";

const CommentsSection = ({comments, loading, finish, error}) => (
    <section>
        <h2 className="text-center">Comments</h2>
        <Loading
            loading={loading}
            finish={finish}
            error={error}
        >
            <Container small>
                { comments ? (
                    <div className="list">
                        { comments.map(comment => (
                                <CommentItem comment={comment} key={comment.id} />
                            ))
                        }
                    </div>
                ) : <div>Comments not found!</div>}
                <CommentForm />
            </Container>
        </Loading>
    </section>
)
export default CommentsSection;