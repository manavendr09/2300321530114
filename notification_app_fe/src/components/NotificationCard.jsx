import "../css/card.css";

function NotificationCard({ notification }) {
  return (
    <div className="card">
      <span className="badge">
        {notification.Type}
      </span>

      <h3>{notification.Message}</h3>

      <p>{notification.Timestamp}</p>
    </div>
  );
}

export default NotificationCard;