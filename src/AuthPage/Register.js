import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
import {
    validateEmail,
    validatePassword,
    validatePasswordConfig,
    validateUsername,
    emailValidationMessage,
    passwordValidationMessage,
    passwordConfigValidationMessage,
    usernameValidationMessage
} from "../shared/validators";

export const Register = ({ switchAuthHandler }) => {
    const [formState, setFormState] = useState({
        email: { value: '', isValid: false, showError: false },
        password: { value: '', isValid: false, showError: false },
        username: { value: '', isValid: false, showError: false },
        passwordConf: { value: '', isValid: false, showError: false },
    });

    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: { ...prevState[field], value },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;

        switch (field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            case 'username':
                isValid = validateUsername(value);
                break;
            case 'passwordConf':
                isValid = validatePasswordConfig(formState.password.value, value);
                break;
            default:
                break;
        }

        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    return (
        <div className="register-container">
            <Logo text={'Sign Up to Form'} />
            <form className="auth-form">
                <AuthInput
                    field="email"
                    label="Email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <AuthInput
                    field="username"
                    label="Username"
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={usernameValidationMessage}
                />
                <AuthInput
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <AuthInput
                    field="passwordConf"
                    label="Password confirmation"
                    value={formState.passwordConf.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConf.showError}
                    validationMessage={passwordConfigValidationMessage}
                />
                <button
                    disabled={
                        !formState.email.isValid ||
                        !formState.username.isValid ||
                        !formState.password.isValid ||
                        !formState.passwordConf.isValid
                    }
                >
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Already have an account ? Sign in
            </span>
        </div>
    );
};
