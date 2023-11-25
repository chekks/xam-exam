export const getUsers = (users: any[]) => {
    return {
        type: 'SET_USER',
        payload: users,
    }
}

export const setValidationStatus = (isValid: boolean, errors: string[]) => {
    return {
        type: 'SET_VALIDATION_STATUS',
        payload: { isValid, errors },
    }
};
  
export const clearValidationStatus = () => {
    return {
        type: 'CLEAR_VALIDATION_STATUS',
    }
};
