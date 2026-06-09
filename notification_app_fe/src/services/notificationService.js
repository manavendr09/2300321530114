export async function getNotifications() {

    const response = await fetch(
        "http://localhost:8081/api/notifications/top"
    );

    return response.json();
}