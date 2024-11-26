package hello.payroll.payroll.controllers;

import hello.payroll.payroll.model.SalarySlip;
import hello.payroll.payroll.services.SallaryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/SalarySlip")
public class SallaryController  {
    @Autowired
    private SallaryServices sallaryServices;

    @GetMapping("/employee/{id}")
    public List<SalarySlip> getSalarySlipByEmployeeId(@PathVariable int id){
        return sallaryServices.getSalarySlipByEmployeeId(id);
    }

    @PostMapping("/")
    public SalarySlip generateSalarySlip(@RequestBody SalarySlip salarySlip){
        return sallaryServices.generateSalarySlip(salarySlip);
    }
}
