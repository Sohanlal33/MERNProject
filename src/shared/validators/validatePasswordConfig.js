export const validatePasswordConfig = (pass, confPass) => {
    return pass === (confPass);
};

export const passwordConfigValidationMessage = "Passwords do not match.";
