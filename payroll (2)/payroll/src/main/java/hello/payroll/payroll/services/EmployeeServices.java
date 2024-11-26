package hello.payroll.payroll.services;

import hello.payroll.payroll.model.Employee;
import hello.payroll.payroll.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServices {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Employee getEmployeeByEmail(String email) {
        return employeeRepo.findByEmail(email);
    }

    public Employee updateEmployee(Employee employee) {
        // Encrypt password before saving
        if (employee.getPassword() != null) {
            employee.setPassword(passwordEncoder.encode(employee.getPassword()));
        }
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(int id) {
        employeeRepo.deleteById(id);
    }
}
