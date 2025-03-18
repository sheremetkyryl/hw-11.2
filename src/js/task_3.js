const user = {
    name: "Taras",
    email: "taras123@gmail.com",
    password: "kvastaras2",
    login(userEmail, userPassword) {
        if(this.email === userEmail && this.password === userPassword) {
            alert(`Ви ввели правильні дані`)
            return true;
        } else {
            alert(`Ви ввели не правильні дані`)
            return false;
        }
    }
}
const userEmail = prompt("Введіть ваш Email");
const userPassword = prompt("Введіть ваш пароль");

user.login(userEmail, userPassword);