import { useEffect, useState } from "react";

import NotificationList from "../components/NotificationList";

import FilterBar from "../components/FilterBar";

import { getNotifications } from "../services/notificationService";

function AllNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {
    getNotifications().then(data => setNotifications(data));
  }, []);

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          (n) => n.Type === filter
        );

  return (
    <div className="container">
      <h2>All Notifications</h2>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <NotificationList
        notifications={filtered}
      />
    </div>
  );
}

export default AllNotifications;