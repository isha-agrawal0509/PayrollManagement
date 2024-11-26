package hello.payroll.payroll.controllers;

import hello.payroll.payroll.model.Employee;
import hello.payroll.payroll.services.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeServices employeeServices;

    @GetMapping("/{email}")
    public Employee getEmployeeByEmail(@PathVariable String email){
        return employeeServices.getEmployeeByEmail(email);
    }

    @PostMapping("/")
    public Employee updateEmployee(@RequestBody Employee employee){
        return  employeeServices.updateEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id){
        employeeServices.deleteEmployee(id);
        return "Employee deleted successfully.";
    }

}
