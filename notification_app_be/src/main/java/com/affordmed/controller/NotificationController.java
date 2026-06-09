package com.affordmed.controller;

import com.affordmed.dto.Notification;
import com.affordmed.service.NotificationService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationService service;

    public NotificationController(NotificationService service) {
        this.service = service;
    }

    @GetMapping("/top")
    public List<Notification> getTopNotifications(@RequestParam(defaultValue = "10") int limit) {
        return service.getTopNotifications(limit);
    }

    @GetMapping("/all")
    public org.springframework.http.ResponseEntity<String> getAllNotifications(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer limit,
            @RequestParam(name = "notification_type", required = false) String notificationType) {
        return service.getAllNotifications(page, limit, notificationType);
    }
}