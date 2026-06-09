import "../css/card.css";

function NotificationCard({ notification, isRead, onRead }) {
  return (
    <div className={`card ${isRead ? 'read' : ''}`} onClick={() => onRead(notification.ID)}>
      <span className="badge">
        {notification.Type}
      </span>
      {!isRead && <span className="unread-dot" title="Unread"></span>}

      <h3>{notification.Message}</h3>

      <p>{notification.Timestamp}</p>
    </div>
  );
}

export default NotificationCard;