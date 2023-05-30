import FriendsItem, { FriendsItemProps } from "../Friends-item/Friends-item";
import "./Friends-list.scss";

interface FriendsListProps {
    friends: FriendsItemProps[];
}

function FriendsList(props: FriendsListProps) {
    return (
        <div className="friends-list">
            {props.friends.map((friend: FriendsItemProps) => (
                <FriendsItem friend={friend} />
            ))}
        </div>
    );
}

export default FriendsList;
