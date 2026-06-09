# Notification System Design

## Architecture Overview
The system consists of a **React Frontend** communicating with a **Spring Boot Backend**, which acts as a proxy and orchestrator to fetch data from the **AffordMed Evaluation API**.

**Data Flow:**
`React Frontend (Port 3000)  ->  Spring Boot Backend (Port 8081)  ->  AffordMed API`

## Stage 1: Priority Inbox
The Priority Inbox guarantees that users always see the top `n` most important *unread* notifications. 
- **Sorting Logic:** Priority is determined by the `Type` field. 
  - `Result` = 3 (Highest)
  - `Placement` = 2
  - `Event` = 1 (Lowest)
- **Recency:** If priorities match, we fallback to sorting by `Timestamp` (Descending).
- **Backend Implementation:** `NotificationService.java` fetches the data and sorts it in memory based on these weights, then slices the top `n` records based on the frontend's requested `limit`.

## Stage 2: All Notifications & Read State
- **Proxy Endpoint:** The backend provides a `/api/notifications/all` proxy endpoint to securely pass `limit`, `page`, and `notification_type` to the external evaluation API while appending the hidden Bearer Token.
- **Read/Unread Tracking:** The external API has no database for tracking read status. This is handled on the Frontend using a custom React Hook (`useReadNotifications`) which persists the user's viewed notification IDs in the browser's `localStorage`.
- **UI Distinctions:** Unread notifications feature a red dot, while read notifications are dimmed. In the Priority Inbox, unread notifications are forcefully sorted to the top.

## Logging Middleware
The backend includes a custom Spring Boot Web Filter (`LoggingFilter.java`).
- **Functionality:** It intercepts every incoming HTTP request (`OncePerRequestFilter`).
- **Execution Time Tracking:** It records the system time before passing the request down the `FilterChain`, and calculates the total processing time (`end - start`) once the response is ready.
- **Output:** It outputs the HTTP Method, URI, and execution time in milliseconds to the console (e.g., `GET /api/notifications/top 154 ms`), providing crucial performance and debugging metrics for the API.