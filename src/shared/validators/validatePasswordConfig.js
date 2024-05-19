export const validatePasswordConfig = (pass, confPass) => {
    return pass === (confPass);
};

export const passwordConfigValidationMessage = "Password do not match.";