package com.patrick.employeemanager.service;

import com.patrick.employeemanager.exception.UserNotFoundException;
import com.patrick.employeemanager.model.Employee;
import com.patrick.employeemanager.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

public class EmployeeService  {
    private final EmployeeRepo employeeRepo;
    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo){
        this.employeeRepo = employeeRepo;
    }

    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }
    public Employee getEmployee(Long employeeId){
        return   employeeRepo.findEmplyeeById(employeeId).orElseThrow(()-> new UserNotFoundException("User by id " + employeeId + "was not found"));
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public Employee updateEmployee(Employee em)
}
