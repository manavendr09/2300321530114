package com.affordmed.service;

import com.affordmed.dto.Notification;
import com.affordmed.dto.NotificationResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Comparator;
import java.util.List;

@Service
public class NotificationService {

    private final RestTemplate restTemplate;

    @Value("${affordmed.token}")
    private String token;

    @Value("${affordmed.url}")
    private String url;

    public NotificationService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Notification> getTopNotifications() {

        HttpHeaders headers = new HttpHeaders();

        headers.setBearerAuth(token);

        HttpEntity<Void> entity =
                new HttpEntity<>(headers);

        ResponseEntity<NotificationResponse> response =
                restTemplate.exchange(
                        url,
                        HttpMethod.GET,
                        entity,
                        NotificationResponse.class
                );

        List<Notification> rawNotifications = response.getBody() != null ? response.getBody().getNotifications() : null;
        if (rawNotifications == null) {
            return List.of();
        }

        List<Notification> notifications = new java.util.ArrayList<>(rawNotifications);

        notifications.sort(
                Comparator
                        .comparingInt(
                                (Notification n)
                                        -> priority(n.getType())
                        )
                        .reversed()
                        .thenComparing(
                                Notification::getTimestamp,
                                Comparator.nullsLast(Comparator.reverseOrder())
                        )
        );

        return notifications
                .stream()
                .limit(10)
                .toList();
    }

    private int priority(String type) {
        if (type == null) {
            return 0;
        }

        return switch(type.toLowerCase()) {

            case "result" -> 3;
            case "placement" -> 2;
            case "event" -> 1;
            default -> 0;
        };
    }
}