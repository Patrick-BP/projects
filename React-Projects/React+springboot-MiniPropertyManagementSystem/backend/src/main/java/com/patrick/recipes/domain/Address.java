package com.patrick.recipes.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "address_table")
@Data
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String street;
    private String city;
    @Enumerated
    private State state;
    private String zipcode;
}
