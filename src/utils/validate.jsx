export const checkCredentials = (email, password) => {
    const isEmailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(isEmailValid == false) return "Email is not valid";
    if(isPasswordValid == false) return "Password is not valid";
    

    return null;

}