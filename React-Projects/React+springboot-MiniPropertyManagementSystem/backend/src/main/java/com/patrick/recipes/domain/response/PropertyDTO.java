package com.patrick.recipes.domain.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyDTO {
    private int price;
    private String description;
    private int builtYear;
    private int numberOfBeds;
    private int numberOfBathrooms;
    private UserDTO owner;
}
