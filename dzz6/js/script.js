'use strict';

function createNewUser() {
    const newUser = {};

    newUser.firstName = prompt("Введіть ім'я:");
    newUser.lastName = prompt("Введіть прізвище:");
    newUser.birthday = prompt("Введіть дату народження (у форматі dd.mm.yyyy):");

    newUser.getAge = function() {
        const today = new Date();
        const birthDate = new Date(
            this.birthday.split('.')[2],
            this.birthday.split('.')[1] - 1,
            this.birthday.split('.')[0]
        );
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    newUser.getPassword = function() {
        const yearOfBirth = this.birthday.split('.')[2];
        return (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + yearOfBirth);
    };

    return newUser;
}

const user = createNewUser();

console.log("Ім'я:", user.firstName);
console.log("Прізвище:", user.lastName);
console.log("Дата народження:", user.birthday);
console.log("Вік:", user.getAge());
console.log("Пароль:", user.getPassword());
