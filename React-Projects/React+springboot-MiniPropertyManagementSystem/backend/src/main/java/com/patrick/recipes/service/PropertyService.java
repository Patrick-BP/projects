package com.patrick.recipes.service;

import com.patrick.recipes.domain.Address;
import com.patrick.recipes.domain.Property;
import com.patrick.recipes.domain.State;
import com.patrick.recipes.domain.request.AddressRequest;
import com.patrick.recipes.domain.request.PropertyRequest;
import com.patrick.recipes.domain.response.PropertyResponse;
import com.patrick.recipes.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
public class PropertyService implements IPropertyService{

    @Autowired
    PropertyRepository propertyRepository;

    PropertyResponse propertyResponse;
    @Override
    public Property getPropertyById(int id) {
        return propertyRepository.findById(id).get();
    }

    @Override
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @Override
    public void save(@RequestBody PropertyRequest request) {
        var property = new Property();
        mapRequestToProperty(property, request);
        propertyRepository.save(property);
    }

    @Override
    public void updatePropertyById(int id, PropertyRequest request) {
        var property = getPropertyById(id);
        mapRequestToProperty(property, request);
        propertyRepository.save(property);

    }

    @Override
    public void deletePropertyById(int id) {
        propertyRepository.deleteById(id);
    }

    @Override
    public void addAddress(int id, AddressRequest request) {
        var property = getPropertyById(id);
        property.getAddress().setStreet(request.street());
        property.getAddress().setCity(request.city());
        property.getAddress().setState(State.valueOf(request.state()));
        property.getAddress().setZipcode(request.zipCode());
        propertyRepository.save(property);
    }

    private void mapRequestToProperty(Property property, PropertyRequest propertyRequest){
        property.setDescription(propertyRequest.description());
        property.setPrice(propertyRequest.price());
        property.setSize(propertyRequest.size());
        property.setBuiltYear(propertyRequest.builtYear());
        property.setNumberOfBeds(propertyRequest.numberOfBeds());
        property.setNumberOfBathrooms(propertyRequest.numberOfBathrooms());
    }
}
