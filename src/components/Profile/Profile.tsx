import "./Profile.scss";

interface ProfileProps {
    avatar: string;
    username: string;
    tag: string;
    location: string;
    stats: {
        followers: string;
        views: string;
        likes: string;
    };
}

function Profile(props: ProfileProps) {
    return (
        <div className="profile">
            <div className="profile-user">
                <div className="profile-user-avatar">
                    <img src={props.avatar} alt="user-icon" />
                </div>
                <h2 className="profile-user-name">{props.username}</h2>
                <p className="profile-user-tag">{props.tag}</p>
                <p className="profile-user-address">{props.location}</p>
            </div>
            <div className="profile-info">
                <div className="profile-info-followers profile-info-item">
                    <h3 className="profile-info-caption">Followers</h3>
                    <p className="profile-info-counter">
                        {props.stats.followers}
                    </p>
                </div>
                <div className="profile-info-views profile-info-item">
                    <h3 className="profile-info-caption">Views</h3>
                    <p className="profile-info-counter">{props.stats.views}</p>
                </div>
                <div className="profile-info-likes profile-info-item">
                    <h3 className="profile-info-caption">Likes</h3>
                    <p className="profile-info-counter">{props.stats.likes}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
