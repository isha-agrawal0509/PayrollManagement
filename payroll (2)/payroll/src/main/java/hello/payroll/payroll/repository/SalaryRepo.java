package hello.payroll.payroll.repository;

import hello.payroll.payroll.model.SalarySlip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface SalaryRepo extends JpaRepository<SalarySlip,Integer> {
    List<SalarySlip> findByEmployeeId(int id);
}
