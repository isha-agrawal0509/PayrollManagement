package hello.payroll.payroll.repository;

import hello.payroll.payroll.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee ,Integer> {

    Employee findByEmail(String email);
}
