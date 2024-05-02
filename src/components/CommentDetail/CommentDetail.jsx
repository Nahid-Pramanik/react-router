import { useLoaderData, useNavigate } from "react-router-dom";
import './CommentDetail.css'

const CommentDetail = () => {
    const commentDetail = useLoaderData();
    const {name, body} = commentDetail;

    const goBackNevigate = useNavigate();

    const goBackHendler = () => {
        goBackNevigate(-1)
    }

    return (
        <div className="comment-detail">
            <h2>Comment details</h2>
            <h4>Name: {name}</h4>
            <p>Comment: {body}</p>
            <button onClick={goBackHendler}>Go Back</button>
        </div>
    );
};

export default CommentDetail;