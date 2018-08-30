'use strict'

/*
Задача № 3. Ошибки в форме регистрации
Реализовать функцию handleRegistration, которая будет обрабатывать форму, заполненную пользователем, используя функцию registerNewUser, и выводить сообщение Пользователь успешно зарегистрирован, если функция не выбросила никаких исключений. Либо сообщения об ошибках, соответствующие брошенному исключению:

«test» не является адресом электронной почты — если брошено исключение NotValidEmailRegistrationError, где test — введенный адрес электронной почты;
Пользователь с логином «boss» уже зарегистрирован — если брошено исключение NotUniqueRegistrationError, где boss — введенный логин;
Введенные пароли не совпадают — если брошено исключение NotSameRegistrationError.
Описание функции
Принимает один аргумент:

data — поля заполненной формы, объекта.
Пример использования

const notValidEmailUser = { email: 'test' };
handleRegistration(notValidEmailUser);

const notUniqueLoginUser = { email: 'test@test.co', login: 'boss' };
handleRegistration(notUniqueLoginUser);

const differentPwUser = { email: 'test@test.co', login: 'ivan',
  password: '123', passwordCopy: '456' };
handleRegistration(differentPwUser);

const normalUser = { email: 'test@test.co', login: 'ivan', password: '123', passwordCopy: '123' };
handleRegistration(normalUser);
Если все реализовано верно, вы получите такой вывод:


«test» не является адресом электронной почты
Пользователь с логином «boss» уже зарегистрирован
Введенные пароли не совпадают
Пользователь успешно зарегистрирован
Процесс реализации
Создайте функцию handleRegistration.
Вызовите функцию registerNewUser, передав туда данные формы.
Если registerNewUser не бросила исключений, выведите сообщение об успешной регистрации.
Перехватите выброшенное исключение.
Выведите сообщение об ошибке.
Проверьте работу вашего кода на примере использования. Также протестируйте его, используя свои примеры.
*/

class RegistrationError extends Error {
    constructor(field = null) {
        super(`Ошибка в поле ${field}`);
        this.field = field;
    }
}
  
class NotValidEmailRegistrationError extends RegistrationError {
    constructor(field, email) {
        super(field);
        this.email = email;
    }
}
  
class NotUniqueRegistrationError extends RegistrationError {
    constructor(field, value) {
        super(field);
        this.value = value;
    }
}
  
class NotSameRegistrationError extends RegistrationError {}
  
function isValidEmail(email) {
    return /^\w+(\.\w+)*@\w+(\.\w+)+$/i.test(email);
}

function isUniqueLogin(login) {
    return !['admin', 'boss'].includes(login);
}
function checkPassword(original, copy) {
    return original === copy;
}
function registerNewUser(data) {
    if (!isValidEmail(data.email)) {
        throw new NotValidEmailRegistrationError('Адрес электронной почты', data.email);
    }
    if (!isUniqueLogin(data.login)) {
        throw new NotUniqueRegistrationError('Логин', data.login);
    }
    if (!checkPassword(data.password, data.passwordCopy)) {
        throw new NotSameRegistrationError('Пароль');
    }
}

function handleRegistration(data){
    try {
        registerNewUser(data);
        console.log('Пользователь успешно зарегистрирован');
    } catch (error) {
        if(error instanceof NotValidEmailRegistrationError){
            console.log(`"${error.email}" не является адресом электронной почты`);
        } else if(error instanceof NotUniqueRegistrationError){
            console.log(`Пользователь с логином "${error.value}" уже зарегистрирован`);
        } else if(error instanceof NotSameRegistrationError){
            console.log(`Введенные пароли не совпадают`);
        } else {
            console.log(error);
        }
    }
}

const notValidEmailUser = { email: 'test' };
handleRegistration(notValidEmailUser);

const notUniqueLoginUser = { email: 'test@test.co', login: 'boss' };
handleRegistration(notUniqueLoginUser);

const differentPwUser = { email: 'test@test.co', login: 'ivan',
  password: '123', passwordCopy: '456' };
handleRegistration(differentPwUser);

const normalUser = { email: 'test@test.co', login: 'ivan', password: '123', passwordCopy: '123' };
handleRegistration(normalUser);