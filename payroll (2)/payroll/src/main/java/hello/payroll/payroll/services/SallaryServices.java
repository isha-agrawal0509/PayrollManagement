package hello.payroll.payroll.services;

import hello.payroll.payroll.model.SalarySlip;
import hello.payroll.payroll.repository.SalaryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SallaryServices {
    @Autowired
    private SalaryRepo salaryrepo;

    public List<SalarySlip> getSalarySlipByEmployeeId(int id){
       return salaryrepo.findByEmployeeId(id);
    }
    public SalarySlip generateSalarySlip(SalarySlip salarySlip){
         return salaryrepo.save(salarySlip);
    }


}
