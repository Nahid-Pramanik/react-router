import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";
import './Comments.css'

const Comments = () => {
    const comments = useLoaderData();

    return (
        <div>
            <h2>This is Comments page</h2>
            <div className="comments-container">
                {
                    comments.map(comment=> <Comment
                    key={comment.id}
                    comment={comment}
                    ></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;