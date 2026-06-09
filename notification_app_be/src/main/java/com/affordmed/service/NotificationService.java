// package com.affordmed.service;

// import com.affordmed.dto.Notification;
// import com.affordmed.dto.NotificationResponse;

// import org.springframework.http.*;
// import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;

// import java.util.Comparator;
// import java.util.List;

// @Service
// public class NotificationService {

//     private final RestTemplate restTemplate;

//     private static final String URL =
//             "http://20.244.56.144/evaluation-service/notifications";

//     private static final String TOKEN =
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYW5hdmVuZHJhLjIzYjE1MzEyMTFAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk5Mjg5MiwiaWF0IjoxNzgwOTkxOTkyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzQ2NTJkYzgtNjljNy00NzFiLTgyNTItMGE3NTViOGRkNzhjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuYXZlbmRyYSB5YWRhdiIsInN1YiI6Ijc4YWE3ZGMwLWQyMTEtNDMzYi04YTI5LThjMzRiZGMyZDVkZCJ9LCJlbWFpbCI6Im1hbmF2ZW5kcmEuMjNiMTUzMTIxMUBhYmVzLmFjLmluIiwibmFtZSI6Im1hbmF2ZW5kcmEgeWFkYXYiLCJyb2xsTm8iOiIyMzAwMzIxNTMwMTE0IiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiNzhhYTdkYzAtZDIxMS00MzNiLThhMjktOGMzNGJkYzJkNWRkIiwiY2xpZW50U2VjcmV0IjoiRWNLQVBTVUtIQ1ZUVGNUVCJ9.lzzvckyki3NEOzOyd1C6yq3_WbKMCngEnAjz_usn7pM";

//     public NotificationService(RestTemplate restTemplate) {
//         this.restTemplate = restTemplate;
//     }

//     public List<Notification> getTopNotifications() {

//         HttpHeaders headers = new HttpHeaders();

//         headers.setBearerAuth(TOKEN);

//         HttpEntity<Void> entity =
//                 new HttpEntity<>(headers);

//         ResponseEntity<NotificationResponse> response =
//                 restTemplate.exchange(
//                         URL,
//                         HttpMethod.GET,
//                         entity,
//                         NotificationResponse.class
//                 );

//         List<Notification> notifications =
//                 response.getBody().getNotifications();

//         notifications.sort(
//                 Comparator
//                         .comparingInt(
//                                 (Notification n)
//                                         -> priority(n.getType())
//                         )
//                         .reversed()
//                         .thenComparing(
//                                 Notification::getTimestamp,
//                                 Comparator.reverseOrder()
//                         )
//         );

//         return notifications
//                 .stream()
//                 .limit(10)
//                 .toList();
//     }

//     private int priority(String type) {

//         return switch (type.toLowerCase()) {

//             case "result" -> 3;
//             case "placement" -> 2;
//             case "event" -> 1;
//             default -> 0;
//         };
//     }
// }
package com.affordmed.service;

public List<Notification> getTopNotifications() {

    List<Notification> notifications = new ArrayList<>();

    Notification n = new Notification();
    n.setID("1");
    n.setType("Result");
    n.setMessage("project-review");
    n.setTimestamp("2026-06-09 03:54:04");

    notifications.add(n);

    return notifications;
}