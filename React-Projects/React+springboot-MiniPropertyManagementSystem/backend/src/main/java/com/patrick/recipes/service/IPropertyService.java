package com.patrick.recipes.service;

import com.patrick.recipes.domain.Property;
import com.patrick.recipes.domain.request.AddressRequest;
import com.patrick.recipes.domain.request.PropertyRequest;

import java.util.List;

public interface IPropertyService {
    Property getPropertyById(int id);
    List<Property> getAllProperties();
    void save(PropertyRequest request);
    void updatePropertyById(int id, PropertyRequest request);
    void deletePropertyById (int id);

    void addAddress(int id, AddressRequest request);
}
