package hello.payroll.payroll.config;

import hello.payroll.payroll.model.User;
import hello.payroll.payroll.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Check if the user with the email "testuser@example.com" exists
        if (userRepository.findByEmail("testuser@example.com").isEmpty()) {
            User user = new User();
            user.setEmail("testuser@example.com");  // Set email instead of username
            user.setPassword(passwordEncoder.encode("password"));
            user.setRole("Employee");
            userRepository.save(user);

            User admin = new User();
            admin.setEmail("adminuser@example.com");  // Set email instead of username
            admin.setPassword(passwordEncoder.encode("adminpassword"));
            admin.setRole("Admin");
            userRepository.save(admin);
        }
    }
}
