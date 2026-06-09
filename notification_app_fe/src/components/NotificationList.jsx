import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  return (
    <div>
      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}
    </div>
  );
}

export default NotificationList;