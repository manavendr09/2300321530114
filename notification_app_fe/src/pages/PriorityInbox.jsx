import { useEffect, useState } from "react";

import NotificationList from "../components/NotificationList";

import { getNotifications } from "../services/notificationService";

function PriorityInbox() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data =
      await getNotifications();

    setNotifications(data);
  };

  return (
    <div className="container">
      <h2>Priority Inbox</h2>

      <NotificationList
        notifications={notifications}
      />
    </div>
  );
}

export default PriorityInbox;