import { useLoaderData } from "react-router-dom";
import './FriendDetail.css'

const FriendDetail = () => {

    const friend = useLoaderData();
    const { name, phone, email, username, website } = friend;

    return (
        <div>
            <h2>Everything About this Friend</h2>
            <div className="friend-detaiil">
                <h3>Name: {name}</h3>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <p>User Name: {username}</p>
                <p>Website: {website}</p>
            </div>

        </div>
    );
};

export default FriendDetail;