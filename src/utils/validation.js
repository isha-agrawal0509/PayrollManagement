// Validation schema for password reset form
import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
  
  export const forgotPasswordValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
  });
  
  export const resetPasswordValidationSchema = yup.object().shape({
    newPassword: yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm password is required'),
  });
  
  export const employeeInfoValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    salary: yup.number().positive('Salary must be positive').required('Salary is required'),
  });
  