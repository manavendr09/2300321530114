# AffordMed Notification Management System

## Overview

This project was developed as part of the AffordMed Backend + Frontend Assessment.

The application fetches notifications from the AffordMed Notification API, processes them according to the specified priority rules, and displays them through a responsive React dashboard.

### Priority Order

Notifications are sorted using the following priority:

1. Result
2. Placement
3. Event

If multiple notifications have the same priority, they are sorted by timestamp in descending order (latest first).

---

# Project Structure

```text
2300321530114
│
├── logging_middleware
│
├── notification_system_design.md
│
├── notification_app_be
│
└── notification_app_fe
```

---

# Technology Stack

## Backend

* Java 21+
* Spring Boot 3
* RestTemplate
* Maven

## Frontend

* React
* Vite
* React Router
* Pure CSS

---

# Features

## Backend

* Fetch notifications from AffordMed API
* Sort notifications based on:

  * Priority
  * Timestamp
* Return Top 10 notifications
* Global exception handling
* Logging middleware
* CORS configuration

## Frontend

* Priority Inbox
* All Notifications View
* Filter notifications by type
* Responsive UI
* React Router navigation

# Backend Endpoint

```http
GET /api/notifications/top
```

Response:

<img width="1050" height="553" alt="image" src="https://github.com/user-attachments/assets/14d68bab-06a6-48ce-b198-60f6b3d2ed65" />


# Screenshots

Add screenshots here before submission:

## Backend

* Postman Request
  <img width="832" height="461" alt="image" src="https://github.com/user-attachments/assets/ed8f1a3f-18e0-4df1-8267-c54fe7096d74" />

* Postman Response
<img width="1742" height="397" alt="image" src="https://github.com/user-attachments/assets/105aa20d-fcee-4070-9e61-3fdf6063185d" />
<img width="898" height="863" alt="image" src="https://github.com/user-attachments/assets/9ee10f3d-4100-4b69-8f58-342949ea6a3d" />

## Frontend

* Priority Inbox
* All Notifications Page
* Filter Functionality

---

# Author

Manavendra Yadav

Roll Number: 2300321530114

GitHub:
https://github.com/manavendr09

---

# Assessment Submission

This repository contains both backend and frontend implementations required for the AffordMed assessment, including notification prioritization, API integration, middleware logging, filtering, and user interface components.
