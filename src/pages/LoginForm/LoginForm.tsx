// LoginForm.tsx
import React, { useEffect, useState } from "react";
import { InputField, SubmitButton } from '../../components';
import { useDispatch, useSelector } from "react-redux";
import { 
	getUsers, 
	setValidationStatus, 
	clearValidationStatus 
} from "../../redux/actions/userActions";

import { users } from "../../data/users_data";
import { isFormValid } from "../../helper/validation";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [branchId, setBranchId] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string[]>([]);

	const dispatch = useDispatch()
	const reduxUsers = useSelector((state: any) => state?.users || []);
	const isUserValid = useSelector((state: any) => state.users.validation?.isValid);

    const handleSubmit = () => {
		const { isValid, errors } = isFormValid(username, password, branchId, users)

		if (!isValid) {
			dispatch(setValidationStatus(isValid, errors))
			setErrorMessage(errors)
		} else {
			console.log('valid')
		}

		if (isUserValid) {
			// Form submission logic
			console.log('Form is valid. Submitting...');
		  } else {
			console.log('Form is not valid. Please correct errors.');
		  }
	}

	useEffect(() => {
		// Dispatch data to Redux on initial load
		  if (!reduxUsers.length) {
			dispatch(getUsers(users))
		  }

		  // Clean up validation result on unmount
		  return () => {
			dispatch(clearValidationStatus());
		  };

	  }, [dispatch])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md p-6 bg-white shadow-md w-1/2 h-96 border border-black">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                <form>
                    <InputField
                        type="text"
                        value={branchId}
                        onChange={(e) => setBranchId(e.target.value)}
                        placeholder="Branch id"
                    />
                    <InputField
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="User name"
                    />
                    <InputField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    
					<SubmitButton onClick={handleSubmit} text="Login" />

					{errorMessage && 
						<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5" role="alert">
							<p className="mb-2">{errorMessage}</p>
						</div>
					}
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
