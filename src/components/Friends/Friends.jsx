import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import './Friends.css'

const Friends = () => {

    const friends = useLoaderData();

    return (
        <div>
            <h2>This are my friend: {friends.length}</h2>

            <div className="friends-container">
                {
                    friends.map(friend => <Friend 
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;