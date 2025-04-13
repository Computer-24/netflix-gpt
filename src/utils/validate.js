export const checkValidData = (email, password) => {
    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if (!isEmailValid) {
        return "Invalid email address"
    }
    if (!isPasswordValid) {
        return "Password must be at least 6 characters long and contain one number and one special character."
    }
    return null
}