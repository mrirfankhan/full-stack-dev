import { useState } from "react";
import './commets.css';
import CommentRating from "./CommentRating";

export default function Comments() {
    const [comments, setComments] = useState([
        {
            username: "hacker",
            comment: "wowo nice hacker",
            rating: 2
        }
    ]);

    const addNewComments = (newComment) => {
        setComments((currComments) => [...currComments, newComment]);
    };

    return (
        <>
            <h2>All Comments</h2>
            <div className="comments">
                {comments.map((comment, idx) => (
                    <div key={idx}>
                        <span>{comment.username}</span>
                        <br /><br />
                        <span>{comment.comment}</span>
                        <br /><br />
                        <span>{comment.rating}</span>
                        <hr /><hr />
                    </div>
                ))}
            </div>

            <CommentRating addNewComments={addNewComments} />
        </>
    );
}
