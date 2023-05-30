import './Friends-item.scss';

interface FriendsItemProps {}

function FriendsItem(props: FriendsItemProps) {
    return (
        <div className="friends-list">
            <span className="friends-list-status"></span>
            <img
                className="friends-list-avatar"
                src=""
                alt="User avatar"
                width="48"
            />
            <p className="friends-list-name"></p>
        </div>
    );
}

export default FriendsItem;
