const validation = (userData) => {
    const errors = {};


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
        errors.email = 'E nombre de usuario tiene que ser un email'
    }
    if (!userData.email) {
        errors.email = 'Debe ingresar un email '
    }
    if (userData.email.length > 35) {
        errors.email = 'El email no puede tener mas de 35 caracteres'
    }
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'La contraseña tiene que tener al menos un numero'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña tiene que tener entre 6 y 10 caracteres'
    }


    return errors;

}

export default validation;