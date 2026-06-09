export async function getNotifications(limit = 10) {
    const response = await fetch(
        `http://localhost:8081/api/notifications/top?limit=${limit}`
    );
    return response.json();
}

export async function getAllNotifications(page = 1, limit = 10, type = "All") {
    const params = new URLSearchParams();
    params.append('page', page);
    params.append('limit', limit);
    if (type && type !== "All") {
        params.append('notification_type', type);
    }
    
    const response = await fetch(
        `http://localhost:8081/api/notifications/all?${params.toString()}`
    );
    return response.json();
}