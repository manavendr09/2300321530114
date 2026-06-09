export async function getNotifications() {

    const response = await fetch(
        "http://localhost:8080/api/notifications/top"
    );

    return response.json();
}