package com.patrick.recipes.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;


@Entity
@Table(name="properties_table")
@Data
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int price;
    private String description;
    private int builtYear;
    private int numberOfBeds;
    private int numberOfBathrooms;
    private int size;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="address_id", referencedColumnName = "id")
    private Address address;
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
    }
}
