export function isStrongPassword(password) {

    let message = "";

    if (password.length < 8) {
        return message = "Password must be at least 8 characters long. ";
    }

    if (!/[A-Z]/.test(password)) {
        return message = "Password must contain at least one uppercase letter. ";
    }

    if (!/[a-z]/.test(password)) {
        return message = "Password must contain at least one lowercase letter. ";
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        return message = "Password must contain at least one special character. ";
    }


}
