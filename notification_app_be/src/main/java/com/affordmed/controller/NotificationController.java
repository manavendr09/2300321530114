package com.affordmed.controller;

import com.affordmed.dto.Notification;
import com.affordmed.service.NotificationService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationService service;

    public NotificationController(
            NotificationService service
    ) {
        this.service = service;
    }

    @GetMapping("/top")
    public List<Notification> getTopNotifications() {

        return service.getTopNotifications();
    }
}