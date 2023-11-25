import { Dispatch } from 'redux';

export const isBranchIdValid = (branchId: string): boolean => {
    return /^\d+$/.test(branchId);
};

export const isUserValid = (username: string, password: string, branchId: string, users: any[]): boolean => {
    return users.some(user =>
      user.userName === username.trim() &&
      user.password === password.trim() &&
      user.branchId === parseInt(branchId, 10)  // Assuming branchId is stored as a number
    );
};

export const isFormValid = (username: string, password: string, branchId: string, users: any[]): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!username.trim() && !password.trim() && !branchId.trim()) {
        errors.push('All fields are required');
    } else if (!isBranchIdValid(branchId)) {
        errors.push('Branch ID must contain numbers only');
    } else if (!isUserValid(username, password, branchId, users)) {
        errors.push('Invalid credentials');
    } else {
        console.log('login')
    }
  
    const isValid = errors.length === 0;

    return { isValid, errors };
};