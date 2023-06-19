package com.patrick.recipes.controller;

import com.patrick.recipes.domain.Property;
import com.patrick.recipes.domain.request.AddressRequest;
import com.patrick.recipes.domain.request.PropertyRequest;
import com.patrick.recipes.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/properties")
public class PropertyController {

    @Autowired
    PropertyService propertyService;

    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable("id") int propertyId){
    return propertyService.getPropertyById(propertyId);
    }

    @GetMapping
    public List<Property> getAllProperties(){
        return propertyService.getAllProperties();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody PropertyRequest request){
        propertyService.save(request);
    }

    @PutMapping("/{id}")
    public void updatePropertyById(@RequestBody PropertyRequest request,  @PathVariable("id") int propertyId){
        propertyService.updatePropertyById(propertyId, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") int propertyId){
        propertyService.deletePropertyById(propertyId);
    }
    @PatchMapping("/{id}/address")
    public void addAddress(@PathVariable("id") int id, @RequestBody AddressRequest request){
        propertyService.addAddress(id, request);

    }
}
