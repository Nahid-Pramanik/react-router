import PropTypes from 'prop-types';
import './Comment.css'
import { Link, useNavigate } from 'react-router-dom';

const Comment = ({ comment }) => {

    const {id, name, email} = comment;
    const nevigate = useNavigate();

    const hendleAddToNevigate= () =>{
        nevigate(`/comment/${id}`);
    }

    return (
        <div className='comment-container'>
            <h4>{name}</h4>
            <p>{email}</p>
            <Link to={`/comment/${id}`}>Show detail</Link> <br/>
            <Link to={`/comment/${id}`}><button>Show Comment Detail</button></Link><br/>
            <button onClick={hendleAddToNevigate}>Show By Hendler</button>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
}

export default Comment;