package com.patrick.recipes.domain.response;

import com.patrick.recipes.domain.Address;

import java.time.LocalDateTime;

public record PropertyResponse(int id, int price, String description, int builtYear, int numberOfBeds, int numberOfBathrooms, int size, Address address, LocalDateTime createdAt) {
}
