import { useEffect, useState } from "react";
import NotificationList from "../components/NotificationList";
import FilterBar from "../components/FilterBar";
import { getAllNotifications } from "../services/notificationService";
import { useReadNotifications } from "../hooks/useReadNotifications";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { readIds, markAsRead } = useReadNotifications();
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    // Since API format varies, assume backend returns the JSON directly if it's an array or object
    getAllNotifications(page, limit, filter).then(res => {
      // The API response might be an array or an object like { notifications: [...] }
      if (Array.isArray(res)) {
         setNotifications(res);
      } else if (res && res.notifications) {
         setNotifications(res.notifications);
      } else {
         setNotifications([]);
      }
    }).finally(() => {
      setLoading(false);
    });
  }, [page, filter]);

  // Reset page to 1 when filter changes
  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <div className="container">
      <h2>All Notifications</h2>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      {loading ? (
         <p>Loading...</p>
      ) : (
         <NotificationList
           notifications={notifications}
           readIds={readIds}
           onRead={markAsRead}
         />
      )}

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={() => setPage(p => Math.max(1, p - 1))} 
          disabled={page === 1 || loading}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Previous
        </button>
        <span style={{ padding: '8px' }}>Page {page}</span>
        <button 
          onClick={() => setPage(p => p + 1)} 
          disabled={loading || notifications.length < limit}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllNotifications;