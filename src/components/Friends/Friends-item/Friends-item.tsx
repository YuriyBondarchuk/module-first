import "./Friends-item.scss";

export interface FriendsItemProps {
    avatar: string;
    name: string;
    isOnline: boolean;
}

function FriendsItem(props: any) {
    const isOnlineClass = (status: boolean): string => {
        return status
            ? "friends-item-status friends-item-online"
            : "friends-item-status";
    };

    return (
        <div className="friends-item">
            <span className={isOnlineClass(props.friend.isOnline)}></span>
            <img
                className="friends-item-avatar"
                src={props.friend.avatar}
                alt="User avatar"
                width="48"
            />
            <p className="friends-item-name">{props.friend.name}</p>
        </div>
    );
}

export default FriendsItem;
