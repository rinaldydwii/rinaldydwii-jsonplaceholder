import React from "react";
import CommentItem from "../items/CommentItem";
import CommentForm from "../comment/CommentForm";
import Loading from "../Loading";
import Container from "../Container";

const CommentsSection = ({comments, loading, finish, error, onSubmitComment, onDeleteComment}) => (
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
                        { comments.map((comment, index) => (
                                <CommentItem comment={comment} key={comment.id} onDeleteComment={() => onDeleteComment(comment.id, index)} />
                            ))
                        }
                    </div>
                ) : <div>Comments not found!</div>}
                <CommentForm onSubmitComment={onSubmitComment} />
            </Container>
        </Loading>
    </section>
)
export default CommentsSection;