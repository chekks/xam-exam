interface UserReducerState {
    users: any[];
    tableData: any[];
    validation: {
        isValid: boolean;
        errors: string[];
    };
}

const initialState: UserReducerState = {
    users: [],
    tableData: [],
    validation: {
        isValid: false,
        errors: [],
    },
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
        case 'SET_USER':
            return { 
                ...state, 
                users: action.payload,
            };

        case 'SET_VALIDATION_STATUS':
            return {
                ...state,
                validation: {
                    isValid: action.payload.isValid,
                    errors: action.payload.errors,
                },
            };
          
        case 'CLEAR_VALIDATION_STATUS':
            return {
                ...state,
                validation: {
                isValid: true,
                errors: [],
                },
            };

        default:
            return state;
  }
};

export default userReducer;
