import { useEffect, useState, useMemo } from "react";
import NotificationList from "../components/NotificationList";
import { getNotifications } from "../services/notificationService";
import { useReadNotifications } from "../hooks/useReadNotifications";

function PriorityInbox() {
  const [notifications, setNotifications] = useState([]);
  const [limit, setLimit] = useState(10);
  const { readIds, markAsRead } = useReadNotifications();

  useEffect(() => {
    getNotifications(limit).then(data => setNotifications(data));
  }, [limit]);

  const sortedNotifications = useMemo(() => {
    return [...notifications].sort((a, b) => {
      const aRead = readIds.has(a.ID);
      const bRead = readIds.has(b.ID);
      if (aRead === bRead) return 0;
      return aRead ? 1 : -1; // Unread first
    });
  }, [notifications, readIds]);

  return (
    <div className="container">
      <h2>Priority Inbox</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="limit-select">Show top: </label>
        <select id="limit-select" value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <NotificationList
        notifications={sortedNotifications}
        readIds={readIds}
        onRead={markAsRead}
      />
    </div>
  );
}

export default PriorityInbox;