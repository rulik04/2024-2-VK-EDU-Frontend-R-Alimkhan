export const UserList = ({ children, user, onClick }) => {
    return (
        <li key={user.id} className="user-list-item" onClick={onClick}>
            <div className="user-avatar">
                <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                />
            </div>
            <div className="user-info">
                <p className="user-name">
                    {user.first_name} {user.last_name}
                </p>
            </div>
            {children}
        </li>
    );
};
