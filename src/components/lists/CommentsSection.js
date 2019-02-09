import React from "react";
import CommentItem from "../items/CommentItem";
import Container from "../Container";

const CommentsSection = ({comments}) => (
    <section>
        <h2 className="text-center">Comments</h2>
        { comments ? (
            <div className="list">
                <Container small>
                    { comments.map(comment => (
                            <CommentItem comment={comment} />
                        ))
                    }
                </Container>
            </div>
        ) : <div>Comments not found!</div>}
    </section>
)
export default CommentsSection;