import PropTypes from 'prop-types';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, email} = friend;

    return (
        <div className='friend-container'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p><Link to={`/friend/${id}`}>Friend Details</Link></p>
        </div>
    );
};

Friend.propTypes = {
    friend: PropTypes.object.isRequired,
}

export default Friend;