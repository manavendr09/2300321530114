import NotificationCard from "./NotificationCard";

function NotificationList({ notifications, readIds, onRead }) {
  return (
    <div>
      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
          isRead={readIds.has(item.ID)}
          onRead={onRead}
        />
      ))}
    </div>
  );
}

export default NotificationList;