package com.patrick.recipes.domain.request;

import com.patrick.recipes.domain.Address;

public record PropertyRequest(int price, String description, int builtYear, int numberOfBeds, int numberOfBathrooms, int size, Address address) {
}
